# LUMEN - Landing Page

Landing page para LUMEN (Language Understanding through Motion and Expression Networks), una aplicación de traducción de lenguaje de señas a voz en tiempo real.

## Características

- ✅ Diseño responsive (mobile-first)
- ✅ Accesibilidad WCAG compliant
- ✅ Navegación por teclado completa
- ✅ Soporte para lectores de pantalla
- ✅ Controles de tamaño de fuente
- ✅ Modo alto contraste
- ✅ Smooth scroll
- ✅ Notificaciones toast accesibles
- ✅ Funcionalidad de descarga
- ✅ Tutorial en lengua de señas

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── layout.tsx          # Layout principal con configuración de fuentes
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales y tokens de diseño
├── components/
│   ├── header.tsx         # Navegación principal
│   ├── hero.tsx          # Sección hero con CTA
│   ├── features.tsx      # Características principales
│   ├── video-tutorial.tsx # Tutorial en lengua de señas
│   ├── gallery.tsx       # Galería de imágenes
│   ├── download.tsx      # Sección de descarga
│   └── footer.tsx        # Footer con controles de accesibilidad
├── public/
│   ├── logo.png          # Logo de LUMEN
│   └── download/
│       └── app-desktop.zip # Archivo de descarga (placeholder)
└── README.md
\`\`\`

## 🚀 CÓMO AGREGAR TU ARCHIVO .EXE DE LUMEN

### Paso 1: Preparar tu archivo ejecutable

1. **Crear un ZIP con tu aplicación:**
   \`\`\`
   lumen-app-windows.zip
   ├── LUMEN.exe              # Tu aplicación principal
   ├── README.txt             # Instrucciones de instalación
   ├── requisitos/
   │   ├── OBS-Studio-Setup.exe
   │   └── VB-CABLE_Driver_Pack43.zip
   └── manual-usuario.pdf     # Manual de usuario (opcional)
   \`\`\`

2. **Contenido sugerido para README.txt:**
   \`\`\`
   LUMEN - Instalación para Windows
   
   REQUISITOS PREVIOS:
   1. Windows 10 o superior
   2. OBS Studio (incluido en carpeta requisitos/)
   3. VB-Cable (incluido en carpeta requisitos/)
   
   INSTALACIÓN:
   1. Instalar OBS Studio desde requisitos/OBS-Studio-Setup.exe
   2. Instalar VB-Cable desde requisitos/VB-CABLE_Driver_Pack43.zip
   3. Ejecutar LUMEN.exe
   4. Seguir el tutorial en lengua de señas desde nuestra web
   
   SOPORTE: soporte@lumen-app.com
   \`\`\`

### Paso 2: Reemplazar el archivo de descarga

1. **Ubicación del archivo:** Coloca tu `lumen-app-windows.zip` en la carpeta `public/download/`
2. **Renombrar:** Cambia el nombre a `app-desktop.zip` o actualiza las referencias en el código

### Paso 3: Actualizar referencias en el código (si cambias el nombre)

Si quieres mantener el nombre `lumen-app-windows.zip`, actualiza estas líneas:

**En `components/header.tsx` (línea ~25):**
\`\`\`typescript
link.href = "/download/lumen-app-windows.zip"
\`\`\`

**En `components/hero.tsx` (línea ~15):**
\`\`\`typescript
link.href = "/download/lumen-app-windows.zip"
\`\`\`

**En `components/download.tsx` (línea ~15):**
\`\`\`typescript
link.href = "/download/lumen-app-windows.zip"
\`\`\`

## 🎯 EXPLICACIÓN DE BOTONES Y FUNCIONES

### Botón "Descargar" (Header y Hero)
- **Función:** Descarga directa de tu aplicación LUMEN para Windows
- **Acción:** Inicia la descarga del archivo ZIP con la aplicación y requisitos
- **Notificación:** Muestra un toast confirmando que la descarga comenzó

### Botón "Demo" (en la sección de características)
- **Función:** Demostración visual de cómo funciona LUMEN
- **Acción:** Abre un modal o redirige a una demo interactiva
- **Propósito:** Permite a los usuarios ver la aplicación en acción antes de descargarla

### Tutorial en Lengua de Señas
- **Función:** Video explicativo completo en lengua de señas mexicana
- **Características:** 
  - Subtítulos en español
  - Controles de accesibilidad
  - Transcripción completa
  - Explicación paso a paso de instalación y uso

## Personalización

### Colores de Marca

Los colores están definidos en `app/globals.css` usando variables CSS:

\`\`\`css
--brand-dark: #253361;  /* Azul oscuro */
--brand-aqua: #47B8A1;  /* Verde azulado */
--brand-mid:  #4B79BD;  /* Azul medio */
--white:      #ffffff;  /* Blanco */
\`\`\`

### Cambiar el Video Tutorial

Para agregar tu video real:

1. **Subir video:** Coloca tu archivo de video en `public/videos/tutorial-lumen.mp4`
2. **Actualizar componente:** En `components/video-tutorial.tsx`, reemplaza el placeholder con:
   \`\`\`tsx
   <video 
     className="w-full h-full object-cover"
     controls
     poster="/images/video-thumbnail.jpg"
   >
     <source src="/videos/tutorial-lumen.mp4" type="video/mp4" />
     <track 
       kind="subtitles" 
       src="/videos/subtitles-es.vtt" 
       srcLang="es" 
       label="Español"
       default 
     />
   </video>
   \`\`\`

### Personalizar Contenido

- **Título principal**: Editar en `components/hero.tsx`
- **Características**: Modificar el array `features` en `components/features.tsx`
- **Imágenes de galería**: Actualizar el array `images` en `components/gallery.tsx`
- **Información de contacto**: Editar en `components/footer.tsx`

## Despliegue

### GitHub Pages

1. Haz push del código a tu repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona "GitHub Actions" como source
4. El sitio se desplegará automáticamente

### Netlify

1. Conecta tu repositorio de GitHub a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `out`
4. Despliega

### Vercel

1. Conecta tu repositorio a Vercel
2. El despliegue será automático

## Desarrollo Local

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run start
\`\`\`

## Accesibilidad

Este sitio cumple con las pautas WCAG 2.1 AA e incluye:

- Navegación por teclado completa
- Soporte para lectores de pantalla
- Contrastes de color adecuados
- Texto alternativo para imágenes
- Roles ARIA apropiados
- Skip links
- Controles de tamaño de fuente
- Notificaciones accesibles
- Tutorial en lengua de señas con subtítulos

## Tecnologías Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React (iconos)
- Google Fonts (Inter)

## Licencia

© 2025 LUMEN. Todos los derechos reservados.
