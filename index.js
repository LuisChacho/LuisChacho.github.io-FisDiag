// BANCO CON 30 PREGUNTAS EN NOTACIÓN LATEX COMPLETA Y COMPONENTES (i, j)
const questions = [
    { 
        id: 1, 
        topic: "Unidades SI", 
        question: "¿Cuál de las siguientes unidades corresponde a una magnitud fundamental en el Sistema Internacional?", 
        options: ["\\(\\text{Joule (J)}\\)", "\\(\\text{Kilogramo (kg)}\\)", "\\(\\text{Newton (N)}\\)", "\\(\\text{Watt (W)}\\)"], 
        answer: 1 
    },
    { 
        id: 2, 
        topic: "Conversión de Unidades", 
        question: "Un móvil lleva una rapidez constante. Convertir el siguiente valor a \\(\\text{m/s}\\): \\[ v = 216\\text{ km/h} \\]", 
        options: ["\\(40\\text{ m/s}\\)", "\\(60\\text{ m/s}\\)", "\\(80\\text{ m/s}\\)", "\\(100\\text{ m/s}\\)"], 
        answer: 1 
    },
    { 
        id: 3, 
        topic: "Unidades Derivadas", 
        question: "La unidad de fuerza en el SI es el Newton. Expresada en unidades fundamentales equivale a:", 
        options: ["\\[ 1\\text{ N} = 1\\text{ kg}\\cdot\\text{m}\\cdot\\text{s}^{-1} \\]", "\\[ 1\\text{ N} = 1\\text{ kg}\\cdot\\text{m}\\cdot\\text{s}^{-2} \\]", "\\[ 1\\text{ N} = 1\\text{ kg}\\cdot\\text{m}^2\\cdot\\text{s}^{-2} \\]", "\\[ 1\\text{ N} = 1\\text{ kg}\\cdot\\text{m}^{-1}\\cdot\\text{s}^{-2} \\]"], 
        answer: 1 
    },
    { 
        id: 4, 
        topic: "Despeje de Fórmulas", 
        question: "Dada la ecuación de densidad masa-volumen, despejar el volumen \\(V\\): \\[ \\rho = \\dfrac{m}{V} \\]", 
        options: ["\\[ V = m \\cdot \\rho \\]", "\\[ V = \\dfrac{m}{\\rho} \\]", "\\[ V = \\dfrac{\\rho}{m} \\]", "\\[ V = m + \\rho \\]"], 
        answer: 1 
    },
    { 
        id: 5, 
        topic: "MRU Vectorial en i, j", 
        question: "Un dron se desplaza con MRU desde una posición inicial hasta una posición final en un tiempo \\(\\Delta t = 2\\text{ s}\\): \\[ \\vec{r}_0 = (4\\hat{i} + 2\\hat{j})\\text{ m}, \\quad \\vec{r}_f = (10\\hat{i} - 6\\hat{j})\\text{ m} \\] Calcular su vector velocidad constante \\(\\vec{v}\\):", 
        options: ["\\[ \\vec{v} = (3\\hat{i} - 4\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v} = (6\\hat{i} - 8\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v} = (7\\hat{i} - 2\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v} = (14\\hat{i} - 4\\hat{j})\\text{ m/s} \\]"], 
        answer: 0 
    },
    { 
        id: 6, 
        topic: "Cinemática Vectorial", 
        question: "Definición matemática del vector desplazamiento \\(\\Delta\\vec{r}\\) respecto a las posiciones \\(\\vec{r}_1\\) y \\(\\vec{r}_2\\):", 
        options: [
            "\\[ \\Delta\\vec{r} = \\vec{r}_1 + \\vec{r}_2 \\]", 
            "\\[ \\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1 \\]", 
            "\\[ \\Delta\\vec{r} = |\\vec{r}_2| - |\\vec{r}_1| \\]", 
            "\\[ \\Delta\\vec{r} = \\dfrac{\\vec{r}_1 + \\vec{r}_2}{2} \\]"
        ], 
        answer: 1 
    },
    { 
        id: 7, 
        topic: "Desplazamiento Vectorial en i, j", 
        question: "Una partícula efectúa consecutivamente dos desplazamientos: \\[ \\Delta\\vec{r}_1 = (3\\hat{i} + 4\\hat{j})\\text{ m}, \\quad \\Delta\\vec{r}_2 = (5\\hat{i} - 10\\hat{j})\\text{ m} \\] Determinar el módulo del desplazamiento total \\(|\\Delta\\vec{r}_T|\\):", 
        options: ["\\(14\\text{ m}\\)", "\\(10\\text{ m}\\)", "\\(8\\text{ m}\\)", "\\(12\\text{ m}\\)"], 
        answer: 1 
    },
    { 
        id: 8, 
        topic: "MRU Vectorial en i, j", 
        question: "Un avión se desplaza a velocidad constante durante \\(t = 3\\text{ h}\\): \\[ \\vec{v} = (400\\hat{i} + 300\\hat{j})\\text{ km/h} \\] Determinar la distancia escalar total recorrida \\(d\\):", 
        options: ["\\(1500\\text{ km}\\)", "\\(2100\\text{ km}\\)", "\\(1200\\text{ km}\\)", "\\(900\\text{ km}\\)"], 
        answer: 0 
    },
    { 
        id: 9, 
        topic: "MRU Posición Vectorial", 
        question: "Un barco navega con MRU partiendo de la posición \\(\\vec{r}_0\\) a la velocidad \\(\\vec{v}\\) durante \\(t = 5\\text{ s}\\): \\[ \\vec{r}_0 = (10\\hat{i} + 20\\hat{j})\\text{ m}, \\quad \\vec{v} = (8\\hat{i} - 6\\hat{j})\\text{ m/s} \\] Determinar su vector posición final \\(\\vec{r}_f\\):", 
        options: ["\\[ \\vec{r}_f = (50\\hat{i} - 10\\hat{j})\\text{ m} \\]", "\\[ \\vec{r}_f = (40\\hat{i} - 30\\hat{j})\\text{ m} \\]", "\\[ \\vec{r}_f = (30\\hat{i} - 50\\hat{j})\\text{ m} \\]", "\\[ \\vec{r}_f = (18\\hat{i} + 14\\hat{j})\\text{ m} \\]"], 
        answer: 0 
    },
    { 
        id: 10, 
        topic: "Despeje MRU Vectorial", 
        question: "Dada la ecuación vectorial del MRU, despejar el tiempo \\(t\\): \\[ \\vec{r}_f = \\vec{r}_0 + \\vec{v}\\cdot t \\]", 
        options: [
            "\\[ t = \\dfrac{|\\vec{r}_f - \\vec{r}_0|}{|\\vec{v}|} \\]", 
            "\\[ t = \\dfrac{|\\vec{v}|}{|\\vec{r}_f - \\vec{r}_0|} \\]", 
            "\\[ t = |\\vec{r}_f - \\vec{r}_0| \\cdot |\\vec{v}| \\]", 
            "\\[ t = \\dfrac{|\\vec{r}_f + \\vec{r}_0|}{|\\vec{v}|} \\]"
        ], 
        answer: 0 
    },
    { 
        id: 11, 
        topic: "MRU Escalar", 
        question: "Un móvil avanza con MRU a \\(340\\text{ m/s}\\). ¿Tiempo transcurrido para una distancia de \\(1.7\\text{ km}\\)?", 
        options: ["\\(0.2\\text{ s}\\)", "\\(2\\text{ s}\\)", "\\(5\\text{ s}\\)", "\\(50\\text{ s}\\)"], 
        answer: 2 
    },
    { 
        id: 12, 
        topic: "MRU Encuentro Vectorial", 
        question: "Dos partículas A y B se mueven sobre el eje X con velocidades: \\[ \\vec{v}_A = (-4\\hat{i})\\text{ m/s}, \\quad \\vec{v}_B = (6\\hat{i})\\text{ m/s} \\] Si están separadas inicialmente por un vector \\(\\vec{d} = 100\\hat{i}\\text{ m}\\) dirigiéndose al encuentro, ¿en cuántos segundos se cruzan?", 
        options: ["\\(10\\text{ s}\\)", "\\(20\\text{ s}\\)", "\\(25\\text{ s}\\)", "\\(50\\text{ s}\\)"], 
        answer: 0 
    },
    { 
        id: 13, 
        topic: "MRUV Velocidad Vectorial en i, j", 
        question: "Un robot se desplaza con una velocidad inicial \\(\\vec{v}_0\\) y una aceleración constante \\(\\vec{a}\\): \\[ \\vec{v}_0 = (2\\hat{i} - 3\\hat{j})\\text{ m/s}, \\quad \\vec{a} = (4\\hat{i} + 2\\hat{j})\\text{ m/s}^2 \\] Determinar su vector velocidad \\(\\vec{v}_f\\) a los \\(t = 3\\text{ s}\\):", 
        options: ["\\[ \\vec{v}_f = (14\\hat{i} + 3\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v}_f = (12\\hat{i} + 6\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v}_f = (6\\hat{i} - 1\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v}_f = (10\\hat{i} + 3\\hat{j})\\text{ m/s} \\]"], 
        answer: 0 
    },
    { 
        id: 14, 
        topic: "Despeje MRUV Escalar", 
        question: "Dada la ecuación de MRUV, el despeje de la aceleración \\(a\\) corresponde a: \\[ v_f^2 = v_0^2 + 2a d \\]", 
        options: [
            "\\[ a = \\dfrac{v_f^2 - v_0^2}{2d} \\]", 
            "\\[ a = \\dfrac{(v_f - v_0)^2}{2d} \\]", 
            "\\[ a = \\dfrac{v_f^2 + v_0^2}{2d} \\]", 
            "\\[ a = \\dfrac{2d}{v_f^2 - v_0^2} \\]"
        ], 
        answer: 0 
    },
    { 
        id: 15, 
        topic: "MRUV Posición Vectorial en i, j", 
        question: "Un objeto parte del reposo en el origen con aceleración constante \\(\\vec{a}\\): \\[ \\vec{a} = (6\\hat{i} + 8\\hat{j})\\text{ m/s}^2 \\] Calcular el módulo de su posición \\(|\\vec{r}_f|\\) en \\(t = 2\\text{ s}\\) usando la ecuación: \\[ \\vec{r}_f = \\dfrac{1}{2}\\vec{a}t^2 \\]", 
        options: ["\\(10\\text{ m}\\)", "\\(20\\text{ m}\\)", "\\(28\\text{ m}\\)", "\\(40\\text{ m}\\)"], 
        answer: 1 
    },
    { 
        id: 16, 
        topic: "MCU Aceleración", 
        question: "Una partícula realiza un MCU de radio \\(R = 2\\text{ m}\\) con velocidad angular \\(\\omega = 3\\text{ rad/s}\\). Calcular el módulo de su aceleración centrípeta: \\[ a_c = \\omega^2 \\cdot R \\]", 
        options: ["\\(6\\text{ m/s}^2\\)", "\\(12\\text{ m/s}^2\\)", "\\(18\\text{ m/s}^2\\)", "\\(36\\text{ m/s}^2\\)"], 
        answer: 2 
    },
    { 
        id: 17, 
        topic: "Despeje MCU", 
        question: "Dada la ecuación de aceleración centrípeta, despejar la velocidad tangencial \\(v\\): \\[ a_c = \\dfrac{v^2}{R} \\]", 
        options: [
            "\\[ v = \\sqrt{a_c \\cdot R} \\]", 
            "\\[ v = (a_c \\cdot R)^2 \\]", 
            "\\[ v = \\dfrac{a_c}{R} \\]", 
            "\\[ v = \\sqrt{\\dfrac{a_c}{R}} \\]"
        ], 
        answer: 0 
    },
    { 
        id: 18, 
        topic: "Caída Libre Teoría", 
        question: "En el vacío, dos cuerpos de distinta masa se sueltan desde una misma altura. Aceleración que experimentan ambos cuerpos:", 
        options: [
            "Aceleraciones proporcionales a su masa", 
            "Misma aceleración \\(|\\vec{g}| = 9.8\\text{ m/s}^2\\)", 
            "El cuerpo de menor masa experimenta mayor aceleración", 
            "Cero hasta alcanzar velocidad terminal"
        ], 
        answer: 1 
    },
    { 
        id: 19, 
        topic: "Caída Libre con g = 9.8", 
        question: "Se deja caer un cuerpo desde el reposo. Considerando \\(g = 9.8\\text{ m/s}^2\\), ¿cuál es su rapidez al cabo de \\(t = 3\\text{ s}\\)?", 
        options: ["\\(29.4\\text{ m/s}\\)", "\\(19.6\\text{ m/s}\\)", "\\(44.1\\text{ m/s}\\)", "\\(9.8\\text{ m/s}\\)"], 
        answer: 0 
    },
    { 
        id: 20, 
        topic: "Tiro Vertical Vectorial con g = 9.8", 
        question: "Un objeto se lanza hacia arriba con velocidad inicial \\(\\vec{v}_0\\) bajo la gravedad \\(\\vec{g}\\): \\[ \\vec{v}_0 = (39.2\\hat{j})\\text{ m/s}, \\quad \\vec{g} = (-9.8\\hat{j})\\text{ m/s}^2 \\] Determinar el tiempo \\(t\\) para alcanzar su altura máxima (donde \\(\\vec{v}_f = 0\\hat{j}\\)):", 
        options: ["\\(4.0\\text{ s}\\)", "\\(2.0\\text{ s}\\)", "\\(8.0\\text{ s}\\)", "\\(3.92\\text{ s}\\)"], 
        answer: 0 
    },
    { 
        id: 21, 
        topic: "Movimiento Parabólico Vectorial", 
        question: "Un proyectil se lanza con velocidad inicial \\(\\vec{v}_0 = (30\\hat{i} + 40\\hat{j})\\text{ m/s}\\). Despreciando el aire, ¿cuál es su vector velocidad \\(\\vec{v}\\) en la altura máxima?", 
        options: ["\\[ \\vec{v} = (0\\hat{i} + 0\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v} = (30\\hat{i} + 0\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v} = (0\\hat{i} + 40\\hat{j})\\text{ m/s} \\]", "\\[ \\vec{v} = (30\\hat{i} + 40\\hat{j})\\text{ m/s} \\]"], 
        answer: 1 
    },
    { 
        id: 22, 
        topic: "Despeje Caída Libre", 
        question: "Dada la ecuación de altura en caída libre partiendo del reposo, despejar el tiempo \\(t\\): \\[ h = \\dfrac{1}{2}g t^2 \\]", 
        options: [
            "\\[ t = \\sqrt{\\dfrac{2h}{g}} \\]", 
            "\\[ t = \\dfrac{2h}{g} \\]", 
            "\\[ t = \\sqrt{\\dfrac{h}{2g}} \\]", 
            "\\[ t = \\left(\\dfrac{2h}{g}\\right)^2 \\]"
        ], 
        answer: 0 
    },
    { 
        id: 23, 
        topic: "Leyes de Newton en i, j", 
        question: "Dos fuerzas actúan sobre una masa \\(m = 2\\text{ kg}\\): \\[ \\vec{F}_1 = (5\\hat{i} + 8\\hat{j})\\text{ N}, \\quad \\vec{F}_2 = (3\\hat{i} - 2\\hat{j})\\text{ N} \\] Calcular el vector aceleración resultante \\(\\vec{a}\\) usando la Segunda Ley: \\[ \\sum \\vec{F} = m \\cdot \\vec{a} \\]", 
        options: ["\\[ \\vec{a} = (4\\hat{i} + 3\\hat{j})\\text{ m/s}^2 \\]", "\\[ \\vec{a} = (8\\hat{i} + 6\\hat{j})\\text{ m/s}^2 \\]", "\\[ \\vec{a} = (2\\hat{i} + 5\\hat{j})\\text{ m/s}^2 \\]", "\\[ \\vec{a} = (16\\hat{i} + 12\\hat{j})\\text{ m/s}^2 \\]"], 
        answer: 0 
    },
    { 
        id: 24, 
        topic: "Primera Ley de Newton", 
        question: "Si la suma vectorial de fuerzas aplicadas sobre un cuerpo es nula: \\[ \\sum \\vec{F} = (0\\hat{i} + 0\\hat{j})\\text{ N} \\] El cuerpo satisface:", 
        options: [
            "Aceleración constante distinta de cero", 
            "Movimiento Circular Uniforme", 
            "Estado de reposo o movimiento rectilíneo uniforme (MRU)", 
            "Trayectoria parabólica"
        ], 
        answer: 2 
    },
    { 
        id: 25, 
        topic: "Despeje Fuerza y Peso", 
        question: "A partir de la Segunda Ley \\(F_{\\text{net}} = m \\cdot a\\) y el peso \\(W = m \\cdot g\\), despejar la masa e igualar para obtener la Fuerza Neta en función de \\(W\\):", 
        options: [
            "\\[ F_{\\text{net}} = \\dfrac{W \\cdot a}{g} \\]", 
            "\\[ F_{\\text{net}} = \\dfrac{W \\cdot g}{a} \\]", 
            "\\[ F_{\\text{net}} = \\dfrac{W}{a \\cdot g} \\]", 
            "\\[ F_{\\text{net}} = W \\cdot a \\cdot g \\]"
        ], 
        answer: 0 
    },
    { 
        id: 26, 
        topic: "Peso con g = 9.8", 
        question: "Un cuerpo tiene una masa de \\(m = 5\\text{ kg}\\). Calcular el módulo de su peso considerando \\(g = 9.8\\text{ m/s}^2\\): \\[ W = m \\cdot g \\]", 
        options: ["\\(49.0\\text{ N}\\)", "\\(50.0\\text{ N}\\)", "\\(9.8\\text{ N}\\)", "\\(24.5\\text{ N}\\)"], 
        answer: 0 
    },
    { 
        id: 27, 
        topic: "Trabajo Mecánico Vectorial en i, j", 
        question: "Una fuerza \\(\\vec{F}\\) constante desplaza un cuerpo una distancia vectorial \\(\\Delta\\vec{r}\\): \\[ \\vec{F} = (6\\hat{i} + 8\\hat{j})\\text{ N}, \\quad \\Delta\\vec{r} = (5\\hat{i} + 2\\hat{j})\\text{ m} \\] Calcular el trabajo escalar \\(W\\) mediante el producto punto: \\[ W = \\vec{F} \\cdot \\Delta\\vec{r} \\]", 
        options: ["\\(46\\text{ Joules}\\)", "\\(30\\text{ Joules}\\)", "\\(16\\text{ Joules}\\)", "\\(70\\text{ Joules}\\)"], 
        answer: 0 
    },
    { 
        id: 28, 
        topic: "Despeje Energía Cinética", 
        question: "Dada la fórmula de energía cinética, despejar la rapidez \\(v\\): \\[ E_k = \\dfrac{1}{2} m v^2 \\]", 
        options: [
            "\\[ v = \\sqrt{\\dfrac{2E_k}{m}} \\]", 
            "\\[ v = \\dfrac{2E_k}{m} \\]", 
            "\\[ v = \\sqrt{\\dfrac{E_k}{2m}} \\]", 
            "\\[ v = (2E_k \\cdot m)^2 \\]"
        ], 
        answer: 0 
    },
    { 
        id: 29, 
        topic: "Potencia Mecánica", 
        question: "Un motor realiza un trabajo mecánico de \\(W = 4500\\text{ J}\\) en un intervalo \\(t = 15\\text{ s}\\). Determinar la potencia desarrollada: \\[ P = \\dfrac{W}{t} \\]", 
        options: ["\\(300\\text{ W}\\)", "\\(67500\\text{ W}\\)", "\\(150\\text{ W}\\)", "\\(450\\text{ W}\\)"], 
        answer: 0 
    },
    { 
        id: 30, 
        topic: "Energía Potencial con g = 9.8", 
        question: "Un objeto de \\(m = 2\\text{ kg}\\) se eleva a una altura \\(h = 10\\text{ m}\\). Con \\(g = 9.8\\text{ m/s}^2\\), calcular su energía potencial gravitatoria: \\[ E_p = m \\cdot g \\cdot h \\]", 
        options: ["\\(196\\text{ J}\\)", "\\(200\\text{ J}\\)", "\\(98\\text{ J}\\)", "\\(392\\text{ J}\\)"], 
        answer: 0 
    }
];

