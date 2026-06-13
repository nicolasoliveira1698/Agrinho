// =====================================================
// CONFIGURAÇÕES
// =====================================================

let currentLanguage = "pt";
let currentFontSize = 100;

// =====================================================
// TEXTOS DINÂMICOS
// =====================================================

const translations = {

  pt: {
    chooseTool: "⚠️ Escolha uma ferramenta primeiro.",
    victory: "🏆 Fazenda totalmente recuperada!",
    defeat: "❌ O tempo acabou.",
    recovered: "Área Recuperada",
    time: "Tempo"
  },

  en: {
    chooseTool: "⚠️ Choose a tool first.",
    victory: "🏆 Farm fully recovered!",
    defeat: "❌ Time is over.",
    recovered: "Recovered Area",
    time: "Time"
  }

};

// =====================================================
// LOADING
// =====================================================

window.addEventListener("load", () => {

  setTimeout(() => {

    const loading = document.getElementById("loading-screen");
    const welcome = document.getElementById("welcome-screen");

    if (loading) {

      loading.style.opacity = "0";

      setTimeout(() => {

        loading.style.display = "none";

        if (welcome) {
          welcome.style.display = "flex";
        }

      }, 500);

    }

  }, 2500);

});

// =====================================================
// ENTRAR
// =====================================================

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {

  enterBtn.addEventListener("click", () => {

    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    initializeAnimations();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

// =====================================================
// ANIMAÇÕES
// =====================================================

function initializeAnimations() {

  const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    }, {
      threshold: 0.15
    });

  document.querySelectorAll(".fade-up").forEach(item => {
      observer.observe(item);
    });

}

// =====================================================
// CONTADORES
// =====================================================

function animateCounter(counter) {

  const target = Number(counter.dataset.target);
  let current = 0;
  const increment = target / 100;

  function update() {

    current += increment;

    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      counter.textContent = target;
    }

  }

  update();

}

function initializeCounters() {

  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }

      });

    });

  counters.forEach(counter => {
    observer.observe(counter);
  });

}

// =====================================================
// TRADUÇÃO
// =====================================================

const translateBtn = document.getElementById("translateBtn");

function translatePage() {

  document.querySelectorAll("[data-pt]").forEach(element => {

      element.innerHTML =
        currentLanguage === "pt"
        ? element.dataset.pt
        : element.dataset.en;

    });

  updateGameTexts();

}

if (translateBtn) {

  translateBtn.addEventListener("click", () => {

    currentLanguage =
      currentLanguage === "pt"
      ? "en"
      : "pt";

    translatePage();

    translateBtn.textContent =
      currentLanguage === "pt"
      ? "🇧🇷 PT | 🇺🇸 EN"
      : "🇺🇸 EN | 🇧🇷 PT";

  });

}

// =====================================================
// ACESSIBILIDADE
// =====================================================

document.getElementById("increaseText")?.addEventListener("click", () => {

  if(currentFontSize < 140){
    currentFontSize += 10;
    document.body.style.fontSize = currentFontSize + "%";
  }

});

document.getElementById("decreaseText")?.addEventListener("click", () => {

  if(currentFontSize > 80){
    currentFontSize -= 10;
    document.body.style.fontSize = currentFontSize + "%";
  }

});

document.getElementById("contrastBtn")?.addEventListener("click", () => {

  document.body.classList.toggle("high-contrast");

});

// =====================================================
// MINIGAME
// =====================================================

const grid = document.getElementById("gameGrid");
const progressText = document.getElementById("progressText");
const timerDisplay = document.getElementById("timerDisplay");
const gameMessage = document.getElementById("gameMessage");
const actionButtons = document.querySelectorAll(".action-btn");

let selectedTool = null;
let recoveredTiles = 0;
let timer = 60;
let gameEnded = false;
let timerInterval;

const TOTAL_TILES = 25;

// selecionar ferramenta

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    actionButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedTool = button.dataset.action;

  });

});

// atualizar textos

function updateGameTexts() {

  if(timerDisplay){
    timerDisplay.textContent = `${translations[currentLanguage].time}: ${timer}s`;
  }

}

// criar fazenda

function createFarm() {

  if(!grid) return;

  grid.innerHTML = "";
  recoveredTiles = 0;
  gameEnded = false;

  updateProgress();
  gameMessage.textContent = "";

  for(let i = 0; i < TOTAL_TILES; i++){

    const tile = document.createElement("div");

    tile.classList.add("tile");
    tile.dataset.state = "dry";
    tile.style.background = "#5b4636";

    tile.addEventListener("click", () => {

      if(gameEnded) return;

      if(!selectedTool){
        gameMessage.textContent = translations[currentLanguage].chooseTool;
        return;
      }

      if(tile.dataset.state === "recovered") return;

      recoverTile(tile);

    });

    grid.appendChild(tile);

  }

  startTimer();

}

function recoverTile(tile){

  tile.dataset.state = "recovered";
  tile.style.background = "linear-gradient(135deg,#5dbd5d,#3d8c3d)";

  if(selectedTool === "fertilizer") tile.innerHTML = "🌱";
  if(selectedTool === "water") tile.innerHTML = "💧";
  if(selectedTool === "ladybug") tile.innerHTML = "🐞";

  recoveredTiles++;
  updateProgress();

  if(recoveredTiles >= TOTAL_TILES){
    victory();
  }

}

function updateProgress(){
  progressText.textContent = `${recoveredTiles}/${TOTAL_TILES}`;
}

function victory(){

  gameEnded = true;
  clearInterval(timerInterval);

  gameMessage.style.color = "#7ee27e";
  gameMessage.textContent = translations[currentLanguage].victory;

}

function defeat(){

  gameEnded = true;
  gameMessage.style.color = "#ff6f6f";
  gameMessage.textContent = translations[currentLanguage].defeat;

}

function startTimer(){

  clearInterval(timerInterval);
  timer = 60;
  updateGameTexts();

  timerInterval = setInterval(() => {

    if(gameEnded){
      clearInterval(timerInterval);
      return;
    }

    timer--;
    updateGameTexts();

    if(timer <= 0){
      clearInterval(timerInterval);
      defeat();
    }

  }, 1000);

}

// =====================================================
// INICIALIZAÇÃO
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    initializeCounters();
    createFarm();
  }
);