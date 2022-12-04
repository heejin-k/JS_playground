const score = document.querySelector('.score');
const startBtn = document.querySelector('.startBtn');
const gameArea = document.querySelector('.gameArea');
const gameMessage = document.querySelector('.gameMessage');

startBtn.addEventListener('click', start);
gameMessage.addEventListener('click', start);
document.addEventListener('keydown',pressOn);
document.addEventListener('keyup',pressOff);
let keys = {};
let bird = document.createElement('div');
let wing = document.createElement('div');
let player = {
  x:0,
  y:0,
  speed:5
};

function start(){
  console.log('game start');
  gameMessage.classList.add('hide');
  startBtn.classList.add('hide');
  bird.setAttribute('class','bird');
  wing.setAttribute('class','wing');
  wing.pos = 15;
  wing.style.top = wing.pos + 'px'
  bird.appendChild(wing);
  gameArea.appendChild(bird);
  //bird에 left값 
  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;

  //움직임을 매개변수로 넣어준다음 부드럽게 처리해준다
  window.requestAnimationFrame(playGame);
}

function playGame(){
  let move = false;
  if(keys.ArrowLeft && player.x > 0){
    player.x -= player.speed;
    move = true;
  }
  if (keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth){
    player.x += player.speed;
    move = true;

  }
  if((keys.ArrowUp || keys.Space) && player.y > 0){
    player.y -= player.speed * 4 ;
    move = true;

  }
  if (keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight){
    player.y += player.speed;
    move = true;
  }

  if(move){
    wing.pos = wing.pos === 15 ? 25 : 15;
    wing.style.top = wing.pos + 'px';
  }

//중력 구현
  player.y += player.speed * 2;

  bird.style.left = player.x +"px";
  bird.style.top = player.y +"px";

  console.log("game playing");
  window.requestAnimationFrame(playGame);
}

function pressOn(e){
  console.log(e.code);
  keys[e.code] = true;
  console.log(keys);
}

function pressOff(e){
  console.log(e.code);
  keys[e.code] = false;
  console.log(keys);
}