// ESTADO DE LA APLICACIÓN
let idx = 0;
let userAnswers = {};
let violations = 0;
let timeLeft = 3000; 
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

// INICIALIZACIÓN
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

// CAPAS DE SEGURIDAD MODO KIOSKO
function setupSecurityEvents() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());

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

    window.addEventListener('blur', () => {
        if (examActive) triggerViolation();
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden && examActive) triggerViolation();
    });

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

// TEMPORIZADOR
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

// COMPILACIÓN KATEX
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

// NAVEGACIÓN
btnPrev.addEventListener('click', () => {
    if (idx > 0) { idx--; loadQuestion(idx); }
});

btnNext.addEventListener('click', () => {
    if (idx < questions.length - 1) { idx++; loadQuestion(idx); }
});

btnFinish.addEventListener('click', () => {
    if (confirm("¿Deseas finalizar la evaluación ahora?")) {
        finishExam();
    }
});

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

        const item = document.createElement('div');
        item.className = `review-item ${ok ? 'ok' : 'fail'}`;
        item.innerHTML = `
            <div style="font-weight:600; font-size:0.95rem;">${i + 1}. ${q.question}</div>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.4rem;">
                Tu respuesta: <strong>${userAnswers[i] !== undefined ? q.options[userAnswers[i]] : 'Sin responder'}</strong> 
                ${ok ? '<span style="color:var(--success-color); font-weight:bold;">✓ Correcta</span>' : '<span style="color:var(--danger-color); font-weight:bold;">✗ (Correcta: ' + q.options[q.answer] + ')</span>'}
            </div>
        `;
        reviewBox.appendChild(item);
    });

    document.getElementById('res-score').textContent = `${score} / ${questions.length}`;
    document.getElementById('res-percent').textContent = `${((score / questions.length) * 100).toFixed(1)}%`;
    document.getElementById('res-violations').textContent = violations;
    renderMath();
}