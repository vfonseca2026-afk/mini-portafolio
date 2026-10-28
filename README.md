# Mini Portafolio · Vicente Fonseca

Portafolio personal construido con **React (Vite)** y **React Router** como parte de la Evaluación N°3 de Desarrollo de Frontend (Ingeniería Civil Informática, Instituto Tecnológico UC Temuco).

El sitio presenta quién soy, qué estudio, las tecnologías que manejo, los proyectos en los que he trabajado y un formulario para contactarme.

## Secciones

- **Inicio:** mi nombre, mi rol y una invitación a recorrer el sitio, con cuatro tarjetas destacadas.
- **Sobre mí:** qué estudio, qué me interesa y hacia dónde quiero ir.
- **Habilidades:** tecnologías con su nivel declarado (barra de progreso) y herramientas de trabajo.
- **Proyectos:** proyectos con imagen, título, descripción y enlace.
- **Contacto:** formulario con nombre, correo y mensaje, con validación y confirmación de envío.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

## Instalación

```bash
git clone [COMPLETAR: URL del repositorio]
cd mini-portafolio
npm install
```

`npm install` instala todas las dependencias del `package.json`, entre ellas `react-router-dom` (rutas) y `react-icons` (íconos).

## Cómo ejecutarlo

```bash
npm run dev
```

Luego abre en el navegador la dirección que indique la terminal (normalmente `http://localhost:5173`).

Otros comandos útiles:

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve localmente esa versión de producción
```

## Estructura de carpetas

```
mini-portafolio/
├── public/
├── src/
│   ├── assets/                    # Imágenes del sitio
│   │   ├── hero.jpg
│   │   ├── proyecto-psicoanalisis.png
│   │   └── proyecto-fungi.jpg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── TarjetaProyecto.jsx
│   │   └── FormularioContacto.tsx
│   ├── pages/
│   │   ├── Inicio.tsx
│   │   ├── SobreMi.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Proyectos.jsx
│   │   └── Contacto.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── uso_ia.md
```

### Qué hace cada archivo principal

| Archivo | Función |
|---|---|
| `main.jsx` | Punto de entrada. Monta la app y la envuelve con `BrowserRouter`. |
| `App.jsx` | Define las cinco rutas con `Routes` y `Route`, todas dentro del `Layout`. |
| `index.css` | Estilos globales: variables de color, tipografía, header, footer, tarjetas, formulario y diseño responsive. |
| `Layout.jsx` | Estructura común de todas las páginas: `Header`, contenido de la ruta (`Outlet`) y `Footer`. |
| `Header.jsx` | Logo y los cinco enlaces de navegación con `NavLink`; marca como activo el enlace de la página actual. |
| `Footer.jsx` | Muestra mi nombre y el año actual en todas las páginas. |
| `TarjetaProyecto.jsx` | Recibe por props `titulo`, `descripcion`, `enlace` e `imagen`. Si no hay enlace, muestra "Enlace no disponible"; si no hay imagen, muestra un recuadro gris. |
| `FormularioContacto.tsx` | Formulario con `useState` para los campos, los errores y el estado de envío. Valida y confirma. |
| `Inicio.tsx`, `SobreMi.jsx`, `Habilidades.jsx`, `Proyectos.jsx`, `Contacto.jsx` | Una página por ruta. `Proyectos.jsx` mantiene el arreglo de proyectos y reparte los datos a `TarjetaProyecto` mediante props. |

## Rutas

| Ruta | Enlace en el menú | Qué muestra |
|---|---|---|
| `/` | Inicio | Presentación, rol y botón "Explorar" que lleva a Proyectos. |
| `/sobre-mi` | Sobre mí | Qué estudio, qué me interesa y mis objetivos. |
| `/habilidades` | Habilidades | Tecnologías con nivel y herramientas. |
| `/proyectos` | Proyectos | Tarjetas de proyectos con imagen, descripción y enlace. |
| `/contacto` | Contacto | Formulario de contacto. |

Orden del menú: **Inicio · Sobre mí · Habilidades · Proyectos · Contacto**.

## Formulario de contacto

- **Campos:** nombre, correo y mensaje, todos obligatorios.
- **Validación:** se revisa que los tres campos estén completos y que el correo tenga formato válido. Los errores aparecen bajo cada campo.
- **Confirmación:** si todo es correcto, se muestra el mensaje "¡Mensaje enviado con éxito!" y se limpian los campos.
- El formulario no envía los datos a un servidor; solo valida y confirma en pantalla.

## Dificultades encontradas y cómo las resolví

1. **Error `Cannot find module 'react-icons/fi'`.** Los íconos no se mostraban y VS Code marcaba error porque el paquete no estaba instalado. Lo resolví ejecutando `npm i react-icons react-router-dom` y reiniciando el servidor de TypeScript.
2. **Los enlaces de los proyectos no aparecían.** En `Proyectos.jsx` los datos usaban la clave `url`, pero `TarjetaProyecto` lee la prop `enlace`, así que siempre mostraba "no disponible". Unifiqué ambos archivos con el nombre `enlace`.
3. **Estilos antiguos vs. estilos nuevos.** El CSS original estilaba etiquetas (`header`, `form`, `nav a`) y el nuevo usa clases. Revisé que los componentes usaran las clases nuevas para que nada quedara sin estilo.
4. **Imágenes estiradas.** Las imágenes de Inicio y Proyectos se deformaban dentro de un recuadro de tamaño fijo. Lo resolví con `height: auto` en la imagen principal y `object-fit: cover` en las tarjetas.
5. **Mezcla de JavaScript y TypeScript.** Algunos archivos son `.jsx` y otros `.tsx`. Para importar imágenes desde TypeScript fue necesario el archivo `src/vite-env.d.ts` con `/// <reference types="vite/client" />`.

[COMPLETAR: agrega aquí cualquier otra dificultad real que hayas tenido durante la clase.]

## Tecnologías utilizadas

React · Vite · React Router · TypeScript/JavaScript · React Icons · CSS

## Autor

Vicente Fonseca · Ingeniería Civil Informática · Instituto Tecnológico UC Temuco