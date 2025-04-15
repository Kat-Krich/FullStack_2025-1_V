let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//retângulos
ctx.beginPath(); //Abre o desenho atual
ctx.lineWidth = 5; //define a espessura do pincel
ctx.fillStyle = 'lightgreen'; //define a cor de preenchimento
ctx.strokeStyle = 'darkgreen'; //define a cor do pincel
ctx.fillRect(4,4,50,50);
ctx.strokeRect(4,4,50,50);
ctx.closePath(); //Fecha o desenho atual

// linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.moveTo(60,4);
ctx.lineTo(60,55);
ctx.lineTo(100,70);
ctx.lineTo(100,20);
ctx.lineTo(58,4);
ctx.fill();
ctx.stroke();
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(105,20);
ctx.lineTo(105,70);
ctx.lineTo(145,55);
ctx.lineTo(145,4);
ctx.lineTo(103,20);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();

//Exercício 1
let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'red';
ctx2.strokeStyle = 'red';
ctx2.fillRect(2,2,50,50);
ctx2.strokeRect(2,2,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'blue';
ctx2.strokeStyle = 'blue';
ctx2.fillRect(348,2,50,50);
ctx2.strokeRect(348,2,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'yellow';
ctx2.fillRect(2,348,50,50);
ctx2.strokeRect(2,348,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 1;
ctx2.fillStyle = 'green';
ctx2.strokeStyle = 'green';
ctx2.fillRect(348,348,50,50);
ctx2.strokeRect(348,348,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.moveTo(2,2);
ctx2.lineTo(398,398);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(398,2);
ctx2.lineTo(2,398);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,60,2*Math.PI,1*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,60,2*Math.PI,1*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(75,140,20,0*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(325,140,20,0*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = 'black';
ctx2.font = "25px Arial"
ctx2.textAlign = "center";
ctx2.fillText("Desenvolvimento Web",200,75);
ctx2.closePath();

//Exercício 2
let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');

ctx3.beginPath();
ctx3.fillStyle = 'gray';
ctx3.fillRect(0,275,400,125);
ctx3.closePath();

// ctx3.beginPath();
// ctx3.lineWidth = 5;
// ctx3.fillStyle = '#598cfa';
// ctx3.strokeStyle = '#598cfa';
// ctx3.moveTo(0,275);
// ctx3.lineTo(0,400); //1
// ctx3.lineTo(150,400); //2
// ctx3.lineTo(150,337.5); //3
// ctx3.lineTo(75,337.5); //4
// ctx3.fill();
// ctx3.stroke();
// ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.strokeStyle = '#598cfa';
ctx3.arc(140,400,60,1.5*Math.PI,0*Math.PI);
ctx3.stroke();
ctx3.closePath();