const summaries = [
  {
    title: "Empresa individual",
    points: [
      "La empresa y el propietario son la misma persona ante la ley (personalidad fisica).",
      "Responsabilidad ilimitada: responde con el dinero del negocio y con sus bienes personales.",
      "Tributa por IRPF sobre los beneficios obtenidos."
    ]
  },
  {
    title: "Emprendedor de responsabilidad limitada",
    points: [
      "Se parece a la empresa individual en su funcionamiento.",
      "La responsabilidad no alcanza a la vivienda habitual en caso de deudas.",
      "Protege parte del patrimonio personal frente al riesgo empresarial."
    ]
  },
  {
    title: "Sociedad anonima (SA)",
    points: [
      "Tiene personalidad juridica propia, separada de la de sus socios.",
      "Responsabilidad limitada al capital aportado por cada socio.",
      "El capital se divide en acciones que pueden comprarse y venderse libremente."
    ]
  },
  {
    title: "Sociedad limitada (SL)",
    points: [
      "Tiene personalidad juridica y responsabilidad limitada.",
      "El capital se divide en participaciones, que no se transmiten libremente como acciones.",
      "Puede constituirse con bajo capital inicial y puede ser unipersonal."
    ]
  },
  {
    title: "Sociedad limitada nueva empresa",
    points: [
      "Comparte rasgos de la SL.",
      "Pensada para pequenos negocios definidos por la ley.",
      "Permite tramites de constitucion mas rapidos y en linea."
    ]
  },
  {
    title: "Sociedad cooperativa",
    points: [
      "Se crea para un objetivo comun de sus socios (por ejemplo, comercializar productos).",
      "Prima la colaboracion entre miembros sobre el interes individual.",
      "Suele vincularse a actividades productivas locales (naranjas, vino, aceite, etc.)."
    ]
  },
  {
    title: "Sociedades laborales (SLL / SAL)",
    points: [
      "Pueden ser una limitada laboral (SLL) o anonima laboral (SAL).",
      "Mantienen rasgos de SL o SA, respectivamente.",
      "Su particularidad principal esta en el tipo de socios y participacion laboral."
    ]
  }
];

const questionBank = [
  {
    question: "En una empresa individual, la responsabilidad del propietario es:",
    options: ["Limitada al capital aportado", "Ilimitada", "Nula", "Solo sobre la vivienda habitual"],
    answer: 1
  },
  {
    question: "En la sociedad anonima, el capital se divide en:",
    options: ["Cuotas", "Participaciones", "Acciones", "Titulos no transmisibles"],
    answer: 2
  },
  {
    question: "Las participaciones de una SL:",
    options: ["Se venden libremente a cualquiera", "No tienen valor", "Requieren acuerdo y preferencia de socios", "Solo las compra el Estado"],
    answer: 2
  },
  {
    question: "El impuesto citado para empresa individual en el PDF es:",
    options: ["IVA", "Impuesto de sociedades", "IRPF", "IAE"],
    answer: 2
  },
  {
    question: "Una SA tiene personalidad:",
    options: ["Fisica", "Juridica propia", "Compartida con sus socios", "Sin personalidad"],
    answer: 1
  },
  {
    question: "En una SA, ante deudas, el socio responde:",
    options: ["Con todos sus bienes", "Solo con el capital aportado", "Con su vivienda y coche", "No responde nunca"],
    answer: 1
  },
  {
    question: "El emprendedor de responsabilidad limitada protege especialmente:",
    options: ["Las acciones", "La vivienda habitual", "El salario de los trabajadores", "Los beneficios futuros"],
    answer: 1
  },
  {
    question: "La SL Nueva Empresa esta orientada a:",
    options: ["Grandes multinacionales", "Administracion publica", "Pequenos negocios", "Solo cooperativas"],
    answer: 2
  },
  {
    question: "Una cooperativa nace porque los socios comparten:",
    options: ["Un objetivo comun", "La misma familia", "Un unico cliente", "Una franquicia"],
    answer: 0
  },
  {
    question: "SLL significa:",
    options: ["Sociedad Libre Laboral", "Sociedad Limitada Laboral", "Sociedad Legal Larga", "Sociedad Local de Libre comercio"],
    answer: 1
  },
  {
    question: "SAL significa:",
    options: ["Sociedad Anonima Laboral", "Sociedad Agricola Libre", "Sociedad Autonoma Local", "Sistema Anual Laboral"],
    answer: 0
  },
  {
    question: "Una diferencia clave entre SA y SL es que:",
    options: ["La SA no tiene socios", "En SA hay acciones y en SL participaciones", "La SL cotiza siempre en bolsa", "La SA no tiene personalidad juridica"],
    answer: 1
  },
  {
    question: "En una empresa individual, legalmente empresa y propietario:",
    options: ["Son personas distintas", "Siempre son dos socios", "Son la misma persona", "No pueden tener deudas"],
    answer: 2
  },
  {
    question: "La responsabilidad limitada implica que:",
    options: ["No existen deudas", "Se responde hasta el capital aportado", "Solo responde el Estado", "No hay obligaciones fiscales"],
    answer: 1
  },
  {
    question: "Segun el contenido extraido, la SL puede ser:",
    options: ["Solo de muchos socios", "Solo publica", "Unipersonal", "Unicamente cooperativa"],
    answer: 2
  }
];

