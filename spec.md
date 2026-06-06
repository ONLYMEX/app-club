📜 ESPECIFICACISPECIFICACIÓN DEL PROYECTO: BNKR CLUB ORIZABA

1. IDENTIDAD DE MARCA

    Nombre: BNKR Club Orizaba (#TUYASABESDONDE)
    Ubicación: Orizaba, Veracruz (Pueblo Mágico)
    Contacto: 272 279 0985
    Redes: @BNKROrizaba (FB/IG)
    Vibe: Inclusivo, neón, perreo, energía, fiesta sin filtros, ambiente LGBT+ friendly
2. STACK TÉCNICO

    Next.js (App Router), Tailwind CSS, @dnd-kit/core (drag & drop), Lucide React
    Estilo: Dark mode, acentos neón azul eléctrico, tipografía bold y moderna

3. LAYOUT DEL LUGAR (Del croquis)
Zonas Fijas: Escenario (centro), Cabina DJ (izq), Barra (inf der), WC Hombres (der sup - turquesa), WC Mujeres (der inf - rosa), Escaleras (inf izq)
Mesas: 76 mesas numeradas (01-76) distribuidas en zonas frontal, media, VIP y lateral

4. ARQUITECTURA DE LA APP
A. Cartelera Pública

    Muestra eventos de Viernes y Sábado
    Incluye: Nombre del artista/DJ, Hora del show, Tipo de evento (Pride, After, Temático), Cover (preventta/regular), Precio por mesa
    Botón "Reservar" que lleva al mapa

B. Mapa Interactivo

    Réplica exacta del croquis con las 76 mesas
    Mesas disponibles = VERDE, Ocupadas = ROJO, Reservadas = AMARILLO
    Click en mesa = muestra precio y botón de reservar
    Zonas fijas visibles (DJ, Escenario, Barra, Baños)

C. Sistema de Reservas

    Usuario selecciona mesa → ingresa número de personas → calcula total
    Fórmula: Total = (Precio Mesa) + (Personas × Cover)
    Checkout con resumen y pago
    Genera QR de confirmación

D. Panel Admin (Privado)

    Drag & Drop: Mover mesas y sillas (NO zonas fijas)
    Cambiar precios de mesas y covers por evento
    Marcar mesas como ocupadas/libres
    Crear/editar eventos de la cartelera
    Ver reservas del día en tiempo real

5. REGLAS DE NEGOCIO (OBLIGATORIAS)

    Días Sagrados: Solo se crean eventos para Viernes y Sábado. El sistema bloquea otros días.
    Mesa Bloqueada: Si está pagada = ROJO. Nadie la puede seleccionar ni el admin la puede mover ese día.
    Matemáticas Claras: El usuario DEBE ingresar número de personas. Total = Precio Mesa + (Personas × Cover).
    Corte de Reservas: Venta en línea se cierra 2 horas antes de abrir (8:00 PM). Después: "Venta solo en puerta".
    Hora Límite: Reserva válida hasta 1:00 AM. Si no llegan/confirman, la mesa se libera automáticamente.
    Tipos de Cover: Soporta preventa y regular (ej. Preventa $250, Regular $300).

6. INSTRUCCIÓN DE EJECUCIÓN

    Empieza por el Mapa Interactivo usando el croquis como referencia
    Luego la Cartelera Pública con filtros de fecha
    Después el Sistema de Reservas con cálculo de precios
    Finalmente el Panel Admin con drag & drop

IMPORTANTE: Código modular, limpio, sin adivinar. Si falta info, PREGUNTA.