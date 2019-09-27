let x = 0;
let y = 0;

document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.id);
  }
  else{
    return
  }
});

function add(x, y){
  return x + y;
}

function subtract(x, y){
  return x - y;
}

function multiply(x, y){
  if (y == 0){
    return "Nice Try!";
  } else {return x * y;}
}

function divide(x, y){
  return x/y;
}

function operate(op,y,z){
  switch(op){
    case 0: 
    return add(y,z);
    case 1:
    return subtract(y,z);
    case 2:
    return multiply(y,z);
    case 3:
    return divide(y,z);
  }
}