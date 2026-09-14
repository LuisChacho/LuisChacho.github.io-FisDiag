// BANCO DE 30 PREGUNTAS DE FÍSICA GENERAL (g = 9.8 m/s²) CON KaTeX
const questions = [
    { 
        id: 1, 
        topic: "Unidades SI", 
        question: "¿Cuál de las siguientes magnitudes corresponde a una magnitud fundamental en el Sistema Internacional?", 
        options: ["Joule (\\text{J})", "Kilogramo (\\text{kg})", "Newton (\\text{N})", "Watt (\\text{W})"], 
        answer: 1 
    },
    { 
        id: 2, 
        topic: "Conversión de Unidades", 
        question: "Un avión vuela a una rapidez constante de \\(216\\text{ km/h}\\). ¿A cuántos \\(\\text{m/s}\\) equivale dicha velocidad?", 
        options: ["\\(40\\text{ m/s}\\)", "\\(60\\text{ m/s}\\)", "\\(80\\text{ m/s}\\)", "\\(100\\text{ m/s}\\)"], 
        answer: 1 
    },
    { 
        id: 3, 
        topic: "Unidades Derivadas", 
        question: "La unidad de fuerza Newton (\\(\\text{N}\\)) expresada en magnitudes fundamentales del SI equivale a:", 
        options: ["\\(\\text{kg}\\cdot\\text{m/s}\\)", "\\(\\text{kg}\\cdot\\text{m/s}^2\\)", "\\(\\text{kg}\\cdot\\text{m}^2/\\text{s}^2\\)", "\\(\\text{kg}/(\\text{m}\\cdot\\text{s}^2)\\)"], 
        answer: 1 
    },
    { 
        id: 4, 
        topic: "Despeje de Fórmulas", 
        question: "En la ecuación de densidad \\(\\rho = \\frac{m}{V}\\), al despejar el volumen (\\(V\\)) obtenemos:", 
        options: ["\\(V = m \\cdot \\rho\\)", "\\(V = \\frac{m}{\\rho}\\)", "\\(V = \\frac{\\rho}{m}\\)", "\\(V = m + \\rho\\)"], 
        answer: 1 
    },
    { 
        id: 5, 
        topic: "Cinemática Vectorial", 
        question: "Un dron se desplaza desde la posición \\(\\vec{r}_1 = (4\\hat{i} + 2\\hat{j})\\text{ m}\\) hasta \\(\\vec{r}_2 = (10\\hat{i} - 6\\hat{j})\\text{ m}\\) en \\(\\Delta t = 2\\text{ s}\\). ¿Cuál es su vector velocidad media \\(\\vec{v}_m\\)?", 
        options: ["\\((3\\hat{i} - 4\\hat{j})\\text{ m/s}\\)", "\\((6\\hat{i} - 8\\hat{j})\\text{ m/s}\\)", "\\((7\\hat{i} - 2\\hat{j})\\text{ m/s}\\)", "\\((14\\hat{i} - 4\\hat{j})\\text{ m/s}\\)"], 
        answer: 0 
    },
    { 
        id: 6, 
        topic: "Cinemática Conceptos", 
        question: "¿Cuál es la diferencia fundamental entre el desplazamiento y la distancia recorrida?", 
        options: [
            "El desplazamiento es escalar y la distancia es vectorial", 
            "El desplazamiento depende de la trayectoria y la distancia es en línea recta", 
            "El desplazamiento es el vector \\(\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1\\); la distancia es la longitud de la trayectoria", 
            "Ambos conceptos son escalarmente idénticos"
        ], 
        answer: 2 
    },
    { 
        id: 7, 
        topic: "Desplazamiento Vectorial", 
        question: "Si una partícula efectúa los desplazamientos \\(\\Delta\\vec{r}_1 = (3\\hat{i} + 4\\hat{j})\\text{ m}\\) y \\(\\Delta\\vec{r}_2 = (5\\hat{i} - 10\\hat{j})\\text{ m}\\), ¿cuál es el módulo de su desplazamiento total \\(|\\Delta\\vec{r}_T|\\)?", 
        options: ["\\(14\\text{ m}\\)", "\\(10\\text{ m}\\)", "\\(8\\text{ m}\\)", "\\(12\\text{ m}\\)"], 
        answer: 1 
    },
    { 
        id: 8, 
        topic: "MRU Vectorial (Avión)", 
        question: "Un avión vuela a velocidad constante \\(\\vec{v} = (400\\hat{i} + 300\\hat{j})\\text{ km/h}\\) durante \\(t = 3\\text{ h}\\). ¿Cuál es la distancia escalar total recorrida?", 
        options: ["\\(1500\\text{ km}\\)", "\\(2100\\text{ km}\\)", "\\(1200\\text{ km}\\)", "\\(900\\text{ km}\\)"], 
        answer: 0 
    },
    { 
        id: 9, 
        topic: "MRU Vectorial", 
        question: "Un barco navega a \\(\\vec{v} = (8\\hat{i} - 6\\hat{j})\\text{ m/s}\\) partiendo de la posición \\(\\vec{r}_0 = (10\\hat{i} + 20\\hat{j})\\text{ m}\\). ¿Cuál es su vector posición final \\(\\vec{r}\\) a los \\(t = 5\\text{ s}\\)?", 
        options: ["\\((50\\hat{i} - 10\\hat{j})\\text{ m}\\)", "\\((40\\hat{i} - 30\\hat{j})\\text{ m}\\)", "\\((30\\hat{i} - 50\\hat{j})\\text{ m}\\)", "\\((18\\hat{i} + 14\\hat{j})\\text{ m}\\)"], 
        answer: 0 
    },
    { 
        id: 10, 
        topic: "Despeje MRU", 
        question: "Dada la ecuación de posición \\(\\vec{r}_f = \\vec{r}_0 + \\vec{v}\\cdot t\\), al despejar el tiempo (\\(t\\)) se obtiene:", 
        options: [
            "\\(t = \\frac{|\\vec{r}_f - \\vec{r}_0|}{|\\vec{v}|}\\)", 
            "\\(t = \\frac{|\\vec{v}|}{|\\vec{r}_f - \\vec{r}_0|}\\)", 
            "\\(t = |\\vec{r}_f - \\vec{r}_0| \\cdot |\\vec{v}|\\)", 
            "\\(t = \\frac{|\\vec{r}_f + \\vec{r}_0|}{|\\vec{v}|}\\)"
        ], 
        answer: 0 
    },
    { 
        id: 11, 
        topic: "MRU Práctica", 
        question: "Un proyectil se desplaza con MRU a una rapidez de \\(340\\text{ m/s}\\). ¿Cuánto tiempo tarda en recorrer una distancia de \\(1.7\\text{ km}\\)?", 
        options: ["\\(0.2\\text{ s}\\)", "\\(2\\text{ s}\\)", "\\(5\\text{ s}\\)", "\\(50\\text{ s}\\)"], 
        answer: 2 
    },
    { 
        id: 12, 
        topic: "MRU Encuentro Vectorial", 
        question: "Dos partículas A y B se mueven sobre el eje X con \\(\\vec{v}_A = (-4\\hat{i})\\text{ m/s}\\) y \\(\\vec{v}_B = (6\\hat{i})\\text{ m/s}\\). Si inicialmente están separadas \\(100\\hat{i}\\text{ m}\\) y se dirigen una hacia la otra, ¿en cuántos segundos se cruzan?", 
        options: ["\\(10\\text{ s}\\)", "\\(20\\text{ s}\\)", "\\(25\\text{ s}\\)", "\\(50\\text{ s}\\)"], 
        answer: 0 
    },
    { 
        id: 13, 
        topic: "MRUV Vectorial", 
        question: "Un móvil parte con velocidad \\(\\vec{v}_0 = (2\\hat{i} - 3\\hat{j})\\text{ m/s}\\) y acelera a constante \\(\\vec{a} = (4\\hat{i} + 2\\hat{j})\\text{ m/s}^2\\). ¿Cuál es su vector velocidad a los \\(t = 3\\text{ s}\\)?", 
        options: ["\\((14\\hat{i} + 3\\hat{j})\\text{ m/s}\\)", "\\((12\\hat{i} + 6\\hat{j})\\text{ m/s}\\)", "\\((6\\hat{i} - 1\\hat{j})\\text{ m/s}\\)", "\\((10\\hat{i} + 3\\hat{j})\\text{ m/s}\\)"], 
        answer: 0 
    },
    { 
        id: 14, 
        topic: "Despeje MRUV", 
        question: "Dada la ecuación escalar \\(v_f^2 = v_0^2 + 2a d\\), el despeje correcto para la aceleración (\\(a\\)) es:", 
        options: [
            "\\(a = \\frac{v_f^2 - v_0^2}{2d}\\)", 
            "\\(a = \\frac{(v_f - v_0)^2}{2d}\\)", 
            "\\(a = \\frac{v_f^2 + v_0^2}{2d}\\)", 
            "\\(a = \\frac{2d}{v_f^2 - v_0^2}\\)"
        ], 
        answer: 0 
    },
    { 
        id: 15, 
        topic: "MRUV Posición Vectorial", 
        question: "Un objeto parte del reposo en el origen con aceleración constante \\(\\vec{a} = (6\\hat{i} + 8\\hat{j})\\text{ m/s}^2\\). ¿Cuál es la magnitud de su posición \\(|\\vec{r}|\\) a los \\(t = 2\\text{ s}\\)?", 
        options: ["\\(10\\text{ m}\\)", "\\(20\\text{ m}\\)", "\\(28\\text{ m}\\)", "\\(40\\text{ m}\\)"], 
        answer: 1 
    },
    { 
        id: 16, 
        topic: "MCU Aceleración", 
        question: "Una partícula recorre una trayectoria circular de radio \\(R = 2\\text{ m}\\) con velocidad angular constante \\(\\omega = 3\\text{ rad/s}\\). ¿Cuál es el módulo de su aceleración centrípeta \\(a_c\\)?", 
        options: ["\\(6\\text{ m/s}^2\\)", "\\(12\\text{ m/s}^2\\)", "\\(18\\text{ m/s}^2\\)", "\\(36\\text{ m/s}^2\\)"], 
        answer: 2 
    },
    { 
        id: 17, 
        topic: "Despeje MCU", 
        question: "Sabiendo que la aceleración centrípeta es \\(a_c = \\frac{v^2}{R}\\), al despejar la velocidad tangencial (\\(v\\)) se obtiene:", 
        options: [
            "\\(v = \\sqrt{a_c \\cdot R}\\)", 
            "\\(v = (a_c \\cdot R)^2\\)", 
            "\\(v = \\frac{a_c}{R}\\)", 
            "\\(v = \\sqrt{\\frac{a_c}{R}}\\)"
        ], 
        answer: 0 
    },
    { 
        id: 18, 
        topic: "Caída Libre Teórico", 
        question: "En ausencia de resistencia del aire, si se dejan caer simultáneamente desde la misma altura una esfera de \\(1\\text{ kg}\\) y otra de \\(10\\text{ kg}\\):", 
        options: [
            "La esfera de \\(10\\text{ kg}\\) llega primero", 
            "Llegan al suelo simultáneamente con la misma aceleración \\(g\\)", 
            "La esfera de \\(1\\text{ kg}\\) cae más rápido por menor inercia", 
            "El tiempo depende de la geometría del cuerpo"
        ], 
        answer: 1 
    },
    { 
        id: 19, 
        topic: "Caída Libre Cálculo", 
        question: "Se suelta un cuerpo desde el reposo. Asumiendo \\(g = 9.8\\text{ m/s}^2\\), ¿cuál es su rapidez al cabo de \\(t = 3\\text{ s}\\)?", 
        options: ["\\(29.4\\text{ m/s}\\)", "\\(19.6\\text{ m/s}\\)", "\\(44.1\\text{ m/s}\\)", "\\(9.8\\text{ m/s}\\)"], 
        answer: 0 
    },
    { 
        id: 20, 
        topic: "Tiro Vertical Vectorial", 
        question: "Un objeto es lanzado verticalmente hacia arriba con \\(\\vec{v}_0 = (39.2\\hat{j})\\text{ m/s}\\). Con \\(\\vec{g} = (-9.8\\hat{j})\\text{ m/s}^2\\), ¿cuánto tiempo tarda en alcanzar su altura máxima?", 
        options: ["\\(4.0\\text{ s}\\)", "\\(2.0\\text{ s}\\)", "\\(8.0\\text{ s}\\)", "\\(3.92\\text{ s}\\)"], 
        answer: 0 
    },
    { 
        id: 21, 
        topic: "Parabólico Vectorial", 
        question: "Un proyectil se lanza con velocidad inicial \\(\\vec{v}_0 = (30\\hat{i} + 40\\hat{j})\\text{ m/s}\\). ¿Cuál es su vector velocidad \\(\\vec{v}\\) en el punto más alto de su trayectoria parabólica?", 
        options: ["\\((0\\hat{i} + 0\\hat{j})\\text{ m/s}\\)", "\\((30\\hat{i} + 0\\hat{j})\\text{ m/s}\\)", "\\((0\\hat{i} + 40\\hat{j})\\text{ m/s}\\)", "\\((30\\hat{i} + 40\\hat{j})\\text{ m/s}\\)"], 
        answer: 1 
    },
    { 
        id: 22, 
        topic: "Despeje Caída Libre", 
        question: "Partiendo del reposo, la distancia recorrida en caída libre es \\(h = \\frac{1}{2}g t^2\\). Al despejar el tiempo (\\(t\\)), la expresión correcta es:", 
        options: [
            "\\(t = \\sqrt{\\frac{2h}{g}}\\)", 
            "\\(t = \\frac{2h}{g}\\)", 
            "\\(t = \\sqrt{\\frac{h}{2g}}\\)", 
            "\\(t = \\left(\\frac{2h}{g}\\right)^2\\)"
        ], 
        answer: 0 
    },
    { 
        id: 23, 
        topic: "Leyes de Newton Vectorial", 
        question: "Dos fuerzas \\(\\vec{F}_1 = (5\\hat{i} + 8\\hat{j})\\text{ N}\\) y \\(\\vec{F}_2 = (3\\hat{i} - 2\\hat{j})\\text{ N}\\) actúan sobre un cuerpo de masa \\(m = 2\\text{ kg}\\). ¿Cuál es el vector aceleración resultante \\(\\vec{a}\\)?", 
        options: ["\\((4\\hat{i} + 3\\hat{j})\\text{ m/s}^2\\)", "\\((8\\hat{i} + 6\\hat{j})\\text{ m/s}^2\\)", "\\((2\\hat{i} + 5\\hat{j})\\text{ m/s}^2\\)", "\\((16\\hat{i} + 12\\hat{j})\\text{ m/s}^2\\)"], 
        answer: 0 
    },
    { 
        id: 24, 
        topic: "Primera Ley de Newton", 
        question: "Si la suma vectorial de todas las fuerzas externas sobre un objeto es nula (\\(\\sum \\vec{F} = 0\\hat{i} + 0\\hat{j}\\)), el objeto mantiene:", 
        options: [
            "Aceleración constante no nula", 
            "Movimiento Circular Uniforme", 
            "Estado de reposo o velocidad constante en línea recta (MRU)", 
            "Trayectoria parabólica"
        ], 
        answer: 2 
    },
    { 
        id: 25, 
        topic: "Despeje Segunda Ley", 
        question: "Sabiendo que \\(F_{\\text{neta}} = m \\cdot a\\) y que el peso es \\(W = m \\cdot g\\), al despejar la fuerza neta en función de \\(W\\) se obtiene:", 
        options: [
            "\\(F_{\\text{neta}} = \\frac{W \\cdot a}{g}\\)", 
            "\\(F_{\\text{neta}} = \\frac{W \\cdot g}{a}\\)", 
            "\\(F_{\\text{neta}} = \\frac{W}{a \\cdot g}\\)", 
            "\\(F_{\\text{neta}} = W \\cdot a \\cdot g\\)"
        ], 
        answer: 0 
    },
    { 
        id: 26, 
        topic: "Peso y Gravedad", 
        question: "Un cuerpo tiene una masa de \\(5\\text{ kg}\\). ¿Cuál es la magnitud de su peso considerando \\(g = 9.8\\text{ m/s}^2\\)?", 
        options: ["\\(49.0\\text{ N}\\)", "\\(50.0\\text{ N}\\)", "\\(9.8\\text{ N}\\)", "\\(24.5\\text{ N}\\)"], 
        answer: 0 
    },
    { 
        id: 27, 
        topic: "Trabajo Mecánico Vectorial", 
        question: "Una fuerza \\(\\vec{F} = (6\\hat{i} + 8\\hat{j})\\text{ N}\\) produce un desplazamiento \\(\\Delta\\vec{r} = (5\\hat{i} + 2\\hat{j})\\text{ m}\\). Mediante el producto escalar \\(W = \\vec{F} \\cdot \\Delta\\vec{r}\\), ¿qué trabajo realiza?", 
        options: ["\\(46\\text{ Joules}\\)", "\\(30\\text{ Joules}\\)", "\\(16\\text{ Joules}\\)", "\\(70\\text{ Joules}\\)"], 
        answer: 0 
    },
    { 
        id: 28, 
        topic: "Despeje Energía Cinética", 
        question: "A partir de la ecuación de energía cinética \\(E_k = \\frac{1}{2} m v^2\\), al despejar la rapidez (\\(v\\)) resulta:", 
        options: [
            "\\(v = \\sqrt{\\frac{2E_k}{m}}\\)", 
            "\\(v = \\frac{2E_k}{m}\\)", 
            "\\(v = \\sqrt{\\frac{E_k}{2m}}\\)", 
            "\\(v = (2E_k \\cdot m)^2\\)"
        ], 
        answer: 0 
    },
    { 
        id: 29, 
        topic: "Potencia Mecánica", 
        question: "Un motor realiza un trabajo mecánico de \\(W = 4500\\text{ J}\\) en un intervalo de tiempo \\(t = 15\\text{ s}\\). ¿Cuál es la potencia desarrollada?", 
        options: ["\\(300\\text{ W}\\)", "\\(67500\\text{ W}\\)", "\\(150\\text{ W}\\)", "\\(450\\text{ W}\\)"], 
        answer: 0 
    },
    { 
        id: 30, 
        topic: "Energía Potencial Gravitatoria", 
        question: "Un objeto de \\(2\\text{ kg}\\) se encuentra a una altura \\(h = 10\\text{ m}\\). Con \\(g = 9.8\\text{ m/s}^2\\), ¿cuál es su energía potencial gravitatoria \\(E_p\\)?", 
        options: ["\\(196\\text{ J}\\)", "\\(200\\text{ J}\\)", "\\(98\\text{ J}\\)", "\\(392\\text{ J}\\)"], 
        answer: 0 
    }
];

