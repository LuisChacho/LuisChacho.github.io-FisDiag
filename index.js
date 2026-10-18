// BANCO EXACTO Y COMPLETO DE 40 PREGUNTAS
const rawExamData = [
  { topic: "Unidades SI", text: "La unidad de medida de la fuerza en el Sistema Internacional (SI) expresada en unidades fundamentales es:", options: ["$\\text{kg}\\cdot\\text{m}/\\text{s}^2$", "$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$", "$\\text{kg}\\cdot\\text{m}/\\text{s}$", "$\\text{N}\\cdot\\text{m}$"], correct: 0 },
  { topic: "Conversión de Unidades", text: "Un vehículo viaja a una rapidez de $108\\text{ km/h}$. Su equivalencia en el Sistema Internacional ($\\text{m/s}$) es:", options: ["$30\\text{ m/s}$", "$25\\text{ m/s}$", "$36\\text{ m/s}$", "$15\\text{ m/s}$"], correct: 0 },
  { topic: "Vectores Fundamentales", text: "Dado el vector $\\vec{A} = (3\\hat{\\imath} - 4\\hat{\\jmath})\\text{ m}$, determinar su módulo y su dirección respecto al eje $+x$:", options: ["$|\\vec{A}| = 5\\text{ m}$, $\\theta = -53.13^\\circ$", "$|\\vec{A}| = 7\\text{ m}$, $\\theta = 53.13^\\circ$", "$|\\vec{A}| = 5\\text{ m}$, $\\theta = 126.87^\\circ$", "$|\\vec{A}| = 25\\text{ m}$, $\\theta = -36.87^\\circ$"], correct: 0 },
  { topic: "Unidades SI - Energía", text: "El Joule ($\\text{J}$) es la unidad SI de trabajo y energía. En unidades fundamentales equivale a:", options: ["$\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$", "$\\text{kg}\\cdot\\text{m}/\\text{s}^2$", "$\\text{kg}\\cdot\\text{m}/\\text{s}$", "$\\text{N}/\\text{m}$"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un dron se desplaza desde $\\vec{r}_0 = (4\\hat{\\imath} + 2\\hat{\\jmath})\\text{ m}$ hasta $\\vec{r}_f = (10\\hat{\\imath} - 6\\hat{\\jmath})\\text{ m}$ en $\\Delta t = 2\\text{ s}$. Calcular su velocidad constante $\\vec{v}$:", options: ["$\\vec{v} = (3\\hat{\\imath} - 4\\hat{\\jmath})\\text{ m/s}$", "$\\vec{v} = (6\\hat{\\imath} - 8\\hat{\\jmath})\\text{ m/s}$", "$\\vec{v} = (7\\hat{\\imath} - 2\\hat{\\jmath})\\text{ m/s}$", "$\\vec{v} = (14\\hat{\\imath} - 4\\hat{\\jmath})\\text{ m/s}$"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un móvil tiene velocidad constante $\\vec{v} = (5\\hat{\\imath} - 12\\hat{\\jmath})\\text{ m/s}$. El módulo de su desplazamiento tras $3\\text{ s}$ es:", options: ["$39\\text{ m}$", "$51\\text{ m}$", "$15\\text{ m}$", "$36\\text{ m}$"], correct: 0 },
  { topic: "MRU Vectorial", text: "Un barco navega durante $4\\text{ h}$ con $\\vec{v} = (15\\hat{\\imath} + 20\\hat{\\jmath})\\text{ km/h}$. Su posición final partiendo del origen es:", options: ["$\\vec{r} = (60\\hat{\\imath} + 80\\hat{\\jmath})\\text{ km}$", "$\\vec{r} = (30\\hat{\\imath} + 40\\hat{\\jmath})\\text{ km}$", "$\\vec{r} = (100\\hat{\\imath})\\text{ km}$", "$\\vec{r} = (15\\hat{\\imath} + 20\\hat{\\jmath})\\text{ km}$"], correct: 0 },
  { topic: "MRU Vectorial", text: "Iniciando en $\\vec{r}_0 = (-2\\hat{\\imath} + 4\\hat{\\jmath})\\text{ m}$ con $\\vec{v} = (3\\hat{\\imath} + 5\\hat{\\jmath})\\text{ m/s}$, la posición a los $t = 4\\text{ s}$ es:", options: ["$\\vec{r} = (10\\hat{\\imath} + 24\\hat{\\jmath})\\text{ m}$", "$\\vec{r} = (12\\hat{\\imath} + 20\\hat{\\jmath})\\text{ m}$", "$\\vec{r} = (14\\hat{\\imath} + 16\\hat{\\jmath})\\text{ m}$", "$\\vec{r} = (8\\hat{\\imath} + 20\\hat{\\jmath})\\text{ m}$"], correct: 0 },
  { topic: "MRUV Vectorial", text: "Una partícula acelera desde el reposo con $\\vec{a} = (2\\hat{\\imath} + 4\\hat{\\jmath})\\text{ m/s}^2$. Su velocidad a los $t = 5\\text{ s}$ es:", options: ["$\\vec{v} = (10\\hat{\\imath} + 20\\hat{\\jmath})\\text{ m/s}$", "$\\vec{v} = (5\\hat{\\imath} + 10\\hat{\\jmath})\\text{ m/s}$", "$\\vec{v} = (20\\hat{\\imath} + 40\\hat{\\jmath})\\text{ m/s}$", "$\\vec{v} = (8\\hat{\\imath} + 16\\hat{\\jmath})\\text{ m/s}$"], correct: 0 },
  { topic: "MRUV Vectorial", text: "Con $\\vec{v}_0 = (3\\hat{\\imath} + 2\\hat{\\jmath})\\text{ m/s}$ y $\\vec{a} = (4\\hat{\\imath} - 2\\hat{\\jmath})\\text{ m/s}^2$, calcular el desplazamiento $\\Delta \\vec{r}$ tras $t = 2\\text{ s}$:", options: ["$\\Delta \\vec{r} = (14\\hat{\\imath} + 0\\hat{\\jmath})\\text{ m}$", "$\\Delta \\vec{r} = (10\\hat{\\imath} + 4\\hat{\\jmath})\\text{ m}$", "$\\Delta \\vec{r} = (12\\hat{\\imath} - 2\\hat{\\jmath})\\text{ m}$", "$\\Delta \\vec{r} = (8\\hat{\\imath} + 2\\hat{\\jmath})\\text{ m}$"], correct: 0 },
  { topic: "MRUV Vectorial", text: "La velocidad de un auto cambia de $\\vec{v}_1 = (2\\hat{\\imath} + 3\\hat{\\jmath})\\text{ m/s}$ a $\\vec{v}_2 = (8\\hat{\\imath} + 11\\hat{\\jmath})\\text{ m/s}$ en $\\Delta t = 2\\text{ s}$. Su aceleración media es:", options: ["$\\vec{a}_m = (3\\hat{\\imath} + 4\\hat{\\jmath})\\text{ m/s}^2$", "$\\vec{a}_m = (6\\hat{\\imath} + 8\\hat{\\jmath})\\text{ m/s}^2$", "$\\vec{a}_m = (5\\hat{\\imath} + 7\\hat{\\jmath})\\text{ m/s}^2$", "$\\vec{a}_m = (4\\hat{\\imath} + 3\\hat{\\jmath})\\text{ m/s}^2$"], correct: 0 },
  { topic: "MRUV Vectorial", text: "Un objeto reduce su velocidad de $\\vec{v}_0 = (20\\hat{\\imath})\\text{ m/s}$ al reposo en $t = 5\\text{ s}$. Su aceleración constante es:", options: ["$\\vec{a} = (-4\\hat{\\imath})\\text{ m/s}^2$", "$\\vec{a} = (4\\hat{\\imath})\\text{ m/s}^2$", "$\\vec{a} = (-100\\hat{\\imath})\\text{ m/s}^2$", "$\\vec{a} = (-5\\hat{\\imath})\\text{ m/s}^2$"], correct: 0 },
  { topic: "MRUV Escalar", text: "Un vehículo frena uniformemente de $20\\text{ m/s}$ a $10\\text{ m/s}$ recorriendo $30\\text{ m}$. La aceleración del móvil es:", options: ["$-5\\text{ m/s}^2$", "$-2.5\\text{ m/s}^2$", "$-3\\text{ m/s}^2$", "$-1.5\\text{ m/s}^2$"], correct: 0 },
  { topic: "Caída Libre", text: "Se deja caer una piedra desde el reposo desde una altura de $20\\text{ m}$ ($g = 10\\text{ m/s}^2$). El tiempo de caída es:", options: ["$2\\text{ s}$", "$4\\text{ s}$", "$1\\text{ s}$", "$3\\text{ s}$"], correct: 0 },
  { topic: "Lanzamiento Vertical", text: "Se lanza un objeto hacia arriba con $v_0 = 30\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). La altura máxima alcanzada es:", options: ["$45\\text{ m}$", "$90\\text{ m}$", "$30\\text{ m}$", "$60\\text{ m}$"], correct: 0 },
  { topic: "Caída Libre", text: "Un objeto lanzado hacia abajo con $v_0 = 5\\text{ m/s}$ alcanza una rapidez de $25\\text{ m/s}$ tras caer ($g = 10\\text{ m/s}^2$). El tiempo transcurrido es:", options: ["$2\\text{ s}$", "$3\\text{ s}$", "$2.5\\text{ s}$", "$1.5\\text{ s}$"], correct: 0 },
  { topic: "MCU - Cinemática", text: "Una partícula en MCU gira a $\\omega = 10\\text{ rad/s}$ en una trayectoria de radio $R = 2\\text{ m}$. Su rapidez tangencial $v$ es:", options: ["$20\\text{ m/s}$", "$5\\text{ m/s}$", "$40\\text{ m/s}$", "$10\\text{ m/s}$"], correct: 0 },
  { topic: "MCU - Aceleración", text: "Un punto en el borde de un disco de radio $R = 0.5\\text{ m}$ gira con $v = 4\\text{ m/s}$. La aceleración centrípeta es:", options: ["$32\\text{ m/s}^2$", "$16\\text{ m/s}^2$", "$8\\text{ m/s}^2$", "$4\\text{ m/s}^2$"], correct: 0 },
  { topic: "MCU - Período y Frecuencia", text: "Si un motor realiza $120\\text{ RPM}$ (revoluciones por minuto), su frecuencia $f$ en Hertz ($\\text{Hz}$) es:", options: ["$2\\text{ Hz}$", "$120\\text{ Hz}$", "$60\\text{ Hz}$", "$4\\text{ Hz}$"], correct: 0 },
  { topic: "MCUV", text: "Una rueda incrementa su velocidad angular de $\\omega_0 = 5\\text{ rad/s}$ a $\\omega_f = 25\\text{ rad/s}$ en $4\\text{ s}$. Su aceleración angular $\\alpha$ es:", options: ["$5\\text{ rad/s}^2$", "$10\\text{ rad/s}^2$", "$2.5\\text{ rad/s}^2$", "$20\\text{ rad/s}^2$"], correct: 0 },
  { topic: "Leyes de Newton", text: "Sobre una masa de $m = 4\\text{ kg}$ actúa una fuerza neta de $12\\text{ N}$. La aceleración producida es:", options: ["$3\\text{ m/s}^2$", "$48\\text{ m/s}^2$", "$0.33\\text{ m/s}^2$", "$8\\text{ m/s}^2$"], correct: 0 },
  { topic: "Dinámica con Fricción", text: "Un bloque de $10\\text{ kg}$ es empujado con $50\\text{ N}$. Si la fuerza de fricción es $10\\text{ N}$, la aceleración es:", options: ["$4\\text{ m/s}^2$", "$5\\text{ m/s}^2$", "$6\\text{ m/s}^2$", "$3\\text{ m/s}^2$"], correct: 0 },
  { topic: "Dinámica - Plano Inclinado", text: "Un bloque de $m = 2\\text{ kg}$ se desliza sin fricción por un plano inclinado a $30^\\circ$ ($g = 10\\text{ m/s}^2$). La aceleración paralela al plano es:", options: ["$5\\text{ m/s}^2$", "$10\\text{ m/s}^2$", "$8.66\\text{ m/s}^2$", "$2.5\\text{ m/s}^2$"], correct: 0 },
  { topic: "Fuerza Centrípeta", text: "Una masa de $2\\text{ kg}$ gira atada a una cuerda de $1.5\\text{ m}$ con rapidez constante de $3\\text{ m/s}$. La tensión (fuerza centrípeta) es:", options: ["$12\\text{ N}$", "$18\\text{ N}$", "$6\\text{ N}$", "$9\\text{ N}$"], correct: 0 },
  { topic: "Tercera Ley de Newton", text: "Si un libro de $2\\text{ kg}$ descansa sobre una mesa ($g = 9.8\\text{ m/s}^2$), la magnitud de la fuerza normal ejercida por la mesa es:", options: ["$19.6\\text{ N}$", "$9.8\\text{ N}$", "$0\\text{ N}$", "$39.2\\text{ N}$"], correct: 0 },
  { topic: "Estática - 1ra Condición", text: "Un cuerpo se encuentra en equilibrio traslacional bajo la acción de tres fuerzas. Si dos fuerzas son $F_1 = 10\\text{ N}$ a la derecha y $F_2 = 4\\text{ N}$ a la izquierda, la tercera fuerza $F_3$ debe ser:", options: ["$6\\text{ N}$ a la izquierda", "$6\\text{ N}$ a la derecha", "$14\\text{ N}$ a la izquierda", "$10\\text{ N}$ a la izquierda"], correct: 0 },
  { topic: "Estática - Tensión", text: "Un semáforo de $100\\text{ N}$ cuelga simétricamente de dos cuerdas verticales. La tensión en cada cuerda es:", options: ["$50\\text{ N}$", "$100\\text{ N}$", "$200\\text{ N}$", "$25\\text{ N}$"], correct: 0 },
  { topic: "Estática - Torque", text: "Se aplica una fuerza perpendicular de $20\\text{ N}$ en el extremo de una llave de $0.3\\text{ m}$ de largo. El torque generado es:", options: ["$6\\text{ N}\\cdot\\text{m}$", "$66.6\\text{ N}\\cdot\\text{m}$", "$1.5\\text{ N}\\cdot\\text{m}$", "$60\\text{ N}\\cdot\\text{m}$"], correct: 0 },
  { topic: "Trabajo Mecánico", text: "Una fuerza de $30\\text{ N}$ paralela al desplazamiento mueve un cuerpo una distancia de $4\\text{ m}$. El trabajo realizado es:", options: ["$120\\text{ J}$", "$7.5\\text{ J}$", "$34\\text{ J}$", "$26\\text{ J}$"], correct: 0 },
  { topic: "Trabajo con Ángulo", text: "Una fuerza de $50\\text{ N}$ aplicada a $60^\\circ$ respecto a la horizontal desplaza un carrito $10\\text{ m}$. El trabajo mecánico es ($\\cos 60^\\circ = 0.5$):", options: ["$250\\text{ J}$", "$500\\text{ J}$", "$433\\text{ J}$", "$100\\text{ J}$"], correct: 0 },
  { topic: "Potencia Mecánica", text: "Un motor efectúa un trabajo de $2400\\text{ J}$ en un tiempo de $8\\text{ s}$. La potencia desarrollada es:", options: ["$300\\text{ W}$", "$19200\\text{ W}$", "$600\\text{ W}$", "$150\\text{ W}$"], correct: 0 },
  { topic: "Trabajo por Fricción", text: "Una fuerza de rozamiento constante de $15\\text{ N}$ actúa sobre un objeto a lo largo de un desplazamiento de $6\\text{ m}$. El trabajo de la fricción es:", options: ["$-90\\text{ J}$", "$90\\text{ J}$", "$0\\text{ J}$", "$-2.5\\text{ J}$"], correct: 0 },
  { topic: "Energía Cinética", text: "Un auto de masa $m = 1000\\text{ kg}$ avanza a una rapidez de $v = 10\\text{ m/s}$. Su energía cinética es:", options: ["$50000\\text{ J}$", "$100000\\text{ J}$", "$10000\\text{ J}$", "$5000\\text{ J}$"], correct: 0 },
  { topic: "Energía Potencial Gravitatoria", text: "Un objeto de $m = 3\\text{ kg}$ se eleva a una altura $h = 5\\text{ m}$ ($g = 10\\text{ m/s}^2$). Su energía potencial ganada es:", options: ["$150\\text{ J}$", "$15\\text{ J}$", "$30\\text{ J}$", "$75\\text{ J}$"], correct: 0 },
  { topic: "Conservación de Energía", text: "Se suelta una masa de $2\\text{ kg}$ desde el reposo a una altura de $5\\text{ m}$ ($g = 10\\text{ m/s}^2$). Ignorando el aire, su rapidez al llegar al suelo es:", options: ["$10\\text{ m/s}$", "$100\\text{ m/s}$", "$14.14\\text{ m/s}$", "$5\\text{ m/s}$"], correct: 0 },
  { topic: "Energía Elástica", text: "Un resorte de constante $k = 200\\text{ N/m}$ se comprime $x = 0.2\\text{ m}$. La energía potencial elástica almacenada es:", options: ["$4\\text{ J}$", "$40\\text{ J}$", "$8\\text{ J}$", "$2\\text{ J}$"], correct: 0 },
  { topic: "Impulso Mecánico", text: "Una fuerza constante de $40\\text{ N}$ se aplica sobre una pelota durante $\\Delta t = 0.2\\text{ s}$. El impulso impartido es:", options: ["$8\\text{ N}\\cdot\\text{s}$", "$200\\text{ N}\\cdot\\text{s}$", "$80\\text{ N}\\cdot\\text{s}$", "$4\\text{ N}\\cdot\\text{s}$"], correct: 0 },
  { topic: "Cantidad de Movimiento", text: "Un proyectil de $m = 0.5\\text{ kg}$ lleva una rapidez de $200\\text{ m/s}$. La cantidad de movimiento $p$ es:", options: ["$100\\text{ kg}\\cdot\\text{m/s}$", "$400\\text{ kg}\\cdot\\text{m/s}$", "$200\\text{ kg}\\cdot\\text{m/s}$", "$50\\text{ kg}\\cdot\\text{m/s}$"], correct: 0 },
  { topic: "Conservación del Impulso", text: "Un patinador de $60\\text{ kg}$ en reposo lanza un balón de $2\\text{ kg}$ hacia adelante a $15\\text{ m/s}$. La rapidez de retroceso del patinador es:", options: ["$0.5\\text{ m/s}$", "$30\\text{ m/s}$", "$1\\text{ m/s}$", "$2\\text{ m/s}$"], correct: 0 },
  { topic: "Choque Inelástico", text: "Un carrito $A$ de $3\\text{ kg}$ a $4\\text{ m/s}$ choca y queda acoplado a un carrito $B$ de $1\\text{ kg}$ en reposo. La rapidez final del conjunto es:", options: ["$3\\text{ m/s}$", "$4\\text{ m/s}$", "$2\\text{ m/s}$", "$1.5\\text{ m/s}$"], correct: 0 }
];

const INITIAL_TIME_SECONDS = 50 * 60; // 50 minutos
const MAX_VIOLATIONS = 3;

let examData = [];
let currentIdx = 0;
let userAnswers = new Array(40).fill(null);
let violations = 0;
let examActive = false;
let timerInterval = null;
let remainingSeconds = INITIAL_TIME_SECONDS;
let studentData = { name: '', id: '' };

const startOverlay = document.getElementById('start-overlay');
const blockOverlay = document.getElementById('block-overlay');
const attemptBlockedOverlay = document.getElementById('attempt-blocked-overlay');
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

document.addEventListener('DOMContentLoaded', () => {
    checkSingleAttempt();
    buildGrid();
    btnUnlock.addEventListener('click', unlockExam);
    btnPrev.addEventListener('click', () => navigate(-1));
    btnNext.addEventListener('click', () => navigate(1));
    btnFinish.addEventListener('click', () => {
        if (confirm('¿Desea dar por finalizada la evaluación? Esto finalizará la prueba.')) {
            finishExam();
        }
    });
    renderMath(document.body);
});

/* ALEATORIZACIÓN DE PREGUNTAS Y OPCIONES */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function prepareRandomExam() {
    const shuffledQuestions = shuffleArray(rawExamData);
    examData = shuffledQuestions.map(q => {
        const correctText = q.options[q.correct];
        const shuffledOptions = shuffleArray(q.options);
        const newCorrectIdx = shuffledOptions.indexOf(correctText);
        return {
            topic: q.topic,
            text: q.text,
            options: shuffledOptions,
            correct: newCorrectIdx
        };
    });
}

/* VERIFICACIÓN DE INTENTO ÚNICO POR CÉDULA Y DISPOSITIVO */
function checkSingleAttempt() {
    const isCompleted = localStorage.getItem('eval_completed');
    const savedStudent = localStorage.getItem('eval_studentData');

    if (isCompleted === 'true') {
        const student = savedStudent ? JSON.parse(savedStudent) : { name: 'Estudiante', id: '-' };
        document.getElementById('blocked-student-info').innerText = `Estudiante: ${student.name} (${student.id})`;
        startOverlay.classList.add('hidden');
        attemptBlockedOverlay.classList.remove('hidden');
        return true;
    }
    return false;
}

function handleStartExam() {
    if (checkSingleAttempt()) return;

    const nameInput = document.getElementById('student-name').value.trim();
    const idInput = document.getElementById('student-id').value.trim();

    if (!nameInput || !idInput) {
        alert("Por favor complete los campos de Nombre y Cédula.");
        return;
    }

    // Verificar si esta cédula ya fue registrada antes
    const completedIds = JSON.parse(localStorage.getItem('eval_completed_ids') || '[]');
    if (completedIds.includes(idInput)) {
        alert("Esta cédula ya tiene un intento completado en esta plataforma.");
        document.getElementById('blocked-student-info').innerText = `Cédula: ${idInput}`;
        startOverlay.classList.add('hidden');
        attemptBlockedOverlay.classList.remove('hidden');
        return;
    }

    studentData = { name: nameInput, id: idInput };
    document.getElementById('student-info-display').innerText = `Estudiante: ${studentData.name} (${studentData.id})`;

    prepareRandomExam();
    enterFullscreen();
    startOverlay.classList.add('hidden');
    examActive = true;
    saveStateToStorage();
    startTimer();
    setupSecurity();
    renderQuestion();
}

function saveStateToStorage() {
    localStorage.setItem('eval_hasStarted', 'true');
    localStorage.setItem('eval_userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('eval_remainingSeconds', remainingSeconds.toString());
    localStorage.setItem('eval_currentIdx', currentIdx.toString());
    localStorage.setItem('eval_violations', violations.toString());
    localStorage.setItem('eval_studentData', JSON.stringify(studentData));
    localStorage.setItem('eval_examData', JSON.stringify(examData));
}

function renderMath(targetElement) {
    if (window.renderMathInElement) {
        renderMathInElement(targetElement, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
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
    btnNext.innerText = currentIdx === 39 ? 'Finalizar ►' : 'Siguiente ►';
    updateGridUI();
    saveStateToStorage();
}

function selectOption(index) {
    userAnswers[currentIdx] = index;
    renderQuestion();
    updateProgressUI();
    saveStateToStorage();
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

function updateTimerDisplay() {
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    timerDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('time-up-msg').innerText = "¡Tiempo finalizado! Examen procesado automáticamente.";
            document.getElementById('time-up-msg').classList.remove('hidden');
            finishExam();
        } else {
            remainingSeconds--;
            updateTimerDisplay();
            if (remainingSeconds % 5 === 0) saveStateToStorage();
        }
    }, 1000);
}

function finishExam() {
    examActive = false;
    clearInterval(timerInterval);
    exitFullscreen();

    // Registrar intento completado para impedir nuevos intentos
    localStorage.setItem('eval_completed', 'true');
    const completedIds = JSON.parse(localStorage.getItem('eval_completed_ids') || '[]');
    if (studentData.id && !completedIds.includes(studentData.id)) {
        completedIds.push(studentData.id);
        localStorage.setItem('eval_completed_ids', JSON.stringify(completedIds));
    }
    
    panelExam.classList.add('hidden');
    panelSide.classList.add('hidden');
    blockOverlay.classList.add('hidden');
    panelResults.classList.remove('hidden');

    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === examData[i].correct) score++;
    });

    document.getElementById('student-results-badge').innerText = `Estudiante: ${studentData.name} (Cédula: ${studentData.id})`;
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
            <strong style="color: var(--text-muted); font-size: 0.85rem;">PREGUNTA ${i + 1} (${q.topic})</strong>
            <p style="font-weight: 600; margin-top: 0.25rem;">${q.text}</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Respuesta elegida: ${userAnswers[i] !== null ? q.options[userAnswers[i]] : '<em>Sin responder</em>'}</p>
            <p style="color: var(--success); font-weight: 600; font-size: 0.9rem;">Respuesta correcta: ${q.options[q.correct]}</p>
        `;
        reviewBox.appendChild(item);
    });
    renderMath(reviewBox);
}

/* PROTOCOLOS DE SEGURIDAD */
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
    saveStateToStorage();

    if (violations >= MAX_VIOLATIONS) {
        alertBanner.innerText = "❌ PRUEBA BLOQUEADA: Se alcanzó el límite máximo de 3 infracciones.";
        alertBanner.classList.remove('hidden');
        document.getElementById('time-up-msg').innerText = "Examen cancelado automáticamente por acumular 3 infracciones de seguridad.";
        document.getElementById('time-up-msg').classList.remove('hidden');
        finishExam();
        return;
    }

    alertBanner.innerText = `⚠️ INFRACCIÓN ${violations}/${MAX_VIOLATIONS}: Cambio de pestaña o salida detectada.`;
    alertBanner.classList.remove('hidden');
    setTimeout(() => alertBanner.classList.add('hidden'), 3500);
}

function enterFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
        if (el.requestFullscreen) {
            el.requestFullscreen().catch(() => {});
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    }
}

function exitFullscreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}