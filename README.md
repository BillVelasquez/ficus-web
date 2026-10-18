# Ficus Web — Landing Page Corporativa con Astro

Sitio web y landing page de alta conversión para **Ficus ERP**, desarrollado con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/), optimizado para SEO técnico y Core Web Vitals.

## 🌿 Características Principales

- **Arquitectura de Contenidos en Markdown (`src/content/sections/`):**
  - Cada sección de la landing (Hero, Propuestas de valor, Comparativa contra software genérico, Módulos preconstruidos, Herramientas de personalización, Acompañamiento, Garantías y FAQs, Call to Action) está redactada y parametrizada en archivos `.md` con validación Zod de Astro Content Collections.
- **Máximo Estándar SEO:**
  - Etiquetas Open Graph y Twitter Cards completas.
  - Datos Estructurados JSON-LD (`SoftwareApplication`, `Organization`, `WebSite`, `FAQPage` para Rich Snippets en Google).
  - Semántica HTML5 impecable (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Generación nativa de `sitemap-index.xml` y `sitemap.xml`.
  - Archivo `robots.txt` optimizado.
- **Rendimiento Ultrarrápido:** Cero JavaScript cliente innecesario (arquitectura de islas de Astro), carga instantánea y puntaje Lighthouse 100/100.
- **Integración con Leaf:** Se gestiona fácilmente desde el script raíz del monorepo mediante `./leaf landing`.

## 🚀 Comandos

```bash
# Iniciar servidor de desarrollo en http://localhost:4321
npm run dev
# o desde la raíz del proyecto vainilla:
./leaf landing

# Compilar para producción (genera directorio dist/)
npm run build
# o desde la raíz del proyecto vainilla:
./leaf build-landing

# Previsualizar el build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```text
ficus-web/
├── public/                 # Archivos estáticos públicos (logos, robots.txt, favicon)
├── src/
│   ├── components/         # Componentes modulares Astro (Header, Hero, Modules, etc.)
│   ├── content/
│   │   ├── config.ts       # Esquema Zod de validación de colecciones
│   │   └── sections/       # Archivos Markdown con todo el contenido editable
│   │       ├── 01-hero.md
│   │       ├── 02-value-props.md
│   │       ├── 03-dilemma.md
│   │       ├── 04-modules.md
│   │       ├── 05-customization.md
│   │       ├── 06-human-support.md
│   │       ├── 07-objections-faq.md
│   │       └── 08-cta.md
│   ├── layouts/
│   │   └── Layout.astro    # Layout base con metadatos SEO y JSON-LD
│   └── pages/
│       ├── index.astro     # Landing page principal
│       ├── 404.astro       # Manejo de error 404 con branding
│       ├── sitemap-index.xml.ts
│       └── sitemap.xml.ts
├── astro.config.mjs        # Configuración de Astro y Tailwind
├── tailwind.config.mjs     # Configuración de estilos y paleta Ficus
└── package.json
```