// ESTADO GLOBAL
let idx = 0;
let userAnswers = {};
let violations = 0;
let timeLeft = 3000; // 50 Minutos expresados en segundos (50 * 60)
let timerId = null;
let examActive = false;

// ELEMENTOS DOM
const overlayStart = document.getElementById('start-overlay');
const overlayBlock = document.getElementById('block-overlay');
const btnStart = document.getElementById('btn-start');
const btnUnlock = document.getElementById('btn-unlock');
const alertBanner = document.getElementById('alert-banner');

const qNumber = document.getElementById('q-number');
const qTopic = document.getElementById('q-topic');
const qText = document.getElementById('q-text');
const optionsBox = document.getElementById('options-box');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');

const timerEl = document.getElementById('timer');
const progVal = document.getElementById('prog-val');
const progressBar = document.getElementById('progress-bar');
const questionsGrid = document.getElementById('questions-grid');

// INICIALIZACIÓN DE LA APLICACIÓN
document.addEventListener('DOMContentLoaded', () => {
    initGrid();
    loadQuestion(idx);

    btnStart.addEventListener('click', () => {
        enterFullscreen();
        overlayStart.classList.add('hidden');
        examActive = true;
        startTimer();
        setupSecurityEvents();
    });

    btnUnlock.addEventListener('click', () => {
        overlayBlock.classList.add('hidden');
        enterFullscreen();
    });
});

function enterFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
        if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }
}

// SISTEMA DE SEGURIDAD Y CONTROL DE INCIDENCIAS
function setupSecurityEvents() {
    // Bloqueo de menú contextual, copia y pegado
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());

    // Bloqueo de atajos de teclado y captura de pantalla
    window.addEventListener('keydown', e => {
        if (!examActive) return;
        if (
            e.key === 'PrintScreen' || 
            e.keyCode === 44 || 
            e.key === 'F12' || 
            (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'a'))
        ) {
            e.preventDefault();
            triggerViolation();
        }
    });

    // Detección de pérdida de foco o cambio de pestaña
    window.addEventListener('blur', () => {
        if (examActive) triggerViolation();
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && examActive) triggerViolation();
    });

    // Detección de salida de Pantalla Completa
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && examActive && overlayStart.classList.contains('hidden')) {
            overlayBlock.classList.remove('hidden');
            triggerViolation();
        }
    });
}

function triggerViolation() {
    if (!examActive) return;
    violations++;
    alertBanner.classList.remove('hidden');
    setTimeout(() => alertBanner.classList.add('hidden'), 3500);
}

// TEMPORIZADOR DE 50 MINUTOS
function startTimer() {
    if (timerId) return;
    timerId = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        timerEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            finishExam();
        }
    }, 1000);
}

