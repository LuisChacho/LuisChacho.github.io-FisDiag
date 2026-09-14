// BANCO DE 30 PREGUNTAS DE FÍSICA GENERAL (NIVEL INTERMEDIO-AVANZADO)
const questions = [
    { 
        id: 1, 
        topic: "Unidades SI", 
        question: "¿Cuál de las siguientes magnitudes corresponde a una magnitud fundamental en el Sistema Internacional?", 
        options: ["Joule (J)", "Kilogramo (kg)", "Newton (N)", "Watt (W)"], 
        answer: 1 
    },
    { 
        id: 2, 
        topic: "Conversión de Unidades", 
        question: "Un avión vuela a una rapidez constante de 216 km/h. ¿A cuántos m/s equivale dicha velocidad?", 
        options: ["40 m/s", "60 m/s", "80 m/s", "100 m/s"], 
        answer: 1 
    },
    { 
        id: 3, 
        topic: "Unidades Derivadas", 
        question: "La unidad de fuerza Newton (N) expresada en magnitudes fundamentales del SI equivale a:", 
        options: ["kg·m/s", "kg·m/s²", "kg·m²/s²", "kg/m·s²"], 
        answer: 1 
    },
    { 
        id: 4, 
        topic: "Despeje de Fórmulas", 
        question: "En la ecuación de densidad $d = m / V$, al despejar el volumen ($V$) obtenemos:", 
        options: ["V = m · d", "V = m / d", "V = d / m", "V = m + d"], 
        answer: 1 
    },
    { 
        id: 5, 
        topic: "Cinemática Vectorial", 
        question: "Un dron se desplaza desde la posición r₁ = (4i + 2j) m hasta r₂ = (10i - 6j) m en 2 segundos. ¿Cuál es su vector velocidad media?", 
        options: ["(3i - 4j) m/s", "(6i - 8j) m/s", "(7i - 2j) m/s", "(14i - 4j) m/s"], 
        answer: 0 
    },
    { 
        id: 6, 
        topic: "Cinemática Conceptos", 
        question: "¿Cuál es la diferencia fundamental entre el desplazamiento y la distancia recorrida?", 
        options: ["El desplazamiento es escalar y la distancia es vectorial", "El desplazamiento depende del camino y la distancia es en línea recta", "El desplazamiento es el vector (r₂ - r₁); la distancia es la longitud de la trayectoria", "Son términos idénticos"], 
        answer: 2 
    },
    { 
        id: 7, 
        topic: "Desplazamiento Vectorial", 
        question: "Si una partícula efectúa los desplazamientos d₁ = (3i + 4j) m y d₂ = (5i - 10j) m, ¿cuál es la magnitud de su desplazamiento total?", 
        options: ["14 m", "10 m", "8 m", "12 m"], 
        answer: 1 
    },
    { 
        id: 8, 
        topic: "MRU Vectorial (Avión)", 
        question: "Un avión se desplaza a velocidad constante v = (400i + 300j) km/h durante t = 3 horas. ¿Cuál es el módulo (magnitud) de la distancia recorrida?", 
        options: ["1500 km", "2100 km", "1200 km", "900 km"], 
        answer: 0 
    },
    { 
        id: 9, 
        topic: "MRU Vectorial", 
        question: "Un barco viaja a v = (8i - 6j) m/s partiendo de la posición r₀ = (10i + 20j) m. ¿Cuál es su posición vectorial r a los t = 5 segundos?", 
        options: ["(50i - 10j) m", "(40i - 30j) m", "(30i - 50j) m", "(18i + 14j) m"], 
        answer: 0 
    },
    { 
        id: 10, 
        topic: "Despeje MRU", 
        question: "Dada la ecuación de posición $r_f = r_0 + v \\cdot t$, al despejar el tiempo ($t$) se obtiene:", 
        options: ["t = (r_f - r_0) / v", "t = v / (r_f - r_0)", "t = r_f - r_0 · v", "t = (r_f + r_0) / v"], 
        answer: 0 
    },
    { 
        id: 11, 
        topic: "MRU Práctica", 
        question: "Un proyectil viaja a rapidez constante de 340 m/s (velocidad del sonido). ¿Cuánto tiempo (en s) tarda en recorrer 1.7 km?", 
        options: ["0.2 s", "2 s", "5 s", "50 s"], 
        answer: 2 
    },
    { 
        id: 12, 
        topic: "MRU Encuentro Vectorial", 
        question: "Dos partículas A y B se mueven hacia el origen con v_A = (-4i) m/s y v_B = (6i) m/s. Si están separadas por 100i m, ¿en cuántos segundos se cruzan?", 
        options: ["10 s", "20 s", "25 s", "50 s"], 
        answer: 0 
    },
    { 
        id: 13, 
        topic: "MRUV Vectorial", 
        question: "Un móvil parte con velocidad v₀ = (2i - 3j) m/s y experimenta una aceleración constante a = (4i + 2j) m/s². ¿Cuál es su vector velocidad a los t = 3 s?", 
        options: ["(14i + 3j) m/s", "(12i + 6j) m/s", "(6i - 1j) m/s", "(10i + 3j) m/s"], 
        answer: 0 
    },
    { 
        id: 14, 
        topic: "Despeje MRUV", 
        question: "Dada la ecuación $v_f^2 = v_0^2 + 2a \\cdot d$, el despeje correcto para la aceleración ($a$) es:", 
        options: ["a = (v_f^2 - v_0^2) / (2d)", "a = (v_f - v_0)^2 / (2d)", "a = (v_f^2 + v_0^2) / (2d)", "a = 2d / (v_f^2 - v_0^2)"], 
        answer: 0 
    },
    { 
        id: 15, 
        topic: "MRUV Posición Vectorial", 
        question: "Un objeto parte del reposo en el origen con a = (6i + 8j) m/s². ¿Cuál es la magnitud del vector posición |r| a los t = 2 s?", 
        options: ["10 m", "20 m", "28 m", "40 m"], 
        answer: 1 
    },
    { 
        id: 16, 
        topic: "MCU Aceleración", 
        question: "Una partícula recorre una circunferencia de radio R = 2 m con velocidad angular constante w = 3 rad/s. ¿Cuál es el módulo de su aceleración centrípeta?", 
        options: ["6 m/s²", "12 m/s²", "18 m/s²", "36 m/s²"], 
        answer: 2 
    },
    { 
        id: 17, 
        topic: "Despeje MCU", 
        question: "Sabiendo que la aceleración centrípeta es $a_c = v^2 / R$, al despejar la velocidad tangencial ($v$) se obtiene:", 
        options: ["v = √(a_c · R)", "v = (a_c · R)³", "v = a_c / R", "v = √(a_c / R)"], 
        answer: 0 
    },
    { 
        id: 18, 
        topic: "Caída Libre Teórico", 
        question: "Si se desprecia la resistencia del aire, al soltar desde la misma altura una esfera de 1 kg y otra de 10 kg:", 
        options: ["La de 10 kg cae primero", "Llegan al piso exactamente al mismo tiempo", "La de 1 kg cae más rápido", "Depende de la forma del cuerpo"], 
        answer: 1 
    },
    { 
        id: 19, 
        topic: "Despeje Caída Libre", 
        question: "En caída libre desde el reposo, $h = \\frac{1}{2}g \\cdot t^2$. Al despejar el tiempo ($t$), resulta:", 
        options: ["t = √(2h / g)", "t = 2h / g", "t = √(h / 2g)", "t = (2h · g)²"], 
        answer: 0 
    },
    { 
        id: 20, 
        topic: "Tiro Vertical Vectorial", 
        question: "Un cuerpo se lanza verticalmente con v₀ = (40j) m/s. Considerando g = (-10j) m/s², ¿cuál es su vector velocidad a los t = 5 s?", 
        options: ["(10j) m/s", "(-10j) m/s", "(50j) m/s", "(-50j) m/s"], 
        answer: 1 
    },
    { 
        id: 21, 
        topic: "Parabólico Vectorial", 
        question: "Un proyectil es disparado con velocidad inicial v₀ = (30i + 40j) m/s. ¿Cuál es su vector velocidad en el punto más alto del trayecto?", 
        options: ["(0i + 0j) m/s", "(30i + 0j) m/s", "(0i + 40j) m/s", "(30i + 40j) m/s"], 
        answer: 1 
    },
    { 
        id: 22, 
        topic: "Despeje Parabólico", 
        question: "El alcance horizontal máximo en tiro parabólico es $R = (v_0^2 \\cdot \\sin(2\\theta)) / g$. El despeje para $v_0$ es:", 
        options: ["v₀ = √((R · g) / sin(2θ))", "v₀ = (R · g) / sin(2θ)", "v₀ = √((R · sin(2θ)) / g)", "v₀ = (R · g · sin(2θ))²"], 
        answer: 0 
    },
    { 
        id: 23, 
        topic: "Leyes de Newton Vectorial", 
        question: "Dos fuerzas F₁ = (5i + 8j) N y F₂ = (3i - 2j) N actúan sobre un cuerpo de m = 2 kg. ¿Cuál es el vector aceleración resultante?", 
        options: ["(4i + 3j) m/s²", "(8i + 6j) m/s²", "(2i + 5j) m/s²", "(16i + 12j) m/s²"], 
        answer: 0 
    },
    { 
        id: 24, 
        topic: "Primera Ley Newton", 
        question: "Si la suma vectorial de todas las fuerzas sobre un objeto es nula (∑F = 0i + 0j), el objeto se encuentra en:", 
        options: ["Aceleración constante", "Movimiento Circular Uniforme", "Reposo o Movimiento Rectilíneo Uniforme", "Caída libre constante"], 
        answer: 2 
    },
    { 
        id: 25, 
        topic: "Despeje Segunda Ley", 
        question: "En un sistema donde $F_{neta} = m \\cdot a$, si $m = W / g$ (donde W es el peso), al despejar la fuerza neta en función de $W$ queda:", 
        options: ["F = (W · a) / g", "F = (W · g) / a", "F = W / (a · g)", "F = W · a · g"], 
        answer: 0 
    },
    { 
        id: 26, 
        topic: "Tercera Ley Newton", 
        question: "Las fuerzas de Acción y Reacción no se anulan mutuamente debido a que:", 
        options: ["Tienen magnitudes diferentes", "Actúan sobre cuerpos distintos", "Tienen diferente dirección", "Ocurren en momentos distintos"], 
        answer: 1 
    },
    { 
        id: 27, 
        topic: "Trabajo Mecánico Vectorial", 
        question: "Una fuerza F = (6i + 8j) N desplaza un objeto d = (5i + 2j) m. ¿Qué trabajo mecánico realiza? (Sugerencia: producto escalar F · d)", 
        options: ["46 Joules", "30 Joules", "16 Joules", "70 Joules"], 
        answer: 0 
    },
    { 
        id: 28, 
        topic: "Despeje Energía Cinética", 
        question: "A partir de la fórmula de Energía Cinética $E_k = \\frac{1}{2} m \\cdot v^2$, al despejar la rapidez ($v$) obtenemos:", 
        options: ["v = √(2E_k / m)", "v = 2E_k / m", "v = √(E_k / 2m)", "v = (2E_k · m)²"], 
        answer: 0 
    },
    { 
        id: 29, 
        topic: "Potencia Mecánica", 
        question: "Un motor realiza un trabajo W = 4500 J en un tiempo t = 15 s. ¿Cuál es la potencia desarrollada?", 
        options: ["300 W", "67500 W", "150 W", "450 W"], 
        answer: 0 
    },
    { 
        id: 30, 
        topic: "Conservación de la Energía", 
        question: "Se suelta un objeto de 2 kg desde una altura h = 5 m. ¿Cuál es su Energía Cinética justo antes de impactar el suelo? (g = 10 m/s²)", 
        options: ["100 J", "50 J", "200 J", "25 J"], 
        answer: 0 
    }
];

// ESTADO GLOBAL
let idx = 0;
let userAnswers = {};
let violations = 0;
let timeLeft = 3600; // 1 Hora en segundos
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

// RESULTADOS
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