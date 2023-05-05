let charType = ["Warrior", "Mage", "Priest"];
let i = 0;


document.getElementById("ready").onclick = function(name){
   name = document.getElementById("inputID").value;
   console.log(name);
}

window.onload = document.getElementById("nextChar").onclick = function (){
   document.getElementById("className").innerHTML = charType[i];
   i++;
   if(i>=3){
      i=0;
   }
}
window.onload = document.getElementById("prevChar").onclick = function(){
   document.getElementById("className").innerHTML = charType[i]
   if(i<=0){
      i=3;
   }
   i--;
}
var canvas = document.getElementById("pic-cont");
var context = canvas.getContext("2d");
var x = 100;
var y = 500;
context.beginPath();
context.arc(x, y, 50, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();

window.onload = function (){
   var name;
	let btn = document.getElementById("jump"); // meg nem csinaltam meg
	let count = 0;	
   document.getElementById("ready").onclick = function (){
      draw();
      name = document.getElementById("inputID").value;
      document.getElementById("greet").innerHTML = "Greetings " + name;
   }

/* ugras gomb
btn.onclick = function() {
    count += 1;
    //changing the y position
    y -= 25;
    //clearing the canvas
    context.clearRect(0, 0, 600, 400);
     
    //redrawing the circle   
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="blue";
    context.fill();


	}*/
}
var t; // valtozo az idohoz
function draw(){
   //fps szamlalashoz az aktualis ido masodpercben
   let timePassed = (Date.now() - t) / 1000;
   t = Date.now();
   let fps = Math.round(1 / timePassed); 
   //animacio gyorsassagahoz kell megadni sebesseget
   let speed = 100;
   //clearing the canvas
   context.clearRect(0, 0, 400, 600);
   //drawing the FPS
   context.font = '25px Arial';
   context.fillStyle = 'black';
   context.fillText("FPS: " + fps, 20, 30);

   //drawing the count value
   context.font = '25px Arial';
   context.fillStyle = 'white';
   context.fillText("Count: " , 200, 30);

   context.beginPath();
   context.arc(x, y, 50, 0, 2 * Math.PI);
   context.fillStyle="black";
   context.fill();
   //window.requestAnimationFrame - hez kiegeszito sor hogy megfelelo sebessegu legyen az animacio
   x += (speed * timePassed);

   if (x >= 600) {
       x = -100;
   }
   // a gephez egyezteti az animalast
   window.requestAnimationFrame(draw);
}