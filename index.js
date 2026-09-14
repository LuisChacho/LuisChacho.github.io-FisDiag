// BANCO DE 30 PREGUNTAS DE FÍSICA GENERAL
const questions = [
    { id: 1, topic: "Unidades SI", question: "¿Cuál de las siguientes magnitudes corresponde a una magnitud fundamental en el Sistema Internacional?", options: ["Joule (J)", "Kilogramo (kg)", "Newton (N)", "Watt (W)"], answer: 1 },
    { id: 2, topic: "Conversión de Unidades", question: "Un automóvil se desplaza a 72 km/h. ¿A cuántos metros por segundo (m/s) equivale dicha rapidez?", options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"], answer: 1 },
    { id: 3, topic: "Unidades Derivadas", question: "La unidad de fuerza Newton (N) expresada en magnitudes fundamentales del SI equivale a:", options: ["kg·m/s", "kg·m/s²", "kg·m²/s²", "kg/m·s²"], answer: 1 },
    { id: 4, topic: "Conversión de Unidades", question: "Un tanque contiene 0.05 m³ de agua. ¿A cuántos litros equivale dicho volumen?", options: ["5 Litros", "50 Litros", "500 Litros", "0.5 Litros"], answer: 1 },
    { id: 5, topic: "Cinemática Vectorial", question: "Un móvil cambia su posición desde r1 = (2i + 3j) m hasta r2 = (8i - 5j) m. ¿Cuál es su vector desplazamiento?", options: ["(6i - 8j) m", "(-6i + 8j) m", "(10i - 2j) m", "(6i + 2j) m"], answer: 0 },
    { id: 6, topic: "Cinemática Conceptos", question: "¿Cuál es la diferencia fundamental entre el desplazamiento y la distancia recorrida?", options: ["El desplazamiento es escalar y la distancia es vectorial", "El desplazamiento depende del camino y la distancia es en línea recta", "El desplazamiento es un vector entre inicio y fin; la distancia es la longitud de la trayectoria", "Son términos idénticos"], answer: 2 },
    { id: 7, topic: "Desplazamiento", question: "Si un atleta completa una vuelta entera a una pista circular de 400 m regresando al punto exacto de partida, su desplazamiento es:", options: ["400 m", "200 m", "0 m", "800 m"], answer: 2 },
    { id: 8, topic: "Vectores Posición", question: "Un móvil camina 6 m hacia el Este y luego 8 m hacia el Norte. ¿Cuál es la magnitud de su desplazamiento vectorial total?", options: ["14 m", "10 m", "2 m", "48 m"], answer: 1 },
    { id: 9, topic: "MRU Vectorial", question: "Un objeto se desplaza con velocidad constante v = (4i - 3j) m/s durante 5 segundos. Su posición final partiendo del origen es:", options: ["(20i - 15j) m", "(9i - 2j) m", "(20i + 15j) m", "(5i - 5j) m"], answer: 0 },
    { id: 10, topic: "MRU", question: "En un Movimiento Rectilíneo Uniforme (MRU), la aceleración del móvil se caracteriza por ser:", options: ["Constante y mayor a cero", "Nula (igual a cero)", "Variable linealmente", "Igual a la gravedad"], answer: 1 },
    { id: 11, topic: "MRU Práctica", question: "Un tren avanza a rapidez constante de 25 m/s durante 2 minutos. ¿Qué distancia recorre?", options: ["50 m", "1500 m", "3000 m", "500 m"], answer: 2 },
    { id: 12, topic: "MRU Encuentro", question: "Dos autos separados 600 m parten simultáneamente al encuentro con velocidades de 20 m/s y 10 m/s. ¿En cuántos segundos se cruzan?", options: ["10 s", "20 s", "30 s", "60 s"], answer: 1 },
    { id: 13, topic: "MRUV Vectorial", question: "Un móvil parte del reposo con aceleración a = (2i + 4j) m/s². ¿Cuál es su vector velocidad a los 3 segundos?", options: ["(6i + 12j) m/s", "(5i + 7j) m/s", "(12i + 6j) m/s", "(6i + 4j) m/s"], answer: 0 },
    { id: 14, topic: "MRUV Práctica", question: "Un auto parte del reposo con aceleración constante de 3 m/s². ¿Qué velocidad alcanza a los 6 segundos?", options: ["9 m/s", "18 m/s", "54 m/s", "12 m/s"], answer: 1 },
    { id: 15, topic: "MRUV Distancia", question: "Un cuerpo parte del reposo y acelera a razón de 2 m/s². ¿Qué distancia recorre en los primeros 5 segundos?", options: ["10 m", "25 m", "50 m", "20 m"], answer: 1 },
    { id: 16, topic: "MCU Teórico", question: "En un Movimiento Circular Uniforme (MCU), aunque la rapidez es constante, existe aceleración centrípeta debido a que:", options: ["El radio varía continuamente", "La dirección de la velocidad cambia en todo momento", "El período aumenta", "La masa gira más rápido"], answer: 1 },
    { id: 17, topic: "MCU Vel. Tangencial", question: "Una rueda gira con velocidad angular constante de 10 rad/s. Si su radio es 0.5 m, ¿cuál es su rapidez tangencial?", options: ["5 m/s", "20 m/s", "10 m/s", "2.5 m/s"], answer: 0 },
    { id: 18, topic: "Caída Libre Teórico", question: "Si se desprecia el aire, al soltar desde la misma altura una esfera de 1 kg y otra de 10 kg:", options: ["La de 10 kg cae primero", "Llegan al piso exactamente al mismo tiempo", "La de 1 kg cae más rápido", "Depende de la forma del cuerpo"], answer: 1 },
    { id: 19, topic: "Caída Libre Velocidad", question: "Se deja caer un objeto desde el reposo. Considerando g = 10 m/s², ¿qué velocidad llevará al transcurrir 3 segundos?", options: ["15 m/s", "30 m/s", "45 m/s", "90 m/s"], answer: 1 },
    { id: 20, topic: "Tiro Vertical", question: "Se lanza un objeto hacia arriba con velocidad inicial de 30 m/s. ¿Cuánto tarda en alcanzar su altura máxima? (g = 10 m/s²)", options: ["3 s", "6 s", "1.5 s", "30 s"], answer: 0 },
    { id: 21, topic: "Parabólico Horizontal", question: "En un tiro parabólico ideal sin aire, la componente horizontal de la velocidad (Vx) a lo largo del trayecto es:", options: ["Aumentante", "Decreciente", "Constante", "Cero"], answer: 2 },
    { id: 22, topic: "Parabólico Vértice", question: "En el punto más alto de la curva de un tiro parabólico, la velocidad vertical (Vy) es igual a:", options: ["Su valor máximo", "La velocidad horizontal", "Cero", "La gravedad"], answer: 2 },
    { id: 23, topic: "Fuerzas Normal", question: "La fuerza normal ejercida por una superficie sobre un bloque siempre actúa de forma:", options: ["Paralela al plano", "Perpendicular a la superficie", "En sentido contrario al movimiento", "Igual a la masa por velocidad"], answer: 1 },
    { id: 24, topic: "Primera Ley Newton", question: "La Ley de Inercia establece que si la fuerza neta sobre un objeto es nula, el objeto permanecerá en reposo o:", options: ["Acelerando suavemente", "Moviéndose en círculo", "En Movimiento Rectilíneo Uniforme", "Cayendo con la gravedad"], answer: 2 },
    { id: 25, topic: "Segunda Ley Newton", question: "Una fuerza de 20 N actúa sobre un bloque de 5 kg apoyado en una superficie sin fricción. Su aceleración es:", options: ["100 m/s²", "4 m/s²", "0.25 m/s²", "15 m/s²"], answer: 1 },
    { id: 26, topic: "Tercera Ley Newton", question: "Las fuerzas de Acción y Reacción no se anulan entre sí debido a que:", options: ["Tienen distinta magnitud", "Actúan sobre cuerpos distintos", "Tienen diferente dirección", "Suceden a tiempos distintos"], answer: 1 },
    { id: 27, topic: "Trabajo Mecánico", question: "Si la fuerza ejercida sobre un objeto forma un ángulo de 90° con la dirección del desplazamiento, el trabajo realizado es:", options: ["Positivo máximo", "Negativo", "Cero", "Igual a la masa"], answer: 2 },
    { id: 28, topic: "Energía Cinética", question: "¿Cuál es la Energía Cinética de un objeto de masa 4 kg que se desplaza con una rapidez de 3 m/s?", options: ["6 J", "12 J", "18 J", "36 J"], answer: 2 },
    { id: 29, topic: "Potencia Mecánica", question: "Un motor efectúa un trabajo mecánico de 2400 Joules en 12 segundos. ¿Cuál es la potencia producida?", options: ["200 W", "28800 W", "100 W", "240 W"], answer: 0 },
    { id: 30, topic: "Conservación Energía", question: "En un sistema ideal sin rozamiento ni fuerzas externas, la Energía Mecánica Total equivale a:", options: ["Trabajo + Potencia", "Energía Cinética + Energía Potencial", "Fuerza x Aceleración", "Masa x Gravedad"], answer: 1 }
];

// ESTADO GLOBAL
let idx = 0;
let userAnswers = {};
let violations = 0;
let timeLeft = 3600; // 1 Hora
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

// BLOQUEO DE KIOSKO Y SEGURIDAD
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

// MANEJO DEL TEMPORIZADOR
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

// RENDERIZADO DE PREGUNTAS
function loadQuestion(i) {
    const q = questions[i];
    qNumber.textContent = `Pregunta ${i + 1} de ${questions.length}`;
    qTopic.textContent = q.topic;
    qText.textContent = q.question;

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
    if (confirm("¿Estás seguro de que deseas finalizar la evaluación?")) {
        finishExam();
    }
});

// PANTALLA DE RESULTADOS
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
}