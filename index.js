// BANCO COMPLETO DE 40 PREGUNTAS ÚNICAS
const examData = [
  { topic: "MRU Vectorial", text: "Un dron se desplaza desde $\\vec{r}_0 = (4\\hat{i} + 2\\hat{j})\\text{ m}$ hasta $\\vec{r}_f = (10\\hat{i} - 6\\hat{j})\\text{ m}$ en $\\Delta t = 2\\text{ s}$. Calcular su velocidad constante $\\vec{v}$:", options: ["\\vec{v} = (3\\hat{i} - 4\\hat{j})\\text{ m/s}", "\\vec{v} = (6\\hat{i} - 8\\hat{j})\\text{ m/s}", "\\vec{v} = (7\\hat{i} - 2\\hat{j})\\text{ m/s}", "\\vec{v} = (14\\hat{i} - 4\\hat{j})\\text{ m/s}"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un vehículo se desplaza durante $3\\text{ s}$ a rapidez constante con $\\vec{v} = (5\\hat{i} - 12\\hat{j})\\text{ m/s}$. Calcular el módulo del desplazamiento total:", options: ["39 m", "51 m", "15 m", "36 m"], correct: 0 },
  { topic: "Vector Posición", text: "Un móvil parte del origen y se mueve con $\\vec{r}(t) = (3t\\hat{i} + 4t^2\\hat{j})\\text{ m}$. Determinar la posición en $t = 2\\text{ s}$:", options: ["\\vec{r} = (6\\hat{i} + 16\\hat{j})\\text{ m}", "\\vec{r} = (3\\hat{i} + 8\\hat{j})\\text{ m}", "\\vec{r} = (6\\hat{i} + 8\\hat{j})\\text{ m}", "\\vec{r} = (12\\hat{i} + 16\\hat{j})\\text{ m}"], correct: 0 },
  { topic: "MRUV Vectorial", text: "Una partícula acelera desde el reposo con $\\vec{a} = (2\\hat{i} + 4\\hat{j})\\text{ m/s}^2$. Su velocidad a los $t = 5\\text{ s}$ es:", options: ["\\vec{v} = (10\\hat{i} + 20\\hat{j})\\text{ m/s}", "\\vec{v} = (5\\hat{i} + 10\\hat{j})\\text{ m/s}", "\\vec{v} = (20\\hat{i} + 40\\hat{j})\\text{ m/s}", "\\vec{v} = (8\\hat{i} + 16\\hat{j})\\text{ m/s}"], correct: 0 },
  { topic: "MRUV Vectorial", text: "Con $\\vec{v}_0 = (3\\hat{i} + 2\\hat{j})\\text{ m/s}$ y $\\vec{a} = (4\\hat{i} - 2\\hat{j})\\text{ m/s}^2$, calcular el desplazamiento $\\Delta \\vec{r}$ tras $t = 2\\text{ s}$:", options: ["\\Delta \\vec{r} = (14\\hat{i} + 0\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (10\\hat{i} + 4\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (12\\hat{i} - 2\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (8\\hat{i} + 2\\hat{j})\\text{ m}"], correct: 0 },
  { topic: "Cinemática 2D", text: "Un barco lleva velocidad de $\\vec{v}_b = (8\\hat{i})\\text{ m/s}$ respecto al río y la corriente es $\\vec{v}_c = (6\\hat{j})\\text{ m/s}$. La rapidez resultante es:", options: ["10 m/s", "14 m/s", "2 m/s", "48 m/s"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un cuerpo pasa por $\\vec{r}_1 = (2\\hat{i} + 5\\hat{j})\\text{ m}$ en $t = 1\\text{ s}$ y por $\\vec{r}_2 = (8\\hat{i} + 13\\hat{j})\\text{ m}$ en $t = 4\\text{ s}$. Su velocidad es:", options: ["\\vec{v} = (2\\hat{i} + 2.67\\hat{j})\\text{ m/s}", "\\vec{v} = (6\\hat{i} + 8\\hat{j})\\text{ m/s}", "\\vec{v} = (3\\hat{i} + 4\\hat{j})\\text{ m/s}", "\\vec{v} = (4\\hat{i} + 3\\hat{j})\\text{ m/s}"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un avión vuela en MRU con $\\vec{v} = (400\\hat{i} + 300\\hat{j})\\text{ km/h}$ durante $3\\text{ h}$. La distancia total es:", options: ["1500 km", "2100 km", "1200 km", "900 km"], correct: 0 },
  { topic: "MCU", text: "Una partícula recorre una circunferencia de radio $R = 2\\text{ m}$ con rapidez $v = 4\\text{ m/s}$. Su aceleración centrípeta es:", options: ["8 m/s²", "16 m/s²", "4 m/s²", "2 m/s²"], correct: 0 },
  { topic: "MCU", text: "Un disco gira a velocidad angular constante $\\omega = 10\\text{ rad/s}$. Su período $T$ es:", options: ["0.628 s", "1.57 s", "3.14 s", "6.28 s"], correct: 0 },
  { topic: "Leyes de Newton", text: "Sobre $m = 5\\text{ kg}$ actúan $\\vec{F}_1 = (10\\hat{i} + 5\\hat{j})\\text{ N}$ y $\\vec{F}_2 = (5\\hat{i} + 10\\hat{j})\\text{ N}$. Su aceleración es:", options: ["\\vec{a} = (3\\hat{i} + 3\\hat{j})\\text{ m/s}^2", "\\vec{a} = (15\\hat{i} + 15\\hat{j})\\text{ m/s}^2", "\\vec{a} = (2\\hat{i} + 2\\hat{j})\\text{ m/s}^2", "\\vec{a} = (5\\hat{i} + 5\\hat{j})\\text{ m/s}^2"], correct: 0 },
  { topic: "Dinámica", text: "Un bloque de $10\\text{ kg}$ es arrastrado por $\\vec{F} = (50\\hat{i})\\text{ N}$ con fricción $\\vec{f}_k = (-10\\hat{i})\\text{ N}$. Su aceleración es:", options: ["4 m/s²", "5 m/s²", "6 m/s²", "10 m/s²"], correct: 0 },
  { topic: "Trabajo Mecánico", text: "Una fuerza $\\vec{F} = (6\\hat{i} + 8\\hat{j})\\text{ N}$ traslada un cuerpo a lo largo de $\\Delta \\vec{r} = (5\\hat{i} + 2\\hat{j})\\text{ m}$. El trabajo escalar es:", options: ["46 J", "30 J", "16 J", "70 J"], correct: 0 },
  { topic: "Energía Cinética", text: "Una masa de $m = 4\\text{ kg}$ se mueve con velocidad $\\vec{v} = (3\\hat{i} - 4\\hat{j})\\text{ m/s}$. Su Energía Cinética es:", options: ["50 J", "25 J", "100 J", "14 J"], correct: 0 },
  { topic: "Impulso Vectorial", text: "Una fuerza $\\vec{F} = (20\\hat{i} - 10\\hat{j})\\text{ N}$ actúa durante $\\Delta t = 0.5\\text{ s}$. El impulso es:", options: ["\\vec{I} = (10\\hat{i} - 5\\hat{j})\\text{ N·s}", "\\vec{I} = (40\\hat{i} - 20\\hat{j})\\text{ N·s}", "\\vec{I} = (20\\hat{i} - 10\\hat{j})\\text{ N·s}", "\\vec{I} = (5\\hat{i} - 2.5\\hat{j})\\text{ N·s}"], correct: 0 },
  { topic: "Cantidad de Movimiento", text: "Un objeto de $m = 2\\text{ kg}$ lleva una velocidad constante $\\vec{v} = (15\\hat{i} + 20\\hat{j})\\text{ m/s}$. El módulo de $\\vec{p}$ es:", options: ["50 kg·m/s", "70 kg·m/s", "35 kg·m/s", "25 kg·m/s"], correct: 0 },
  { topic: "MRU Vectorial", text: "Iniciando en $\\vec{r}_0 = (-2\\hat{i} + 4\\hat{j})\\text{ m}$ con $\\vec{v} = (3\\hat{i} + 5\\hat{j})\\text{ m/s}$, la posición a los $t = 4\\text{ s}$ es:", options: ["\\vec{r} = (10\\hat{i} + 24\\hat{j})\\text{ m}", "\\vec{r} = (12\\hat{i} + 20\\hat{j})\\text{ m}", "\\vec{r} = (14\\hat{i} + 16\\hat{j})\\text{ m}", "\\vec{r} = (8\\hat{i} + 20\\hat{j})\\text{ m}"], correct: 0 },
  { topic: "Cinemática 2D", text: "Se realizan dos desplazamientos: $\\Delta \\vec{r}_1 = (10\\hat{i} - 5\\hat{j})\\text{ m}$ y $\\Delta \\vec{r}_2 = (-4\\hat{i} + 13\\hat{j})\\text{ m}$. El resultante es:", options: ["\\Delta \\vec{r} = (6\\hat{i} + 8\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (14\\hat{i} + 18\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (-6\\hat{i} - 8\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (6\\hat{i} - 18\\hat{j})\\text{ m}"], correct: 0 },
  { topic: "Aceleración Media", text: "La velocidad cambia de $\\vec{v}_1 = (2\\hat{i} + 3\\hat{j})\\text{ m/s}$ a $\\vec{v}_2 = (8\\hat{i} + 11\\hat{j})\\text{ m/s}$ en $\\Delta t = 2\\text{ s}$. La aceleración media es:", options: ["\\vec{a}_m = (3\\hat{i} + 4\\hat{j})\\text{ m/s}^2", "\\vec{a}_m = (6\\hat{i} + 8\\hat{j})\\text{ m/s}^2", "\\vec{a}_m = (5\\hat{i} + 7\\hat{j})\\text{ m/s}^2", "\\vec{a}_m = (4\\hat{i} + 3\\hat{j})\\text{ m/s}^2"], correct: 0 },
  { topic: "Lanzamiento Horizontal", text: "Un objeto se lanza horizontalmente a $\\vec{v}_0 = (15\\hat{i})\\text{ m/s}$. Con $g = 9.8\\text{ m/s}^2$, su velocidad a los $t = 2\\text{ s}$ es:", options: ["\\vec{v} = (15\\hat{i} - 19.6\\hat{j})\\text{ m/s}", "\\vec{v} = (15\\hat{i} - 9.8\\hat{j})\\text{ m/s}", "\\vec{v} = (0\\hat{i} - 19.6\\hat{j})\\text{ m/s}", "\\vec{v} = (30\\hat{i} - 19.6\\hat{j})\\text{ m/s}"], correct: 0 },
  { topic: "Cinemática Vectorial", text: "Un objeto se mueve según $\\vec{r}(t) = (t^2 \\hat{i} + 5t \\hat{j})\\text{ m}$. Calcular el vector velocidad en $t = 3\\text{ s}$:", options: ["\\vec{v} = (6\\hat{i} + 5\\hat{j})\\text{ m/s}", "\\vec{v} = (9\\hat{i} + 15\\hat{j})\\text{ m/s}", "\\vec{v} = (3\\hat{i} + 5\\hat{j})\\text{ m/s}", "\\vec{v} = (6\\hat{i} + 15\\hat{j})\\text{ m/s}"], correct: 0 },
  { topic: "Cinemática Vectorial", text: "Dada la velocidad $\\vec{v}(t) = (2t\\hat{i} + 5\\hat{j})\\text{ m/s}$, la aceleración instantánea es:", options: ["\\vec{a} = (2\\hat{i} + 0\\hat{j})\\text{ m/s}^2", "\\vec{a} = (2\\hat{i} + 5\\hat{j})\\text{ m/s}^2", "\\vec{a} = (6\\hat{i} + 0\\hat{j})\\text{ m/s}^2", "\\vec{a} = (0\\hat{i} + 2\\hat{j})\\text{ m/s}^2"], correct: 0 },
  { topic: "Estática Vectorial", text: "Un cuerpo está en equilibrio bajo tres fuerzas. Si $\\vec{F}_1 = (12\\hat{i} - 5\\hat{j})\\text{ N}$ y $\\vec{F}_2 = (-4\\hat{i} + 9\\hat{j})\\text{ N}$, $\\vec{F}_3$ equivale a:", options: ["\\vec{F}_3 = (-8\\hat{i} - 4\\hat{j})\\text{ N}", "\\vec{F}_3 = (8\\hat{i} + 4\\hat{j})\\text{ N}", "\\vec{F}_3 = (-16\\hat{i} + 14\\hat{j})\\text{ N}", "\\vec{F}_3 = (8\\hat{i} - 14\\hat{j})\\text{ N}"], correct: 0 },
  { topic: "MCU - Frecuencia", text: "Un componente gira con un período de $T = 0.05\\text{ s}$. Su frecuencia $f$ es:", options: ["20 Hz", "50 Hz", "10 Hz", "5 Hz"], correct: 0 },
  { topic: "MCU - Rapidez Tangencial", text: "Un disco de radio $r = 0.5\\text{ m}$ gira a $\\omega = 6\\text{ rad/s}$. La rapidez tangencial en el borde es:", options: ["3 m/s", "12 m/s", "1.5 m/s", "6 m/s"], correct: 0 },
  { topic: "Trabajo Neto", text: "Un objeto se desplaza $\\Delta \\vec{r} = (4\\hat{i})\\text{ m}$ por una fuerza $\\vec{F} = (10\\hat{i} - 3\\hat{j})\\text{ N}$. El trabajo neto es:", options: ["40 J", "28 J", "52 J", "12 J"], correct: 0 },
  { topic: "Energía Potencial", text: "Elevando $m = 3\\text{ kg}$ a $h = 5\\text{ m}$ con $g = 9.8\\text{ m/s}^2$, la energía potencial ganada es:", options: ["147 J", "150 J", "44.1 J", "29.4 J"], correct: 0 },
  { topic: "Conservación de Energía", text: "Una masa $m = 2\\text{ kg}$ cae desde el reposo de $h = 20\\text{ m}$ ($g = 9.8\\text{ m/s}^2$). Su rapidez de impacto es:", options: ["19.8 m/s", "20 m/s", "14.1 m/s", "392 m/s"], correct: 0 },
  { topic: "Potencia Mecánica", text: "Un motor realiza un trabajo $W = 1200\\text{ J}$ en $t = 4\\text{ s}$. La potencia desarrollada es:", options: ["300 W", "4800 W", "600 W", "150 W"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un submarino avanza con $\\vec{v} = (-12\\hat{i} + 16\\hat{j})\\text{ km/h}$. Su rapidez escalar es:", options: ["20 km/h", "28 km/h", "4 km/h", "192 km/h"], correct: 0 },
  { topic: "Vector Desplazamiento", text: "Un móvil se desplaza desde $\\vec{r}_A = (10\\hat{i} - 4\\hat{j})\\text{ m}$ hasta $\\vec{r}_B = (-2\\hat{i} + 11\\hat{j})\\text{ m}$. El vector desplazamiento es:", options: ["\\Delta \\vec{r} = (-12\\hat{i} + 15\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (8\\hat{i} + 7\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (12\\hat{i} - 15\\hat{j})\\text{ m}", "\\Delta \\vec{r} = (-8\\hat{i} + 15\\hat{j})\\text{ m}"], correct: 0 },
  { topic: "MRUV - Frenado", text: "Un móvil pasa de $\\vec{v}_0 = (20\\hat{i})\\text{ m/s}$ al reposo en $t = 5\\text{ s}$. Su aceleración es:", options: ["\\vec{a} = (-4\\hat{i})\\text{ m/s}^2", "\\vec{a} = (4\\hat{i})\\text{ m/s}^2", "\\vec{a} = (-100\\hat{i})\\text{ m/s}^2", "\\vec{a} = (-5\\hat{i})\\text{ m/s}^2"], correct: 0 },
  { topic: "MCU - Aceleración Angular", text: "Una rueda incrementa su rapidez angular de $\\omega_0 = 10\\text{ rad/s}$ a $\\omega_f = 40\\text{ rad/s}$ en $\\Delta t = 6\\text{ s}$. Su aceleración angular $\\alpha$ es:", options: ["5 rad/s²", "6.67 rad/s²", "30 rad/s²", "8.33 rad/s²"], correct: 0 },
  { topic: "Plano Inclinado", text: "La componente del peso paralela al plano ($30^\\circ$) de una masa $m = 4\\text{ kg}$ ($g = 9.8\\text{ m/s}^2$) vale:", options: ["19.6 N", "33.9 N", "39.2 N", "9.8 N"], correct: 0 },
  { topic: "Fuerza Centrípeta", text: "Una masa $m = 2\\text{ kg}$ gira con radio $r = 1.5\\text{ m}$ a rapidez $v = 3\\text{ m/s}$. La fuerza centrípeta es:", options: ["12 N", "18 N", "6 N", "9 N"], correct: 0 },
  { topic: "Trabajo por Fricción", text: "Una fricción constante de $15\\text{ N}$ opone el avance de un objeto durante $d = 6\\text{ m}$. El trabajo realizado es:", options: ["-90 J", "90 J", "-2.5 J", "0 J"], correct: 0 },
  { topic: "Energía Elástica", text: "Un resorte ($k = 400\\text{ N/m}$) se comprime $x = 0.1\\text{ m}$. La energía potencial elástica almacenada es:", options: ["2 J", "20 J", "4 J", "40 J"], correct: 0 },
  { topic: "Choque Inelástico", text: "Una masa $m_1 = 3\\text{ kg}$ a $v_1 = 4\\text{ m/s}$ choca y se une a $m_2 = 1\\text{ kg}$ en reposo. La rapidez final común es:", options: ["3 m/s", "4 m/s", "12 m/s", "2 m/s"], correct: 0 },
  { topic: "MRU Vectorial", text: "Con $\\vec{v} = (9\\hat{i} - 12\\hat{j})\\text{ m/s}$ durante $t = 10\\text{ s}$, la distancia escalar recorrida es:", options: ["150 m", "210 m", "30 m", "100 m"], correct: 0 },
  { topic: "Posición Relativa", text: "Dadas $\\vec{r}_A = (3\\hat{i} + 8\\hat{j})\\text{ m}$ y $\\vec{r}_B = (7\\hat{i} + 2\\hat{j})\\text{ m}$, la posición relativa de B respecto a A ($\\vec{r}_{B/A}$) es:", options: ["\\vec{r}_{B/A} = (4\\hat{i} - 6\\hat{j})\\text{ m}", "\\vec{r}_{B/A} = (-4\\hat{i} + 6\\hat{j})\\text{ m}", "\\vec{r}_{B/A} = (10\\hat{i} + 10\\hat{j})\\text{ m}", "\\vec{r}_{B/A} = (4\\hat{i} + 6\\hat{j})\\text{ m}"], correct: 0 }
];

// ESTADO DE LA EVALUACIÓN
let currentIdx = 0;
let userAnswers = new Array(40).fill(null);
let violations = 0;
let examActive = false;
let timerInterval = null;

// ELEMENTOS DOM
const startOverlay = document.getElementById('start-overlay');
const blockOverlay = document.getElementById('block-overlay');
const alertBanner = document.getElementById('alert-banner');
const btnStart = document.getElementById('btn-start');
const btnUnlock = document.getElementById('btn-unlock');

const panelExam = document.getElementById('panel-exam');
const panelSide = document.getElementById('panel-side');
const panelResults = document.getElementById('panel-results');

const qTopic = document.getElementById('q-topic');
const qNumber = document.getElementById('q-number');
const qText = document.getElementById('q-text');
const optionsBox = document.getElementById('options-box');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');

const questionsGrid = document.getElementById('questions-grid');
const progressBar = document.getElementById('progress-bar');
const progVal = document.getElementById('prog-val');
const timerDisplay = document.getElementById('timer');

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    buildGrid();
    btnStart.addEventListener('click', startExam);
    btnUnlock.addEventListener('click', unlockExam);
    btnPrev.addEventListener('click', () => navigate(-1));
    btnNext.addEventListener('click', () => navigate(1));
    btnFinish.addEventListener('click', () => {
        if (confirm('¿Desea dar por finalizada la evaluación?')) finishExam();
    });
});

// MOTOR DE RENDERIZADO DE MATEMÁTICAS (KaTeX)
function renderMath(element) {
    if (window.renderMathInElement) {
        renderMathInElement(element, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ],
            throwOnError: false
        });
    }
}

// CONTROL DEL EXAMEN
function startExam() {
    enterFullscreen();
    startOverlay.classList.add('hidden');
    examActive = true;
    startTimer(50 * 60); // 50 Minutos
    setupSecurity();
    renderQuestion();
}

function unlockExam() {
    blockOverlay.classList.add('hidden');
    enterFullscreen();
}

function renderQuestion() {
    const q = examData[currentIdx];
    qTopic.innerText = q.topic;
    qNumber.innerText = `Pregunta ${currentIdx + 1} de 40`;
    qText.innerHTML = q.text;

    optionsBox.innerHTML = '';
    q.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${userAnswers[currentIdx] === i ? 'selected' : ''}`;
        btn.innerHTML = `<span class="opt-index">${String.fromCharCode(65 + i)}</span><span>${optText}</span>`;
        btn.onclick = () => selectOption(i);
        optionsBox.appendChild(btn);
    });

    renderMath(qText);
    renderMath(optionsBox);

    btnPrev.disabled = currentIdx === 0;
    btnNext.innerText = currentIdx === 39 ? 'Finalizar ▶' : 'Siguiente ▶';
    updateGridUI();
}

function selectOption(index) {
    userAnswers[currentIdx] = index;
    renderQuestion();
    updateProgressUI();
}

function navigate(dir) {
    if (currentIdx + dir >= 0 && currentIdx + dir < 40) {
        currentIdx += dir;
        renderQuestion();
    } else if (currentIdx + dir === 40) {
        if (confirm('¿Desea dar por finalizada la evaluación?')) finishExam();
    }
}

function buildGrid() {
    questionsGrid.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const btn = document.createElement('button');
        btn.className = 'grid-btn';
        btn.innerText = i + 1;
        btn.onclick = () => {
            currentIdx = i;
            renderQuestion();
        };
        questionsGrid.appendChild(btn);
    }
}

function updateGridUI() {
    const btns = questionsGrid.children;
    for (let i = 0; i < 40; i++) {
        btns[i].className = 'grid-btn';
        if (userAnswers[i] !== null) btns[i].classList.add('answered');
        if (i === currentIdx) btns[i].classList.add('active');
    }
}

function updateProgressUI() {
    const count = userAnswers.filter(a => a !== null).length;
    progVal.innerText = `${count} / 40`;
    progressBar.style.width = `${(count / 40) * 100}%`;
}

// RELOJ Y CIERRE
function startTimer(seconds) {
    let remain = seconds;
    timerInterval = setInterval(() => {
        const m = Math.floor(remain / 60);
        const s = remain % 60;
        timerDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        if (--remain < 0) {
            clearInterval(timerInterval);
            document.getElementById('time-up-msg').classList.remove('hidden');
            finishExam();
        }
    }, 1000);
}

function finishExam() {
    examActive = false;
    clearInterval(timerInterval);
    
    panelExam.classList.add('hidden');
    panelSide.classList.add('hidden');
    panelResults.classList.remove('hidden');

    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === examData[i].correct) score++;
    });

    document.getElementById('res-score').innerText = `${score} / 40`;
    document.getElementById('res-percent').innerText = `${((score / 40) * 100).toFixed(1)}%`;
    document.getElementById('res-violations').innerText = violations;

    const reviewBox = document.getElementById('review-box');
    reviewBox.innerHTML = '';
    examData.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        item.innerHTML = `
            <strong>Pregunta ${i + 1}: ${q.topic}</strong>
            <p>${q.text}</p>
            <p>Respuesta elegida: ${userAnswers[i] !== null ? q.options[userAnswers[i]] : '<em>Sin responder</em>'}</p>
            <p style="color: var(--success); font-weight: 600;">Respuesta correcta: ${q.options[q.correct]}</p>
        `;
        reviewBox.appendChild(item);
    });
    renderMath(reviewBox);
}

// CAPA DE SEGURIDAD TIPO KIOSKO
function setupSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());

    window.addEventListener('keydown', e => {
        if (!examActive) return;
        if (e.key === 'PrintScreen' || e.key === 'F12' || (e.ctrlKey && ['c', 'u', 's', 'p', 'a'].includes(e.key.toLowerCase()))) {
            e.preventDefault();
            registerViolation();
        }
    });

    window.addEventListener('blur', () => { if (examActive) registerViolation(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && examActive) registerViolation(); });

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && examActive && startOverlay.classList.contains('hidden')) {
            blockOverlay.classList.remove('hidden');
            registerViolation();
        }
    });

    history.pushState(null, null, location.href);
    window.onpopstate = () => history.go(1);
}

function registerViolation() {
    violations++;
    alertBanner.classList.remove('hidden');
    setTimeout(() => alertBanner.classList.add('hidden'), 3000);
}

function enterFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
        if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    }
}