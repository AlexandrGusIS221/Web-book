function getInitialGameState() {
  return {
    pixelCount: 0,
    clickPower: 1,
    passiveIncome: 0,
    totalClicks: 0,
    level: 1,
    career: "Junior Frontend Developer",
    upgrades: {},
    technologies: {},
    playTime: 0
  };
}

const gameState = getInitialGameState();

let nodes = {};

function updateUI() {
  if (nodes.pixelCount) nodes.pixelCount.textContent = gameState.pixelCount;
  if (nodes.clickPower) nodes.clickPower.textContent = gameState.clickPower;
  if (nodes.totalClicks) nodes.totalClicks.textContent = gameState.totalClicks;
}

function initClicker() {
  nodes = {
    clickerBtn: document.getElementById('htmlClicker'),
    resetBtn: document.getElementById('resetGame'),
    pixelCount: document.getElementById('pixelCount'),
    clickPower: document.getElementById('clickPower'),
    playTime: document.getElementById('playTime'),
    totalClicks: document.getElementById('totalClicks')
  };

  nodes.clickerBtn?.addEventListener('click', () => {
    gameState.pixelCount += gameState.clickPower;
    gameState.totalClicks++;
    saveGame();
    updateUI();
  });

  nodes.resetBtn?.addEventListener('click', () => {
    if (confirm("Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.")) {
      Object.assign(gameState, getInitialGameState());
      localStorage.removeItem('gameState');
      updateUI();
      alert("Игра сброшена до начального состояния!");
    }
  });
}

function saveGame() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGame() {
  const saved = localStorage.getItem('gameState');
  if (saved) {
    Object.assign(gameState, JSON.parse(saved));
    updateUI();
  }
}

function resetGame() {
  nodes.resetBtn?.click();
}

export { initClicker, loadGame, gameState };