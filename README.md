# Plataforma de Evaluación de Máxima Seguridad - Física

Plataforma de evaluación continua de Física alojada en **GitHub Pages**, configurada con protocolos estrictos de prevención de fraude académico, aleatorización de reactivos y control de intento único.

## 🛡️ Protocolos de Seguridad e Innovaciones

1. **Aleatorización Dinámica:** En cada sesión se desordena aleatoriamente la secuencia de las 40 preguntas y las opciones de respuesta dentro de cada una.
2. **Control de Intento Único:** Registro persistente de la Cédula/ID e identificador del dispositivo en `localStorage`. Una vez enviada la prueba, el acceso queda deshabilitado para nuevos intentos.
3. **Control Estricto de 3 Infracciones:** Si el estudiante sale de pantalla completa, cambia de pestaña o activa atajos de teclado durante la prueba 3 veces, la evaluación se cancela inmediatamente enviando la nota al informe final.
4. **Protección Anti-Capturas y Copiado:**
   - Inhabilitación de `PrintScreen`, `F12` y atajos como `Ctrl + C`, `Ctrl + U`, `Ctrl + S`.
   - Desactivación de menú contextual (clic derecho) y selección de texto `user-select: none`.
   - Reglas `@media print` que ocultan la interfaz en impresiones.
5. **Control de Navegación Kiosko:** Intercepción activa con `history.pushState` que imposibilita retroceder o abandonar la sesión activa.
6. **Diseño Multiplataforma (Responsive):** Interfaz auto-adaptable optimizada para teléfonos móviles, tabletas, laptops y PC de escritorio.

## 📊 Contenido Pedagógico
- Banco completo de 40 reactivos que abarca Unidades SI, Vectores, MRU, MRUV, Caída Libre, MCU, MCUV, Leyes de Newton, Dinámica, Estática, Trabajo, Potencia, Energía Cinética/Potencial e Impulso.