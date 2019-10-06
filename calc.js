const displayText = [];
const op = {
  erand:[],
  erator:[]
}

//capturing all click events 
document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.id);
      if (event.target.id == "clear"){
        while (displayText.length > 0){
          displayText.pop();
        }
        document.getElementById("output").textContent = "";
      }
      else if (event.target.id == 'equals') {
        let result = operate(op.erator[0], parseInt(op.erand[0], 10), parseInt(document.getElementById("output").textContent), 10);
        document.getElementById("output").textContent = result;
        console.log(result);

      }
      else if (event.target.id == "divide" || event.target.id == "multiply" || event.target.id == "subtract" || event.target.id == "addition") {
        compute(event.target.id)
      }
      else {display(event.target.textContent);}
  }
  else{
    return
  }
});


function operate(op,x,y){
  switch(op){
    case "addition": 
    return (x + y);
    case "subtract":
    return (x - y);
    case "multiply":
    return (x * y);
    case "divide":
    if (y == 0){
      return "Nice Try!";
    } else {return x / y;}
    };
}


function display(click){
  displayText.push(click);
  document.getElementById("output").textContent = ""
  const outputs = displayText.forEach(input => document.getElementById("output").textContent += input)
  console.log(displayText);
}

function compute(button){
  //const numOnlyFilter = /[^.0-9]/g;
  //let numOnly = document.getElementById('output').textContent;
  //numOnly = numOnly.split(numOnlyFilter);
  //console.log(numOnly);
  console.log("Yup")
  
  op.erator[0] = button;
  op.erand[0] = document.getElementById("output").textContent;
  while (displayText.length > 0){
    displayText.pop();
  }
  console.log(op)


}