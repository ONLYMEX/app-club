# 🚀 BNKR Club Orizaba - Guía de Ejecución Local

¡Hola! He preparado toda la estructura base para la **Fase 1: Mapa Interactivo** usando Next.js, Tailwind CSS y `@dnd-kit/core`.

Aquí tienes las instrucciones detalladas para instalar y correr el proyecto en tu máquina local.

---

## 🛠️ Requisitos Previos

Necesitas tener **Node.js** instalado en tu computadora para poder correr este proyecto.
Si aún no lo tienes:
1. Descarga e instala la versión recomendada (LTS) desde [nodejs.org](https://nodejs.org/).
2. Al instalarlo, se instalará automáticamente `npm` (el gestor de paquetes).

---

## 💻 Pasos para Correr en Local

Abre tu terminal favorita (PowerShell, Command Prompt o la integrada en tu editor) y ejecuta los siguientes comandos:

### 1. Entrar a la carpeta del proyecto
```bash
cd c:\Users\ANGL\Desktop\app
```

### 2. Instalar las dependencias
Este paso instalará Next.js, Tailwind CSS, `@dnd-kit/core` y `lucide-react` en base al archivo `package.json` que he configurado.
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
Una vez iniciado el servidor, abre tu navegador web e ingresa a:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Estructura del Código Creado

- 📍 **`src/components/ClubMap.tsx`**: El componente del mapa interactivo con las 76 mesas numeradas, las zonas fijas (Escenario, Cabina DJ, Barra, Sanitarios, Escaleras) y la lógica de drag & drop con `@dnd-kit/core`.
- 📍 **`src/app/page.tsx`**: La página principal con el vibe nocturno premium, colores oscuros y luces neón.
- 📍 **`src/app/globals.css`**: Estilos globales con efectos neón personalizados.
- 📍 **`tailwind.config.js`**: Configuración de los colores y sombras neón de BNKR Club.
