const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const startBtn = document.getElementById('start-btn');
const card = document.getElementsByName('card');
const hintBtn = document.getElementById('hint-btn');
let cnt = 0;
let selectedId = "";

function startGame() {
  makeCards()
}



function makeCards() {
  cardList = [];
  for(j = 0; j < 2; j++){
    for(i = 1; i< 11; i ++){
      let card = document.createElement('div');
      card.className = `card`;
      card.id = `${i}`;
      
      card.addEventListener('click', clickCard);
      cardList.push(card);
    }
  }

  // 랜덤 함수로 시작
  cardList.sort(function(){
    return Math.random() - Math.random();
  })

  for (i = 0; i < cardList.length; i++) {
    cards.appendChild(cardList[i]);  
  }

}



function clickCard() {
  console.log("cnt", cnt);
  console.log(selectedId);
  this.classList.toggle('clicked');
  this.classList.toggle('opened');
  console.log(this.className);
  console.log(this.id);
  
  if (this.classList.contains('opened')){
    this.innerHTML =`
    <img src="img/${this.id}.jpg">
  `;
  } else {
    this.innerHTML = ""
  }
  if (selectedId){
    // 정답을 맞췄을 때
    if (this.id == selectedId ){
      console.log("right");
      setTimeout(function() {
        selectedEl = document.querySelectorAll(".clicked");
        console.log(selectedEl);
        for (let i = 0; i < selectedEl.length; i++){
          selectedEl[i].classList.replace("clicked", "correct")
        }
        selectedId = "";
      }, 500);
      cards = document.querySelectorAll(".correct");
      console.log("cards", cards);
      
      cnt += 1;
      if (cards.length >= 18){
        document.body.innerHTML = `
        <h2>축하합니다. 게임을 성공하셨습니다.<br><br>
        ${cnt}번 만에 성공하셨습니다.
        </h2>
        <button id="start-btn" class="btn">Play-again</button>
        `
        const startBtn = document.getElementById('start-btn');
        startBtn.addEventListener('click', startGame);
      }
        } else if(this.id != selectedId){
          console.log("wrong");
          setTimeout(function() {
          selectedEl = document.querySelectorAll(".clicked");
          console.log(selectedEl);
          for (let i = 0; i < selectedEl.length; i++){
            selectedEl[i].classList.remove("clicked");
            selectedEl[i].classList.remove("opened");
            selectedEl[i].innerHTML = "";
          }
        selectedId = "";
      }, 700);
        cnt += 1;
      } 
  } else {
    selectedId = this.id
  }
}


function resetGame() {
  window.location.reload();
}

function hintGame(){
  console.log("hint Game");
  closeCards = document.querySelectorAll(".card");
  
  for (let i = 0; i < closeCards.length; i++){
    if(!(closeCards[i].classList.contains("correct"))){
      let cardId = closeCards[i].getAttribute("id")
      closeCards[i].innerHTML =`
      <img src="img/${cardId}.jpg">
    `;
    }setTimeout(function() {
      if(!(closeCards[i].classList.contains("correct"))){
        let cardId = closeCards[i].getAttribute("id")
        closeCards[i].innerHTML = '';
      }
      console.log('Works!');
    }, 1000);
  }
}


// Rules and close event handlers
rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));
startBtn.addEventListener('click', resetGame);
hintBtn.addEventListener('click', hintGame);