// RENDERIZADOR MATEMÁTICO KATEX
function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "\\(", right: "\\)", display: false},
                {left: "\\[", right: "\\]", display: true}
            ],
            throwOnError: false
        });
    }
}

// RENDERIZADO DE LA PREGUNTA ACTIVA
function loadQuestion(i) {
    const q = questions[i];
    qNumber.textContent = `Pregunta ${i + 1} de ${questions.length}`;
    qTopic.textContent = q.topic;
    qText.innerHTML = q.question;

    optionsBox.innerHTML = '';
    q.options.forEach((opt, oIdx) => {
        const item = document.createElement('div');
        item.className = `opt-card ${userAnswers[i] === oIdx ? 'active' : ''}`;
        item.innerHTML = `
            <input type="radio" class="opt-radio" name="opt" id="opt-${oIdx}" ${userAnswers[i] === oIdx ? 'checked' : ''}>
            <label class="opt-label" for="opt-${oIdx}">${opt}</label>
        `;
        item.addEventListener('click', () => {
            userAnswers[i] = oIdx;
            loadQuestion(i);
            updateProgress();
        });
        optionsBox.appendChild(item);
    });

    btnPrev.disabled = i === 0;
    btnNext.textContent = i === questions.length - 1 ? "Revisar Respuestas" : "Siguiente ▶";
    updateGrid();
    renderMath();
}

