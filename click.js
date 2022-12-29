function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }
  
  // 결과 출력
  resultElement.innerText = number;
}
Array.from(document.querySelectorAll(".material-ripple")).forEach(a => {
  a.addEventListener("click", function (e) {
      const ripple = document.createElement("div"),
          rect = a.getBoundingClientRect();
      ripple.className = "animate",
      ripple.style.left = `${e.x - rect.left}px`,
      ripple.style.top = `${e.y - rect.top}px`,
      ripple.style.background = `#${a.dataset.color !== undefined ? a.dataset.color : "735beb"}`,
      ripple.style.setProperty("--material-scale", a.offsetWidth),
      a.append(ripple),
      setTimeout(function () {
          ripple.parentNode.removeChild(ripple)
      }, 500)
  })
})