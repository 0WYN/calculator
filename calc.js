let input1 = 5;
let input2 = 5;

document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.id);
  }
  else{
    return
  }
});

function add(input1, input2){
  return input1 + input2;
}

function subtract(input1, input2){
  return input1 - input2;
}

function multiply(input1, input2){
  if (input2 == 0){
    return "Nice Try!";
  } else {return input1 * input2;}
}

function division(input1, input2){
  return input1/input2;
}