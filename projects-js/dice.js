var count1=1;
var a=0;
var b=0;

const getNameOfPlayer = (playerNo) => {
  player = ''
  player = prompt('Enter the name of '+playerNo, playerNo);
  while(player == '' || player == null)
    player = prompt('Enter a valid name for '+playerNo, playerNo);
  return player
}
var player1 = getNameOfPlayer('Player 1');
var player2 = getNameOfPlayer('Player 2');
$('span.player-1').html(player1);
$('p.player-1').html(player1);
$('span.player-2').html(player2);
$('p.player-2').html(player2);


var crowd = new Audio();
crowd.src="project-assets/dice/audio/crowd.mp3";


const disable1 = () => {
    if(count1<6){
        roll1();
        sound.play();
        score1();
        count1++;
    }
    else{
        $(".roll1").prop('disabled', true);
    }
    
}
var count2=1;
const disable2 = () => {
    if(count2<6){
        roll2();
        score();
        sound.play();
        score2();
        count2++;
    }
    if(count1==6 && count2==6)
        open();
    else{
        $(".roll2").prop('disabled', true);
    }
    
}
  const editNames = () => { 
    player1 = getNameOfPlayer('Player 1'); 
    player2 = getNameOfPlayer('Player 2'); 
    $("p.player-1").html(player1);
    $("p.player-2").html(player2);
    $("span.player-1").html(player1); 
    $("span.player-2").html(player2); 
}

const cube = $('#cube');
const cube1 = $('#cube1');

const min = 1;
const max = 20;
var sound = new Audio();
sound.src="project-assets/dice/audio/roll.mp3";
const Reset = () => {
    sound.play();
    cube.css('transform', 'rotateX('+0+'deg) rotateY('+0+'deg)');
    cube1.css('transform', 'rotateX('+0+'deg) rotateY('+0+'deg)');
}


var rand1 = Math.round(Math.random()*5) + 1;
var rand2 = Math.round(Math.random()*5) + 1;


const roll1 = () => {
  var x = getRandom(max, min);
  var y = getRandom(max, min);
  rand1 = Math.round(Math.random()*5) + 1;
cube.css('transform', 'rotateX('+0+'deg) rotateY('+360+'deg)');
 a=a+rand1;
if(rand1==1){
  cube.css('transform', 'rotateX('+0+'deg) rotateY('+360+'deg)');
}
if(rand1==2){
  cube.css('transform', 'rotateX('+360+'deg) rotateY('+-90+'deg)');
}
if(rand1==3){
  cube.css('transform', 'rotateX('+180+'deg) rotateY('+720+'deg)');
}
if(rand1==4){
  cube.css('transform', 'rotateX('+720+'deg) rotateY('+90+'deg)');
}
if(rand1==5){
  cube.css('transform', 'rotateX('+270+'deg) rotateY('+720+'deg)');
}
if(rand1==6){
  cube.css('transform', 'rotateX('+90+'deg) rotateY('+720+'deg)');
}
}
const roll2 = () => {
    const x = getRandom(max, min);
    const y = getRandom(max, min);
    rand2 = Math.round(Math.random()*5) + 1;
    b=rand2+b;
    if(rand2==1){
    cube1.css('transform', 'rotateX('+0+'deg) rotateY('+360+'deg)');
    }
    if(rand2==2){
    cube1.css('transform', 'rotateX('+360+'deg) rotateY('+-90+'deg)');
    }
    if(rand2==3){
    cube1.css('transform', 'rotateX('+180+'deg) rotateY('+720+'deg)');
    }
    if(rand2==4){
    cube1.css('transform', 'rotateX('+720+'deg) rotateY('+90+'deg)');
    }
    if(rand2==5){
    cube1.css('transform', 'rotateX('+270+'deg) rotateY('+720+'deg)');
    }
    if(rand2==6){
    cube1.css('transform', 'rotateX('+90+'deg) rotateY('+720+'deg)');
    }
}
var sc= document.getElementById('scorebox');
const score = () => {
    sc.style.opacity=1;
}
const score_down = () => {
    sc.style.opacity=0;
}


var modal = $('#resultboard');

 const open = () => {
  crowd.play();
  modal.modal('toggle');
  if(a>b){
    $("#player-won").html(player1);
    $("#result-score").html(a);
    $("#result").html('Won');

    }
    if(b>a){
        $("#player-won").html(player2);
        $("#result-score").html(b);
        $("#result").html('Won');
    }
    if(a==b){
    $("#player-won").html('');
    $("#result").html('Draw');
    $("#result-score").html(b);
    }
}

const restart = () => {
  a=0;
  b=0;
  $("#player-1-score").html(a);
  $("#player-2-score").html(b);
  Reset();
  rand1=0;
  rand2=0;
  count1=0;
  count2=0;
  crowd.pause();
}

const score1 = () => {
    $("#player-1-score").html(a);
}

const score2 = () => {
    $("#player-2-score").html(b);
}

const getRandom = (max, min) => {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}