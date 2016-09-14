var output = document.getElementById("arrow");

function randomNumber(){
  var randomNumber = Math.floor( Math.random() * 10 ) + 1; 
    if (randomNumber <= 5){
    output.innerHTML = `<div><img src="left-arrow.jpeg"></div>`;
  } 
  else {
    output.innerHTML = `<div><img src="right-arrow.jpeg"></div>`;
  }
};
document.addEventListener("click", randomNumber);