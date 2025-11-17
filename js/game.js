import { initClicker, loadGame } from './clicker.js';

document.addEventListener('DOMContentLoaded', () => {
    loadGame(); // Загружаем сохранение
    initClicker();
    
    // Автосохранение каждые 30 секунд с помощью eventloop macroTask
    setInterval(() => {
        if (typeof saveGame === 'function') saveGame();
    }, 30000);
});

//Смена темы
document.getElementById(`themeToggle`).addEventListener(`click`, function() {
const html = document.documentElement;
    const theme = html.getAttribute(`data-bs-theme`);
    const newTheme = theme === `dark` ? `light` : `dark`;
    
    html.setAttribute(`data-bs-theme`, newTheme);
    localStorage.setItem(`theme`, newTheme);
});

const savedTheme = localStorage.getItem(`theme`) || `light`;
document.documentElement.setAttribute(`data-bs-theme`, savedTheme);

//Скртие сайдбаров
const nodeMainSection = document.getElementById(`content`);

function togglenodeSidebar(nodeSidebarId) {
  
  const nodeSidebar = document.getElementById(nodeSidebarId);
  const isHidden = nodeSidebar.classList.contains(`d-none`);
  
  if (isHidden) {
    nodeSidebar.classList.remove(`d-none`);
    nodeSidebar.classList.add(`d-lg-block`);
  } else {
    nodeSidebar.classList.add(`d-none`);
    nodeSidebar.classList.remove(`d-lg-block`);
  }
  
  const visiblenodeSidebars = document.querySelectorAll(`aside:not(.d-none)`).length;
  console.log(visiblenodeSidebars);
  
  if (visiblenodeSidebars === 1) {
    nodeMainSection.classList.remove(`col-lg-5`, `col-lg-12`);
    nodeMainSection.classList.add(`col-lg-9`);
  } else if (visiblenodeSidebars === 0) {
    nodeMainSection.classList.remove(`col-lg-5`);
    nodeMainSection.classList.add(`col-lg-12`);
  } else {
    nodeMainSection.classList.remove(`col-lg-9`, `col-lg-12`);
    nodeMainSection.classList.add(`col-lg-5`);
  }
}