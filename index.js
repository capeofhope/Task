var userClickedPattern = [];
const buttons = document.getElementsByClassName("grid");
function again(pattern) {
   let counter=0;
   const countInterval=setInterval(changeBlue,1000,counter);
   function changeBlue() {
      document.getElementById(pattern[counter]).style.backgroundColor = "#00407A";
      counter++;
      if(counter>pattern.length-1){
         clearInterval(countInterval);
         userClickedPattern=[];
      }
   }
}
function changeColor(id) {
   document.getElementById(id).style.backgroundColor = "red";
}
const buttonPressed = e => {
   changeColor(e.target.id);
   userClickedPattern.push(e.target.id);
   if (e.target.id == "9") {
      again(userClickedPattern);
   }
}
for (let grid of buttons) {
   grid.addEventListener("click", buttonPressed);
}