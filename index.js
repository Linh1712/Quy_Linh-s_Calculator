const total = document.getElementById('total');
let v1;
let v2;
let op;
let haveDot = false;
let haveResult = false;
let result;

let v1Arr;
let v1zero = '';
let v1zl;
let v2Arr;
let v2zero = '';
let v2zl;

function onEnable(){
  const disable = document.querySelectorAll(".disabled");
  disable.forEach(button=>{
  button.disabled = false;
  })
  const cancel = document.querySelector('.cancel');
  cancel.disabled = false;
}
function onDisable(){
  const disable = document.querySelectorAll(".disabled");
  disable.forEach(button=>{
  button.disabled = true;
  })
}

function cancel(){
  if(v1<0 && !op && !v2){
  const cancel = document.querySelector('.cancel');
  cancel.disabled = true;
  }
}
function zero(){
  if(total.innerText !== "Cannot divide by zero") return;
  clearAll();
}

function addNum(num) {
  if(num == "." && !haveDot){
    haveDot = true;
  }else if(num == "." && haveDot){
    // console.log("decimal");
    return;
  }
  zero();
  total.innerText += num;
  if (total.innerText !== null && !op){
    v1 = parseFloat(total.innerText);
    // console.log("Value v1: ", v1);
  } else if(total.innerText.lastIndexOf(op) != -1 && op) {
    v2 = parseFloat(total.innerText.slice(total.innerText.lastIndexOf(op) + 1));
    // console.log("Value v2: ", v2);
  } else if(haveResult && !op){
    v1 = parseFloat(total.innerText);
  }
}
function addSp(sp) {
  if (op && total.innerText.lastIndexOf(op) !== -1) return;
  if (v1 == null && !op && total.innerText.lastIndexOf("-") + 1 == total.innerText.length){
    v1 = 0;
    op = undefined;
    total.innerText += 0;
  }
  if (!op && v1 != null){
    op = sp;
    total.innerText += op;
    haveDot = false;
  }
  if(v1<0){
    const cancel = document.querySelector('.cancel');
    cancel.disabled = false;
  }
}
function clearAll(){

  v1 = undefined;
  v2 = undefined;
  op = undefined;
  haveDot = false;
  haveResult = false;
  result = undefined;
  total.innerText = null;

  v1Arr = undefined;
  v1zero = '';
  v1zl = undefined;
  v2Arr = undefined;
  v2zero = '';
  v2zl = undefined;
  onEnable();
}
function clearEach(){
  if (total.innerText == '') return;
  zero();
  if(total.innerText.lastIndexOf('.') + 1 == total.innerText.length && haveDot || total.innerText.lastIndexOf('.') + 1 != -1 && !haveDot){
    haveDot = false;
  }
  if(total.innerText.lastIndexOf(op) + 1 != total.innerText.length && !op){
    total.innerText = total.innerText.slice(0, -1);
    v1 = parseFloat(total.innerText);
    // console.log("Value v1 Changed: ", v1);
  }else if( total.innerText.lastIndexOf(op) + 1 == total.innerText.length && op) {
    total.innerText = total.innerText.slice(0, -1);
    op = null;
    if(total.innerText.lastIndexOf('.') + 1 != -1 && !haveDot){
      haveDot = true;
    }
    // console.log("Deleted");
  }else if(total.innerText.lastIndexOf(op) + 1 != total.innerText.length && !isNaN(v1) && op){
    total.innerText = total.innerText.slice(0, -1);
    v2 = parseFloat(total.innerText.slice(total.innerText.lastIndexOf(op) + 1));
    // console.log("Value v2 Changed: ", v2);
  }
  cancel();
}

function assign(result){
  // total.innerText = result.toExponential(9);
  total.innerText = result.toString();
  if(total.innerText.lastIndexOf('.') !== -1 && !haveDot) {
    haveDot = true;
  }
  if(total.innerText.lastIndexOf('.') === -1 && haveDot) {
    haveDot = false;
  }
  v1 = result;
  v2 = null;
  op = null;
  // console.log("Equal: ", result);
  cancel();
}

function decimalToFraction(){
  let v1Str = '' + v1;
  v1Arr = v1Str.split(".");
  v1zero = 1;
  if(v1Arr[1]){
    for(i = 1; i <= v1Arr[1].length; i++){
      v1zero += "" + 0;
    }
    v1zl = v1zero.length;
    v1zero = parseFloat(v1zero);
    //console.log("decimal length v1: ", v1zl);
  }

  let v2Str = '' + v2;
  v2Arr = v2Str.split(".");
  v2zero = 1;
  if(v2Arr[1]){
    for(i = 1; i <= v2Arr[1].length; i++){
      v2zero += "" + 0;
    }
    v2zl = v2zero.length;
    v2zero = parseFloat(v2zero);
    //console.log("decimal length v2: ", v2zl);
  }

  if(v1zl >= v2zl && (op == '+' || op == '-' || op == '×')){
    v2zero = v1zero;
  } else{
    v1zero = v2zero;
  }
  
  switch(op){
    case '+':
      result = (v1 * v1zero + v2 * v2zero) / v1zero || (v1 * v1zero + v2 * v2zero) / v2zero;
      // console.log("Add");
      assign(result);
    break;
    case '-':
      result = (v1 * v1zero * (v2zero / v1zero) - v2 * v2zero) / v1zero;
      // console.log("Sub");
      assign(result);
    break;
    case '×':
      result = ((v1 * v1zero) * (v2 * v2zero)) / (v1zero * v2zero) || ((v1 * v1zero) * (v2 * v2zero)) / (v1zero * v2zero);
      // console.log("Multi");
      assign(result);
    break;
    case '÷':
          if(v2 !== 0){
            result = (v1 * v1zero * v2zero) / (v2 * v2zero * v1zero);
            // console.log("Divide");
            assign(result);
            }else if(v2 == 0){
              result = null;
              onDisable();
              haveResult = false;
              total.innerText = "Cannot divide by zero";
              v1 = null;
              v2 = null;
              op = null;
              }
        break;
  }
}

function compute(){
  if(isNaN(v1) || v2 != null || op) return;
  result = v1 / (10 * 10);
  assign(result);
}

function cal(){
  zero();
  if(isNaN(v1) && isNaN(v2) && !op) return;
  if(!isNaN(v1) && !isNaN(v2)){
    // console.log("Compute");
    decimalToFraction();
  }
}