[1. What's This Project?](#whats-this-project) 

[2. Description](#description) 

[3. Computer Solves With Decimal Numbers](#computer-solves-with-decimal-numbers) 

[4. How Do I Learn From This Project?](#how-do-i-learn-from-this-project) 

[5. How Can I Download It and Run It?](#how-can-i-download-it-and-run-it) 

## What's This Project? 
This is a simple calculator 

<img width="479" alt="Calculator" src="https://user-images.githubusercontent.com/70519719/233621876-bf2ffa34-0fa7-4b6f-bdcd-63cf4efea388.png"/>

## Description 
It can help you solve simple calculations 

<img src="https://user-images.githubusercontent.com/70519719/233623489-4b1066a6-79a2-43c2-b00d-f3a0f47fd7a6.png" width="25"/> [Preview here](https://linh1712.github.io/Quy_Linh-s_Calculator/) 
## Computer Solves With Decimal Numbers 
### Problems 
+ You can try ```0.1 + 0.2``` in javascript 

<img src="https://user-images.githubusercontent.com/70519719/233602739-25b6b10e-6ee8-4d1f-a692-34ebf16d6537.gif" width="300"/>

### Solutions 
+ Examples: 
  + ```0.1 + 0.2``` 
$${0.1 \times 10 + 0.2 \times 10 \over 10} = 0.3$$ 
  + ```0.1 + 0.02``` 
$${0.1 \times 100 + 0.02 \times 100 \over 100} = 0.12$$ 
### Algorithms 
<details>

<summary>Collapses</summary>

```js
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

  if(v1zl >= v2zl && op == '+'){
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
    }
}
``` 

</details>

> Note: This is a **temporary workaround** 
## How Do I Learn From This Project? 
+ You can also uncommand or add more ```console.log``` 
```js 
// console.log(...)

console.log(...)
```
in index.js file to see how's functions works 
+ Right Click => Inspect => Console in browser 
## How Can I Download It and Run It? 
+ You need [Git](https://git-scm.com/downloads) installed 
+ You can check if you have git downloaded 
```git
git
```

<img src="https://user-images.githubusercontent.com/70519719/233582380-335723a5-9e5f-48d0-b651-63a337ff0bc3.gif" width="500"/>

+ Download Calculator from github 
```git
git clone https://github.com/Linh1712/Quy_Linh-s_Calculator.git
```
+ Open index.html in browser 
```C:/To/Your/Path/index.html```
+ Example: ```C:/Users/user/Documents/Cal/index.html```