
function display(){
    document.getElementById('f1').innerHTML = document.myform;

}

function hiddenBox(){
    input = document.createElement("input");
    input.setAttribute("type", "text");
    document.body.appendChild(input);
} 

const rate = document.getElementById('rate');

document.addEventListener("DOMContentLoaded", function() {
    rate.style.display = 'none';
  });
