# BNKR Club Orizaba - Mapa Interactivo

## Configuración Requerida

### Variables de Entorno (.env.local)

Crea un archivo `.env.local` en la raíz del proyecto con estos datos de Firebase:

```
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
```

Los valores los obtienes de Firebase Console:
1. Ve a https://console.firebase.google.com
2. Crea un proyecto nuevo (o usa uno existente)
3. Ve a Configuración del Proyecto → Credenciales
4. Copia los valores

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## Características Actuales

✅ Mapa interactivo con 76 mesas
✅ Drag & drop para reorganizar mesas (Modo Admin)
✅ Zonas fijas: Escenario, DJ, Barra, Sanitarios, Escaleras
✅ Diseño Dark Mode con efectos neón
✅ Responsive (funciona en celular y desktop)
✅ 4 zonas de precios (Frontal, Media, VIP, Lateral)

## Próximas Fases

🔄 Autenticación con Google
🔄 Guardado de datos en Firebase
🔄 Sistema de reservas
🔄 Integración MercadoPago y PayPal
🔄 Panel admin para modificar precios

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css       # Estilos globales con neón
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página de inicio
├── components/
│   └── ClubMap.tsx       # Mapa interactivo
├── lib/
│   ├── constants.ts      # Datos de mesas y zonas
│   └── firebase.ts       # Config de Firebase
└── types/
    └── index.ts          # Tipos TypeScript
```

## Notas

- El admin puede mover cualquier mesa arrastrando
- Los datos se mostrarán en tiempo real (sin guardar aún)
- Los precios se pueden modificar desde admin (próxima fase)
- La app es completamente responsive

¿Necesitas help? Contacto: 272 279 0985