function updateProgress() {
    const count = Object.keys(userAnswers).length;
    progVal.textContent = `${count} / ${questions.length}`;
    progressBar.style.width = `${(count / questions.length) * 100}%`;
}

function initGrid() {
    questionsGrid.innerHTML = '';
    questions.forEach((_, i) => {
        const btn = document.createElement('div');
        btn.className = 'map-num';
        btn.textContent = i + 1;
        btn.addEventListener('click', () => {
            idx = i;
            loadQuestion(idx);
        });
        questionsGrid.appendChild(btn);
    });
}

function updateGrid() {
    const btns = questionsGrid.querySelectorAll('.map-num');
    btns.forEach((btn, i) => {
        btn.className = 'map-num';
        if (i === idx) btn.classList.add('active');
        if (userAnswers[i] !== undefined) btn.classList.add('filled');
    });
}

// CONTROLES DE NAVEGACIÓN
btnPrev.addEventListener('click', () => {
    if (idx > 0) { idx--; loadQuestion(idx); }
});

btnNext.addEventListener('click', () => {
    if (idx < questions.length - 1) { idx++; loadQuestion(idx); }
});

btnFinish.addEventListener('click', () => {
    if (confirm("¿Estás seguro de que deseas finalizar la evaluación?")) {
        finishExam();
    }
});

