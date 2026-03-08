const summaries = [
  {
    title: "Empresa individual",
    points: [
      "La empresa y el propietario son la misma persona ante la ley (personalidad fisica).",
      "Responsabilidad ilimitada: responde con el dinero del negocio y con sus bienes personales.",
      "Tributa por IRPF sobre los beneficios obtenidos.",
      "Suele ser una forma rapida de iniciar actividad, con pocos tramites de constitucion."
    ]
  },
  {
    title: "Emprendedor de responsabilidad limitada",
    points: [
      "Se parece a la empresa individual en su funcionamiento.",
      "La responsabilidad no alcanza a la vivienda habitual en caso de deudas.",
      "Protege parte del patrimonio personal frente al riesgo empresarial.",
      "Mantiene obligacion de cumplir registro y publicidad para conservar la proteccion."
    ]
  },
  {
    title: "Sociedad anonima (SA)",
    points: [
      "Tiene personalidad juridica propia, separada de la de sus socios.",
      "Responsabilidad limitada al capital aportado por cada socio.",
      "El capital se divide en acciones que pueden comprarse y venderse libremente.",
      "Suele usarse para proyectos grandes por su facilidad para captar inversion.",
      "Tributa por Impuesto sobre Sociedades."
    ]
  },
  {
    title: "Sociedad limitada (SL)",
    points: [
      "Tiene personalidad juridica y responsabilidad limitada.",
      "El capital se divide en participaciones, que no se transmiten libremente como acciones.",
      "Puede constituirse con bajo capital inicial y puede ser unipersonal.",
      "Se adapta bien a pequenas y medianas empresas con socios de confianza.",
      "Tributa por Impuesto sobre Sociedades."
    ]
  },
  {
    title: "Sociedad limitada nueva empresa",
    points: [
      "Comparte rasgos de la SL.",
      "Pensada para pequenos negocios definidos por la ley.",
      "Permite tramites de constitucion mas rapidos y en linea.",
      "Busca simplificar el arranque de nuevos proyectos empresariales.",
      "Tributa por Impuesto sobre Sociedades, como las sociedades de capital."
    ]
  },
  {
    title: "Sociedad cooperativa",
    points: [
      "Se crea para un objetivo comun de sus socios (por ejemplo, comercializar productos).",
      "Prima la colaboracion entre miembros sobre el interes individual.",
      "Suele vincularse a actividades productivas locales (naranjas, vino, aceite, etc.).",
      "La gestion suele ser democratica, con participacion activa de los socios.",
      "Tributa por Impuesto sobre Sociedades, con posible regimen fiscal especifico."
    ]
  },
  {
    title: "Sociedades laborales (SLL / SAL)",
    points: [
      "Pueden ser una limitada laboral (SLL) o anonima laboral (SAL).",
      "Mantienen rasgos de SL o SA, respectivamente.",
      "Su particularidad principal esta en el tipo de socios y participacion laboral.",
      "Buscan combinar propiedad y trabajo en la propia empresa.",
      "Como sociedades, tributan por Impuesto sobre Sociedades."
    ]
  },
  {
    title: "Fiscalidad y obligaciones comunes",
    points: [
      "Empresa individual y emprendedor de responsabilidad limitada: IRPF por beneficios empresariales.",
      "Sociedades (SA, SL, SLNE, cooperativas, laborales): Impuesto sobre Sociedades.",
      "Segun la actividad, tambien existen obligaciones como IVA e impuestos/tributos locales.",
      "Elegir forma juridica afecta responsabilidad, fiscalidad y tramites administrativos."
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
  },
  {
    question: "Que figura juridica separa claramente patrimonio de socios y empresa?",
    options: ["Empresa individual", "SA y SL", "Autonomo sin actividad", "Comunidad de vecinos"],
    answer: 1
  },
  {
    question: "En la SA, la propiedad de la empresa se representa mediante:",
    options: ["Participaciones", "Acciones", "Recibos", "Facturas"],
    answer: 1
  },
  {
    question: "La SL suele encajar mejor en:",
    options: ["Micro y pymes con socios estables", "Solo empresas publicas", "Solo multinacionales", "Asociaciones deportivas"],
    answer: 0
  },
  {
    question: "Que forma tiene responsabilidad ilimitada?",
    options: ["Sociedad anonima", "Sociedad limitada", "Empresa individual", "Sociedad laboral"],
    answer: 2
  },
  {
    question: "El emprendedor de responsabilidad limitada protege sobre todo:",
    options: ["Maquinaria", "La vivienda habitual", "La caja diaria", "Las acciones cotizadas"],
    answer: 1
  },
  {
    question: "La SL Nueva Empresa se caracteriza por:",
    options: ["Tramites de constitucion simplificados", "Cotizar obligatoriamente en bolsa", "No tener socios", "No pagar impuestos"],
    answer: 0
  },
  {
    question: "Una cooperativa se fundamenta en:",
    options: ["Inversion especulativa", "Objetivo comun y colaboracion", "Un unico administrador obligatorio", "Vender acciones en bolsa"],
    answer: 1
  },
  {
    question: "En una sociedad laboral, la idea principal es:",
    options: ["No tener trabajadores", "Separar por completo trabajo y propiedad", "Integrar participacion laboral de socios", "Evitar cualquier gestion"],
    answer: 2
  },
  {
    question: "Que impuesto se asocia de forma general a las sociedades mercantiles?",
    options: ["IRPF", "Impuesto sobre Sociedades", "IBI", "Tasas universitarias"],
    answer: 1
  },
  {
    question: "Que impuesto se asocia a la empresa individual segun el repaso?",
    options: ["Impuesto sobre Sociedades", "IRPF", "Impuesto de sucesiones", "IAE exclusivamente"],
    answer: 1
  },
  {
    question: "En la SL, la entrada de terceros suele ser mas controlada porque:",
    options: ["No existen socios", "No hay capital", "Las participaciones no se transmiten libremente", "Depende del ayuntamiento"],
    answer: 2
  },
  {
    question: "Que forma es mas habitual para grandes proyectos con mucha captacion de capital?",
    options: ["SA", "Empresa individual", "Cooperativa de consumo pequena", "Autonomo eventual"],
    answer: 0
  },
  {
    question: "Personalidad juridica propia significa que la sociedad:",
    options: ["No puede firmar contratos", "Es distinta legalmente de sus socios", "No paga impuestos", "No responde de deudas"],
    answer: 1
  },
  {
    question: "Que combinacion es correcta?",
    options: ["SA-participaciones / SL-acciones", "SA-acciones / SL-participaciones", "SA-cuotas / SL-facturas", "SA-bonos / SL-tickets"],
    answer: 1
  },
  {
    question: "Una ventaja clave de la responsabilidad limitada es:",
    options: ["Eliminar todos los riesgos", "Limitar la perdida al capital aportado", "No llevar contabilidad", "No pagar ningun tributo"],
    answer: 1
  },
  {
    question: "SLL y SAL se diferencian principalmente por:",
    options: ["Una deriva de SL y otra de SA", "Una no tiene socios", "Las dos son cooperativas", "Solo cambian por provincia"],
    answer: 0
  },
  {
    question: "Que opcion resume mejor la cooperativa?",
    options: ["Prioriza beneficio de un unico inversor", "No tiene actividad economica", "Proyecto comun con gestion participativa", "Solo existe en agricultura"],
    answer: 2
  },
  {
    question: "Ademas de la forma juridica, para elegir empresa conviene valorar:",
    options: ["Responsabilidad, fiscalidad y tramites", "Solo el nombre comercial", "Solo el logo", "Unicamente la oficina"],
    answer: 0
  },
  {
    question: "La empresa individual suele iniciar actividad con:",
    options: ["Constitucion societaria compleja siempre", "Menos formalidades iniciales", "Obligacion de accionistas", "Cotizacion bursatil"],
    answer: 1
  },
  {
    question: "Que frase es correcta sobre deudas en SA/SL?",
    options: ["Socios responden con todo su patrimonio siempre", "La responsabilidad suele limitarse al capital aportado", "No existen deudas posibles", "Responde el Estado"],
    answer: 1
  },
  {
    question: "En terminos fiscales, SA y SL comparten normalmente:",
    options: ["IRPF", "Impuesto sobre Sociedades", "Ningun impuesto", "Solo IVA"],
    answer: 1
  },
  {
    question: "Que es mas transferible en general?",
    options: ["Acciones de SA", "Participaciones de SL sin restricciones", "Ninguna forma de capital", "Las nominas"],
    answer: 0
  },
  {
    question: "El test de esta web evalua principalmente:",
    options: ["Diseno grafico", "Tipos de empresa y caracteristicas", "Programacion avanzada", "Historia economica mundial"],
    answer: 1
  },
  {
    question: "Para practicar mejor antes del examen, lo mas util es:",
    options: ["Hacer una vez el test y ya", "Alternar resumenes y varias tandas de test", "Memorizar solo siglas", "Ignorar feedback"],
    answer: 1
  },
  {
    question: "Que afirmacion es correcta sobre impuestos en el repaso?",
    options: ["Solo existe IRPF para cualquier empresa", "No hay diferencias fiscales", "La forma juridica influye en si tributas por IRPF o Sociedades", "Nunca se paga IVA"],
    answer: 2
  },
  {
    question: "Que tipo de empresa prioriza de forma clara la colaboracion entre socios?",
    options: ["Cooperativa", "SA cotizada", "Empresa individual", "SL unipersonal"],
    answer: 0
  },
  {
    question: "Cuando una SL es unipersonal significa que:",
    options: ["Tiene un solo trabajador", "Tiene un unico socio", "No tiene capital", "Es publica"],
    answer: 1
  },
  {
    question: "Que opcion NO corresponde a sociedades de capital en este tema?",
    options: ["SA", "SL", "SL Nueva Empresa", "Empresa individual"],
    answer: 3
  },
  {
    question: "Una diferencia habitual entre autonomo y sociedad es:",
    options: ["La existencia de personalidad juridica separada", "El uso de facturas", "La necesidad de clientes", "La actividad economica"],
    answer: 0
  },
  {
    question: "Si buscas proteger patrimonio personal frente a deudas del negocio, suele convenir:",
    options: ["Responsabilidad limitada", "Responsabilidad ilimitada", "No inscribirte en nada", "No llevar cuentas"],
    answer: 0
  },
  {
    question: "Que resumen es correcto sobre SAL?",
    options: ["Es una cooperativa obligatoriamente", "Es una modalidad laboral de la SA", "Es otra forma de empresa individual", "No tiene socios"],
    answer: 1
  },
  {
    question: "En la practica, las obligaciones fiscales pueden incluir tambien:",
    options: ["IVA y tributos locales, segun actividad", "Solo IRPF siempre", "Solo Impuesto sobre Sociedades siempre", "Ninguna obligacion"],
    answer: 0
  },
  {
    question: "El capital en una SL se divide en:",
    options: ["Acciones", "Participaciones", "Obligaciones del Estado", "Cupones"],
    answer: 1
  },
  {
    question: "El capital en una SA se divide en:",
    options: ["Participaciones", "Acciones", "Cuotas sindicales", "Prestamos bancarios"],
    answer: 1
  },
  {
    question: "Que aspecto fiscal cambia al pasar de empresa individual a SL?",
    options: ["De IRPF a Impuesto sobre Sociedades", "De IVA a IBI", "De IAE a IRNR", "No cambia nunca"],
    answer: 0
  },
  {
    question: "La frase 'misma persona legal negocio-propietario' describe a:",
    options: ["SA", "SL", "Empresa individual", "SAL"],
    answer: 2
  },
  {
    question: "Para consolidar conocimientos en esta web conviene:",
    options: ["Ignorar preguntas falladas", "Repetir test hasta dominar cada bloque", "Hacer solo preguntas de siglas", "No leer resumenes"],
    answer: 1
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
  quiz = pickRandomQuestions(15);
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
