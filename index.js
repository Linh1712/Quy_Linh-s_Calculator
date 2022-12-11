

const total = document.getElementById('total');

function addNum(num) {
  total.innerText = num;
}
function addSp(sp) {
  total.innerText = sp;
}
function clearAll(){
  total.innerHTML = '0';
}
function clearEach(){
  total.innerText = '0';
}