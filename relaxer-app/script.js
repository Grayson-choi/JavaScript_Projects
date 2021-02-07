const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500; // 단위는 밀리세컨즈
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

console.log(breatheTime, holdTime);

breatheAnimation();

function breatheAnimation() {
  text.innerText= 'Breathe in';
  container.className = 'container grow';

  setTimeout(() =>{
    text.innerText= 'Hold';
    setTimeout(() => {
      text.innerText= 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime)