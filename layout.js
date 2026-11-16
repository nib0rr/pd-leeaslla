// Inserta cabecera, menú y pie de página en todas las páginas (se edita una sola vez aquí).
const paginas = [
  ["index.html", "Inicio"],
  ["definicion.html", "1. Definición del proyecto"],
  ["busqueda.html", "2. Búsqueda y selección"],
  ["contenido.html", "3. Desarrollo del contenido"],
  ["ia.html", "4. Uso de IA"],
  ["referencias.html", "Referencias y licencias"]
];
const actual = location.pathname.split("/").pop() || "index.html";

document.getElementById("cabecera").innerHTML =
  "<h1>Transformación Digital y Liderazgo de Proyectos Tecnológicos</h1>" +
  "<p>Mi ruta como puente entre la técnica y el negocio · Portafolio digital · Producto Académico N.° 2</p>";

document.getElementById("menu").innerHTML = paginas
  .map(p => '<a href="' + p[0] + '"' + (p[0] === actual ? ' class="activo"' : "") + ">" + p[1] + "</a>")
  .join("");

document.getElementById("pie").innerHTML =
  "<p><strong>Robinson Lee Aslla Sucasaire</strong> · Ingeniería de Sistemas e Informática · Universidad Continental</p>" +
  "<p>Gestión de la Información y del Aprendizaje · NRC 39003 · Docente: José Haman Fuentes Ocampo</p>" +
  '<p>Contacto: <a href="mailto:73816380@continental.edu.pe">73816380@continental.edu.pe</a></p>' +
  '<p>Contenido original bajo licencia <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>. ' +
  'Consulta las <a href="referencias.html">referencias y licencias</a>.</p>';
