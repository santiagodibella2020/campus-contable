# Campus Contable

Campus interactivo para estudiar la carrera de Contador Público (normativa argentina): 28 materias en 4 ciclos, con lecciones, ejercicios corregidos al instante y evaluaciones.

Se usa desde el navegador en https://santiagodibella2020.github.io/campus-contable/ . El progreso queda guardado en el navegador de cada dispositivo.

## Cómo está armado

- `index.html`: el campus completo en un solo archivo (es lo que publica GitHub Pages).
- `src/plan.js`: plan de estudios. `src/mod/mNN.js`: contenido de cada materia. `src/engine.js` y `src/style.css`: motor y estilos.
- Para regenerar `index.html` después de editar `src/`: `python3 src/build.py`.
