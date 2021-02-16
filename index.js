const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// wypełnienie jakimś kolorem
ctx.fillStyle = "green";
ctx.fillRect(100, 50, 150, 75); // fillRect(x,y,width,height)

// rysowanie linii
ctx.moveTo(0, 0);
ctx.lineTo(400, 200);
ctx.stroke();

// rysowanie okręgu
ctx.beginPath();
ctx.arc(200, 100, 100, 0, 2 * Math.PI); // arc(x,y,r,startangle,endangle)
ctx.stroke();

// gradient
const canvas2 = document.querySelector("#canvas2");
const ctx2 = canvas2.getContext("2d");

// tworzenie gradientu
// createLinearGradient(x,y,x1,y1)
let gradient = ctx.createLinearGradient(0, 0, 400, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "black");

// wypełnianie gradientem
ctx2.fillStyle = gradient;
ctx2.fillRect(0, 0, 400, 400);

ctx2.beginPath();
ctx2.arc(200, 200, 200, 0, 2 * Math.PI);
ctx2.stroke();

// createRadialGradient(x,y,r,x1,y1,r1)
let x = 100,
  y = 75,
  innerRadius = 5,
  outerRadius = 70,
  radius = 60;

let radialGradient = ctx2.createRadialGradient(
  x,
  y,
  innerRadius,
  x,
  y,
  outerRadius
);
radialGradient.addColorStop(0, "white");
radialGradient.addColorStop(1, "blue");
ctx2.fillStyle = radialGradient;
ctx2.fillRect(200, 200, 200, 200);
