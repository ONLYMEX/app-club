"use client";

import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { MESAS_INICIALES, ZONAS_FIJAS, ZONAS } from "@/lib/constants";
import { Mesa } from "@/types";
import { Music, Wine, Droplet, Stair } from "lucide-react";

interface MesaConPosicion extends Mesa {
  isDragging?: boolean;
}

export default function ClubMap() {
  const [mesas, setMesas] = useState<MesaConPosicion[]>(MESAS_INICIALES);
  const [mesaSeleccionada, setMesaSeleccionada] = useState<number | null>(null);
  const [modoAdmin, setModoAdmin] = useState(true);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      distance: 8,
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const mesaId = active.id as number;

    setMesas((prevMesas) =>
      prevMesas.map((mesa) =>
        mesa.numero === mesaId
          ? {
              ...mesa,
              x: mesa.x + delta.x,
              y: mesa.y + delta.y,
            }
          : mesa
      )
    );
  };

  return (
    <div className="min-h-screen bg-bnkr-darkBg p-4 md:p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold neon-text-cyan mb-2">
          BNKR CLUB
        </h1>
        <p className="text-bnkr-neonPink text-lg">#TUYASABESDONDE</p>
      </div>

      {/* Controles Admin */}
      {modoAdmin && (
        <div className="mb-6 bg-bnkr-cardBg p-4 rounded-lg border border-bnkr-neonCyan neon-glow-cyan max-w-md mx-auto">
          <p className="text-sm text-bnkr-neonCyan mb-2">📋 MODO ADMIN</p>
          <p className="text-xs text-gray-400">
            Arrastra las mesas para reorganizarlas. Los cambios se guardarán automáticamente.
          </p>
        </div>
      )}

      {/* Mapa */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="relative bg-gradient-to-b from-blue-900/10 to-purple-900/10 rounded-lg border-2 border-bnkr-neonPurple/30 mx-auto"
          style={{
            width: "100%",
            maxWidth: "1200px",
            aspectRatio: "4/3",
            minHeight: "600px",
          }}
        >
          {/* Zonas Fijas */}
          {ZONAS_FIJAS.map((zona) => (
            <div
              key={zona.id}
              className={`absolute rounded-lg border-2 flex items-center justify-center font-bold text-sm md:text-base ${zona.color}`}
              style={{
                left: `${(zona.x / 1200) * 100}%`,
                top: `${(zona.y / 600) * 100}%`,
                width: `${(zona.width / 1200) * 100}%`,
                height: `${(zona.height / 600) * 100}%`,
              }}
            >
              <span className="text-center">{zona.nombre}</span>
            </div>
          ))}

          {/* Mesas */}
          {mesas.map((mesa) => (
            <DraggableMesa
              key={mesa.numero}
              mesa={mesa}
              modoAdmin={modoAdmin}
              isSeleccionada={mesaSeleccionada === mesa.numero}
              onSelect={setMesaSeleccionada}
            />
          ))}
        </div>
      </DndContext>

      {/* Info Mesa Seleccionada */}
      {mesaSeleccionada && (
        <div className="mt-8 bg-bnkr-cardBg p-6 rounded-lg border border-bnkr-neonPink neon-glow-pink max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold neon-text-pink mb-2">
              MESA {String(mesaSeleccionada).padStart(2, "0")}
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-bnkr-neonCyan">Zona:</span>{" "}
                {ZONAS[mesas.find((m) => m.numero === mesaSeleccionada)?.zona as keyof typeof ZONAS]?.nombre}
              </p>
              <p>
                <span className="text-bnkr-neonCyan">Precio:</span> $
                {ZONAS[mesas.find((m) => m.numero === mesaSeleccionada)?.zona as keyof typeof ZONAS]?.precio}
              </p>
              <p>
                <span className="text-bnkr-neonCyan">Capacidad:</span>{" "}
                {ZONAS[mesas.find((m) => m.numero === mesaSeleccionada)?.zona as keyof typeof ZONAS]?.capacidad} personas
              </p>
            </div>
            <button
              onClick={() => setMesaSeleccionada(null)}
              className="mt-4 w-full bg-bnkr-neonPink hover:bg-bnkr-neonPink/80 text-black font-bold py-2 rounded transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface DraggableMesaProps {
  mesa: MesaConPosicion;
  modoAdmin: boolean;
  isSeleccionada: boolean;
  onSelect: (numero: number) => void;
}

function DraggableMesa({
  mesa,
  modoAdmin,
  isSeleccionada,
  onSelect,
}: DraggableMesaProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: mesa.numero,
      disabled: !modoAdmin,
    });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        position: "absolute",
        left: `${(mesa.x / 1200) * 100}%`,
        top: `${(mesa.y / 600) * 100}%`,
      }}
      {...(modoAdmin ? attributes : {})}
      {...(modoAdmin ? listeners : {})}
      onClick={() => onSelect(mesa.numero)}
      className={`cursor-pointer transition-all duration-200 ${
        isDragging ? "opacity-50" : "opacity-100"
      } ${isSeleccionada ? "scale-110" : "scale-100"}`}
    >
      <div
        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center font-bold text-xs md:text-sm transition-all ${
          isSeleccionada
            ? "bg-bnkr-neonPink border-2 border-bnkr-neonPink neon-glow-pink text-black"
            : "bg-bnkr-neonGreen border-2 border-bnkr-neonGreen text-black hover:scale-105"
        }`}
      >
        {String(mesa.numero).padStart(2, "0")}
      </div>
    </div>
  );
}
