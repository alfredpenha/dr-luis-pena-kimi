# Dr. Luis Peña - Sitio Web Médico

Sitio web profesional para el Dr. Luis Alberto Peña Molina, Médico General especializado en Ultrasonido Diagnóstico en Tuxtla Gutiérrez, Chiapas.

## Características

- **Diseño Moderno y Sofisticado**: Interfaz profesional que genera confianza
- **SEO Optimizado**: Meta tags, Schema.org, Open Graph para mejor posicionamiento
- **IA-Friendly**: Structured data para ChatGPT, Gemini y otros asistentes
- **Analytics Integrado**: Google Analytics 4 con eventos personalizados
- **WhatsApp Integration**: Múltiples CTAs para aumentar contactos de pacientes
- **Responsive Design**: Adaptable a todos los dispositivos
- **Alto Rendimiento**: Optimizado para carga rápida

## Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Services, About, etc.
│   └── ui/              # shadcn/ui components
├── data/                # Configuración y datos estáticos
├── hooks/               # Custom React hooks
├── analytics/           # GA4 integration
└── styles/              # Estilos globales
```

## Configuración

### 1. Variables de Entorno

Edita `src/data/config.ts` para actualizar:

```typescript
export const siteConfig = {
  contact: {
    whatsapp: '529611234567',  // Tu número de WhatsApp
    phone: '+52 961 123 4567', // Tu número telefónico
    email: 'contacto@drluispena.com',
  },
  // ... otros datos
};
```

### 2. Google Analytics 4

1. Crea una propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtén tu Measurement ID (formato: G-XXXXXXXXXX)
3. Actualiza en `index.html`:

```html
<!-- Reemplaza G-XXXXXXXXXX con tu ID real -->
gtag('config', 'G-XXXXXXXXXX');
```

4. Actualiza en `src/data/config.ts`:

```typescript
export const ga4Config = {
  measurementId: 'G-XXXXXXXXXX',
  // ...
};
```

### 3. Imágenes

Reemplaza las imágenes en `public/images/`:
- `logo.png` - Logo del consultorio
- `doctor.png` - Foto profesional del doctor

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Deployment en GitHub Pages

### 1. Configurar Repositorio

1. Crea un nuevo repositorio en GitHub
2. Sube el código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuusuario/drluispena.git
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow ya está configurado en `.github/workflows/deploy.yml`

### 3. Activar Workflow

Cada push a la rama `main` activará el deployment automático.

Para verificar el estado:
- Ve a la pestaña **Actions** en tu repositorio
- El workflow "Deploy to GitHub Pages" debe estar en verde

### 4. Configurar Dominio (Opcional)

Si tienes un dominio personalizado:

1. Crea un archivo `public/CNAME` con tu dominio:

```
www.drluispena.com
```

2. Configura los DNS de tu dominio para apuntar a GitHub Pages

## Eventos de Analytics Trackeados

| Evento | Descripción |
|--------|-------------|
| `whatsapp_click` | Clic en botón de WhatsApp |
| `service_view` | Visualización de servicio |
| `contact_view` | Visualización de sección de contacto |
| `nav_click` | Clic en navegación |
| `scroll_depth` | Profundidad de scroll (25%, 50%, 75%, 90%, 100%) |

## SEO Implementado

- Meta tags optimizados
- Schema.org (Physician, MedicalProcedure)
- Open Graph para redes sociales
- Canonical URLs
- Sitemap (recomendado generar con herramienta externa)

## Mantenimiento

### Actualizar Contenido

Edita los archivos en `src/data/`:
- `config.ts` - Información general
- `services.ts` - Servicios ofrecidos

### Agregar Nuevas Secciones

1. Crea el componente en `src/components/sections/`
2. Impórtalo en `src/App.tsx`
3. Agrégalo al layout principal

## Licencia

Este proyecto es privado y pertenece al Dr. Luis Alberto Peña Molina.

## Contacto

Para soporte técnico o modificaciones, contactar al desarrollador.
