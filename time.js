const
  Timer = document.getElementById('Timer'); //스코어 기록창-분
  startBtn = document.querySelector('onebtn');
let time = 30000;
let min = 0;
let sec = 30;


Timer.value = min + ":" + '00';

function TIMER() {
  PlAYTIME = setInterval(function () {
    time = time - 1000; //1초씩 줄어듦
    min = time / (60 * 1000); //초를 분으로 나눠준다.

    if (sec > 0) { //sec=60 에서 1씩 빼서 출력해준다.
      sec = sec - 1;
      Timer.value = Math.floor(min) + ':' + sec; //실수로 계산되기 때문에 소숫점 아래를 버리고 출력해준다.

    }
    if (sec === 0) {
      // 0에서 -1을 하면 -59가 출력된다.
      // 그래서 0이 되면 바로 sec을 60으로 돌려주고 value에는 0을 출력하도록 해준다.
      sec = 30;
      Timer.value = Math.floor(min) + ':' + '00'
    }

  }, 1000); //1초마다 
}


TIMER();
setTimeout(function () {
  clearInterval(PlAYTIME);
}, 30000);//3분이 되면 타이머를 삭제한다.

setTimeout(function(){
  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}, 30000);

function startButton() {
  TIMER();
  min = setInterval(TIMER, 1000);
  Timer.classList.add('')
}