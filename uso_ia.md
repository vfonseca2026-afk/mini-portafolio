# Declaración de uso de inteligencia artificial

**Estudiante:** Vicente Fonseca
**Actividad:** Evaluación N°3 · Mini portafolio con React
**Asignatura:** Desarrollo de Frontend · Docente: Cristian Iglesias Vera

---

## 1. IA usada

Utilicé **Claude**, el asistente de inteligencia artificial de Anthropic, a través de su interfaz web (claude.ai), en una única conversación. No utilicé otras herramientas de IA.

## 2. Modelo

**Claude Sonnet 5.5** (Anthropic).

## 3. Prompts realizados

Los prompts relevantes, resumidos con fidelidad y en orden:

1. Adjunté el wireframe del portafolio y una captura de mi `index.css`, y pedí migrar el wireframe a los estilos y contenidos de mi proyecto, con el código modificado para cada archivo según los requerimientos.
2. Pedí arreglar el error de `Inicio.tsx` (`Cannot find module 'react-icons/fi'`) y modificar los componentes según lo que ya tenían mis archivos, ajustando el contenido estrictamente al wireframe. Adjunté mis `Header`, `Footer`, `Layout`, `TarjetaProyecto` y `FormularioContacto`.
3. Pedí el CSS ("ahora dame el css").
4. Adjunté mi CSS antiguo y pedí asegurarme de que el nuevo no rompiera nada del código.
5. Adjunté `Proyectos.jsx` y `TarjetaProyecto.jsx` y pedí ajustar ambos para poder dejar un enlace para cada proyecto.
6. Entregué mi versión de `Proyectos.jsx` con mis proyectos reales (Psicoanálisis Conductual y Bitácora Fungi) y pedí adaptar el código a ella.
7. Adjunté los documentos de requerimientos de la evaluación y pedí ayuda para crear el `README.md` y esta declaración de uso de IA.

## 4. Outputs

**Lo que la herramienta me devolvió:**

- Código completo del `index.css` con variables de color, estilos de header, footer, hero, tarjetas, habilidades, proyectos y formulario.
- Código de `main.jsx`, `App.jsx` con las cinco rutas y `Layout`.
- Versiones de `Header`, `Footer`, `TarjetaProyecto` y `FormularioContacto` con clases CSS del wireframe.
- Código de las cinco páginas (`Inicio`, `SobreMi`, `Habilidades`, `Proyectos`, `Contacto`).
- Explicación y solución al error de `react-icons` (instalar el paquete y reiniciar el servidor de TypeScript).
- Revisión de compatibilidad entre mi CSS antiguo y el nuevo, con un comando `grep` para detectar clases antiguas.
- Detección de que `Proyectos.jsx` usaba la clave `url` mientras `TarjetaProyecto` leía la prop `enlace`.
- Borradores del `README.md` y de este archivo.

**Lo que usé:**

- La estructura de rutas con `Routes`, `Route`, `Layout` y `Outlet`, y los `NavLink` con clase activa.
- Las clases CSS y el `index.css` en general.
- La corrección del nombre de prop `enlace` y la lógica para mostrar "Enlace no disponible" cuando un proyecto no tiene link.
- La solución al error de instalación de `react-icons`.

**Lo que descarté o reemplacé:**

- Los datos de ejemplo del código generado (nombre genérico "Tu Nombre", proyecto "Gestor de Tareas Kanban" y enlaces `#`), que reemplacé por mi nombre, mis proyectos reales y mis enlaces publicados.
- Las sugerencias opcionales que no eran necesarias para cumplir la evaluación (por ejemplo, cambiar el color primario del tema o modificar el logo del header).

## 5. Ajustes

- **Conservé la lógica de mis propios componentes.** En `FormularioContacto.tsx` se mantuvo mi validación original (campos obligatorios y revisión del correo con `@` y `.`), mis interfaces de TypeScript y mi manejo del estado con `useState`; solo se agregaron clases CSS y los textos del wireframe. Lo mismo con `TarjetaProyecto` y `Header`, donde el punto de partida fue mi código y no uno nuevo.
- **Reemplacé el contenido de ejemplo por contenido propio:** mi nombre en el hero y el footer, y mis dos proyectos reales con sus descripciones y enlaces publicados (Psicoanálisis Conductual y Bitácora Fungi).
- **Corregí la incompatibilidad entre `Proyectos.jsx` y `TarjetaProyecto`:** al detectar que los enlaces no aparecían, unifiqué el nombre de la prop como `enlace` en ambos archivos.
- **Resolví el error de dependencias** instalando `react-icons` y `react-router-dom` en mi proyecto y reiniciando el servidor de TypeScript.
- **Verifiqué que el CSS nuevo no rompiera el código existente**, comparándolo con mi CSS anterior y revisando que los componentes usaran las clases nuevas.

## 6. Reflexión crítica

Usar la IA me sirvió sobre todo para avanzar rápido en la parte más repetitiva: convertir el wireframe en estructura de componentes y en un CSS ordenado por clases. También me ayudó a detectar errores concretos que me habrían costado más tiempo, como el módulo `react-icons` que no estaba instalado y el desajuste entre `url` y `enlace`, que hacía que los botones de proyectos nunca aparecieran.

Lo que más me costó fue integrar el código generado con mis archivos existentes. La IA entregó una primera versión pensada desde cero, y tuve que pedirle que se adaptara a mis componentes, a mi mezcla de `.jsx` y `.tsx` y a mi CSS anterior. Aprendí que un código que "funciona" solo sirve si encaja con el resto del proyecto, y que los errores de nombres entre archivos (como una prop mal escrita) no siempre muestran un error visible, simplemente hacen que algo no aparezca.

También aprendí cómo se conectan las rutas con React Router (`Layout` con `Outlet` y `NavLink`), cómo viajan los datos por props desde `Proyectos` hacia `TarjetaProyecto` y cómo el formulario controla sus campos y errores con `useState`. Para una próxima vez, intentaría escribir primero mi propia versión de cada componente y usar la IA para revisarla y corregirla, en lugar de partir del código que ella genera, porque así entiendo mejor cada decisión.