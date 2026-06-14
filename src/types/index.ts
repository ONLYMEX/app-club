export interface Mesa {
  id: string;
  numero: number;
  x: number;
  y: number;
  zona: "frontal" | "media" | "vip" | "lateral";
  capacidad: number;
  precio: number;
  estado: "disponible" | "ocupada" | "reservada";
  reservadoPor?: string;
  fecha?: string;
}

export interface Zona {
  id: string;
  nombre: "frontal" | "media" | "vip" | "lateral";
  precio: number;
  capacidad: number;
}

export interface ZonaFija {
  id: string;
  nombre: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tipo: "escenario" | "dj" | "barra" | "sanitario" | "escaleras";
  color: string;
}

export interface Usuario {
  id: string;
  email: string;
  nombre: string;
  rol: "admin" | "usuario";
  fotoPerfil?: string;
}
