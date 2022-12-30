function changeBtnName()  {
  const btnElement = document.getElementById('btn');
  if(btnElement.innerText=='복주머니를 30초 안에 많이 누르신 분께 선물을 드립니다! 참여를 원하시면 캡처해서 보내주세요~'){
    btnElement.innerText = '타이머 종료 후 3초 뒤 \n 결과창이 나옵니다.';
  }else{
    btnElement.innerText = '복주머니를 30초 안에 많이 누르신 분께 선물을 드립니다! 참여를 원하시면 캡처해서 보내주세요~';
  }
}