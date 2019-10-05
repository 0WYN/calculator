const inputs = [];


document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.id);
      if (event.target.id == "clear"){
        while (inputs.length > 0){
          inputs.pop();
        }
        document.getElementById("output").textContent = "";
      }
      else if (event.target.id == 'equals') {
        compute(inputs);
      }
      else {interaction(event.target.textContent);}
  }
  else{
    return
  }
});


function operate(op,x,y){
  switch(op){
    case "+": 
    return (x + y);
    case "-":
    return (x - y);
    case "*":
    return (x * y);
    case "/":
    if (y == 0){
      return "Nice Try!";
    } else {return x / y;}
    };
}


function interaction(click){
  inputs.push(click);
  document.getElementById("output").textContent = ""
  const outputs = inputs.forEach(input => document.getElementById("output").textContent += input)
  console.log(inputs);
}

function compute(){
  const numOnlyFilter = /[^.0-9]/g;
  let numOnly = document.getElementById('output').textContent;
  numOnly = numOnly.split(numOnlyFilter);

  console.log(numOnly);

}