const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const cards = document.getElementById('cards');
const startBtn = document.getElementById('start-btn');

let score = 0;

function startGame() {
  for(i = 1; i< 21; i ++){
  
  let card = document.createElement('div');
  card.className = `card ${i}`;
  card.innerHTML =`
    <img src="img/${i}.jpg">
  `;
  cards.appendChild(card);
  
  }
}


// Rules and close event handlers
rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));
startBtn.addEventListener('click', startGame);