const summaryGrid = document.getElementById("summaryGrid");
const questionText = document.getElementById("questionText");
const optionsWrap = document.getElementById("options");
const feedback = document.getElementById("feedback");
const progressLabel = document.getElementById("progressLabel");
const scoreChip = document.getElementById("scoreChip");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

let quiz = [];
let current = 0;
let score = 0;
let locked = true;

function renderSummaries() {
  summaryGrid.innerHTML = summaries
    .map((item, index) => {
      const points = item.points.map((point) => `<li>${point}</li>`).join("");
      return `<article class="card" style="animation-delay:${index * 70}ms"><h3>${item.title}</h3><ul>${points}</ul></article>`;
    })
    .join("");
}

function pickRandomQuestions(amount) {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, amount);
}

function setBaseState() {
  questionText.textContent = 'Pulsa en "Iniciar test" para comenzar.';
  progressLabel.textContent = "Pregunta 0 de 0";
  scoreChip.textContent = "Aciertos: 0";
  optionsWrap.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
}

function startQuiz() {
  quiz = pickRandomQuestions(10);
  current = 0;
  score = 0;
  locked = false;

  startBtn.disabled = true;
  resetBtn.disabled = false;
  nextBtn.disabled = true;

  renderQuestion();
}

function renderQuestion() {
  const item = quiz[current];
  progressLabel.textContent = `Pregunta ${current + 1} de ${quiz.length}`;
  questionText.textContent = item.question;
  scoreChip.textContent = `Aciertos: ${score}`;
  feedback.textContent = "";
  feedback.className = "feedback";
  optionsWrap.innerHTML = "";

  item.options.forEach((option, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(idx));
    optionsWrap.appendChild(button);
  });

  nextBtn.disabled = true;
  locked = false;
}

function selectOption(selectedIndex) {
  if (locked) {
    return;
  }

  locked = true;
  const item = quiz[current];
  const optionButtons = [...document.querySelectorAll(".option")];

  optionButtons.forEach((button, idx) => {
    button.disabled = true;
    if (idx === item.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedIndex === item.answer) {
    score += 1;
    feedback.textContent = "Correcto. Buena respuesta.";
    feedback.className = "feedback ok";
  } else {
    optionButtons[selectedIndex].classList.add("wrong");
    feedback.textContent = `Incorrecto. La respuesta correcta es: ${item.options[item.answer]}.`;
    feedback.className = "feedback bad";
  }

  scoreChip.textContent = `Aciertos: ${score}`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (current < quiz.length - 1) {
    current += 1;
    renderQuestion();
    return;
  }

  endQuiz();
}

function endQuiz() {
  const percent = Math.round((score / quiz.length) * 100);
  questionText.textContent = `Test finalizado: ${score}/${quiz.length} aciertos (${percent}%).`;
  progressLabel.textContent = "Completado";
  optionsWrap.innerHTML = "";

  if (percent >= 70) {
    feedback.textContent = "Buen trabajo. Ya tienes una base solida del tema.";
    feedback.className = "feedback ok";
  } else {
    feedback.textContent = "Repasa los resumenes y vuelve a intentarlo para mejorar.";
    feedback.className = "feedback bad";
  }

  nextBtn.disabled = true;
  startBtn.disabled = false;
}

function resetQuiz() {
  quiz = [];
  current = 0;
  score = 0;
  locked = true;

  startBtn.disabled = false;
  nextBtn.disabled = true;
  resetBtn.disabled = true;

  setBaseState();
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
resetBtn.addEventListener("click", resetQuiz);

renderSummaries();
setBaseState();
