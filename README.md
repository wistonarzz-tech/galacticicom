# Galactic Icom

Sitio web oficial estático de **Galactic Icom** — una plataforma de astrología, conciencia, tecnología y transformación personal.

**Dominio:** galacticicom.com  
**Contacto:** info@galacticicom.com

---

## ✨ Características

- Diseño oscuro, elegante, futurista y astrológico (no parece una plantilla)
- Fondo negro profundo con gradientes en morado, azul eléctrico y dorado suave
- Efecto de estrellas animadas sutiles en el hero
- Tarjetas con glassmorphism elegante
- Tipografía moderna y mucho espacio visual (aire)
- Totalmente responsive (móvil, tablet, escritorio)
- Animaciones suaves y micro-interacciones
- Navegación fija con menú móvil
- Calculadora de carta astral funcional (placeholder "próximamente" con mensaje personalizado)
- 100% HTML + CSS + JavaScript puro (sin frameworks ni dependencias)
- Listo para desplegar como sitio estático en **Vercel**, Netlify, GitHub Pages, etc.

---

## 📁 Estructura del proyecto

```
galacticicom/
├── .gitignore
├── vercel.json
├── index.html          # Página principal (todo el contenido)
├── styles.css          # Estilos completos y responsive
├── script.js           # Interactividad: partículas, nav móvil, formulario
└── README.md           # Este archivo
```

---

## 🚀 Cómo abrir localmente

### Opción 1: Abrir directamente (rápida)
1. Abre la carpeta `galacticicom` en tu explorador de archivos.
2. Haz doble clic en `index.html` (o usa `start index.html` en la terminal/PowerShell).
3. Se abrirá en tu navegador predeterminado.

> Nota: Algunas funciones (como el canvas de estrellas) funcionan perfectamente, pero para un desarrollo más cómodo se recomienda la opción 2.

### Opción 2: Servidor local (recomendada)

#### Con Python (incluido en la mayoría de sistemas)
```powershell
# En la carpeta del proyecto
cd C:\Users\wisto\projects\galacticicom

# Python 3
python -m http.server 8000
```

Abre en el navegador: **http://localhost:8000**

#### Con Node.js (si tienes instalado)
```powershell
npx serve .
# o
npx http-server .
```

#### Con la extensión "Live Server" de VS Code
1. Abre la carpeta en VS Code.
2. Instala la extensión **Live Server** de Ritwick Dey.
3. Haz clic derecho en `index.html` → **Open with Live Server**.

---

## 🌐 Desplegar en Vercel (recomendado)

### Opción A: Con Git (flujo profesional)
1. Inicializa un repositorio local:
   ```powershell
   git init
   git add .
   git commit -m "feat: primera versión completa del sitio Galactic Icom"
   ```
2. El repositorio oficial ya está creado en GitHub:
   **https://github.com/wistonarzz-tech/galacticicom**
3. (Si clonas localmente) Configura el remote:
   ```powershell
   git remote add origin https://github.com/wistonarzz-tech/galacticicom.git
   git branch -M main
   git push -u origin main
   ```
4. Ve a [vercel.com](https://vercel.com), inicia sesión con GitHub.
5. Haz clic en **"Add New Project"** → selecciona el repositorio `wistonarzz-tech/galacticicom` (o `galacticicom`).
6. En el paso de configuración, elige **Other / Static Site**.
   - No requiere Build Command.
   - No requiere Install Command.
7. Vercel detectará automáticamente que es un sitio estático (usa el `vercel.json` incluido).
8. Haz clic en **Deploy**. ¡Listo! Tendrás una URL tipo `galacticicom.vercel.app`.

### Opción B: Despliegue directo (sin Git)
1. Ve a [vercel.com](https://vercel.com) e inicia sesión.
2. Arrastra y suelta la carpeta completa `galacticicom` en la zona de despliegue.
3. Vercel lo desplegará en segundos.

Después del primer deploy puedes conectar tu dominio personalizado (`galacticicom.com`) desde el panel de Vercel.

---

## 🛠︎ Notas técnicas

- No hay dependencias externas. Todo funciona offline después de la primera carga.
- El formulario de la calculadora **no envía datos reales** (es una demo). Muestra un mensaje elegante indicando que la herramienta estará disponible próximamente. Los textos y comportamientos están ajustados para publicación.
- El canvas de estrellas está optimizado y se pausa cuando la pestaña está inactiva.
- El sitio usa HTML semántico, CSS moderno (variables, grid, flex, backdrop-filter) y JavaScript vanilla.
- Totalmente accesible con navegación por teclado y atributos ARIA básicos.

---

## 📌 Próximos pasos sugeridos (futuras versiones)

- Integración real con una API de astrología (Swiss Ephemeris / Astro-Seek / etc.)
- Generación de PDF del informe de carta astral
- Calendario de tránsitos interactivo
- Blog / artículos de astrología profunda
- Formulario de contacto real (con Formspree, Netlify Forms o similar)
- Modo oscuro / ajustes de accesibilidad avanzados

---

## 📄 Licencia

© 2026 Galactic Icom. Todos los derechos reservados.

Este sitio es propiedad intelectual de Galactic Icom. No está permitido su uso comercial sin autorización expresa.

---

**Galactic Icom**  
*Astrología • Conciencia • Tecnología*

Para consultas: [info@galacticicom.com](mailto:info@galacticicom.com)