// FINALIZACIÓN Y PRESENTACIÓN DE RESULTADOS
function finishExam() {
    examActive = false;
    clearInterval(timerId);
    document.getElementById('panel-exam').classList.add('hidden');
    document.getElementById('panel-side').classList.add('hidden');
    document.getElementById('panel-results').classList.remove('hidden');

    let score = 0;
    const reviewBox = document.getElementById('review-box');
    reviewBox.innerHTML = '';

    questions.forEach((q, i) => {
        const ok = userAnswers[i] === q.answer;
        if (ok) score++;

        const card = document.createElement('div');
        card.className = `review-card ${ok ? 'ok' : 'fail'}`;
        card.innerHTML = `
            <p style="font-weight:600; font-size:0.95rem;">${i + 1}. ${q.question}</p>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.4rem;">
                Tu respuesta: <strong>${userAnswers[i] !== undefined ? q.options[userAnswers[i]] : 'Sin responder'}</strong> 
                ${ok ? '✓ Correcta' : '✗ (Correcta: ' + q.options[q.answer] + ')'}
            </p>
        `;
        reviewBox.appendChild(card);
    });

    document.getElementById('res-score').textContent = `${score} / ${questions.length}`;
    document.getElementById('res-percent').textContent = `${((score / questions.length) * 100).toFixed(1)}%`;
    document.getElementById('res-violations').textContent = violations;
    renderMath();
}