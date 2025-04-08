// // a variavael carro é a representação do meu objeto. As variaveis: cor, modelo e marca são variaveis dentro da variavel carro, ou seja, pertencem a varial carro
// let carro = {
//     cor: 'green',
//     modelo: 'SUV',
//     marca: 'Toyota',
//     buzina: function() {
//         return 'bii bii';
//     }
// };

// let carro2 = {
//     cor: 'black',
//     modelo: 'SUV',
//     marca: 'Ford',
//     buzina: function() {
//         return 'fom fom';
//     }
// }

// // console.log(carro);
// // console.log(carro.cor)

// // console.log(carro.buzina())
// // console.log(carro2.buzina())

// // alert(carro.buzina())
// // alert(carro2.buzina())


class carro { //ferramenta que nós vamos utilizar para criar nossos objetos
    constructor(cor, modelo, marca) {
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina() {
        return 'bii bii'
    }
    
}

let carro1 = new carro('green','SUV','Toyota');
console.log(carro1);

let carro2 = new carro('black','SUV','Ford')
// carro1.cor = 'black';
// console.log(carro1);

let carros = [] //criei uma lista vazia
carros.push(carro1); //adicionei carro na lista
carros.push(carro2); // adicionei carro2 na lista
for(let i=0; i < carros.length; i++) { // carros.length -> passa por toda a lista e i++ para passar por todos os elemntos
    console.log(carros[i].buzina());
}

class retangulo {
    constructor (cor_linha,cor_fill,espessura_linha,x,y,zx,zy){
        this.cor_linha = cor_linha;
        this.cor_fill = cor_fill;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.zx = zx;
        this.zy = zy;
    }
    desenhe(contexto) {
        contexto.beginPath(); //Abre o desenho atual
        contexto.lineWidth = this.espessura_linha; //define a espessura do pincel
        contexto.fillStyle = this.cor_fill; //define a cor de preenchimento
        contexto.strokeStyle = this.cor_linha; //define a cor do pincel
        contexto.fillRect(this.x,this.y,this.zx,this.zy);
        contexto.strokeRect(this.x,this.y,this.zx,this.zy);
        contexto.closePath(); //Fecha o desenho atual
    }
}

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

let retangulo_1 = new retangulo('blue','red', 3, 0, 0, 20, 20);
let retangulo_2 = new retangulo('red','orange', 3, 200, 200, 20, 20)
let retangulo_3 = new retangulo('yellow','green', 3, 200, 200, 20, 20)

// retangulo_1.desenhe(ctx1)
// // retangulo_1.x = 100;
// // retangulo_1.desenhe(ctx1)

const tecla_pressionada = {}

function animation(){
    if(retangulo_1.x == 400){
        retangulo_1.x = 0;
    }
    retangulo_1.x += 1;

    ctx1.clearRect(0,0,400,400);

    retangulo_1.desenhe(ctx1);
    retangulo_2.desenhe(ctx1);
    retangulo_3.desenhe(ctx1)


    requestAnimationFrame(animation)
}

animation()


document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 5;
    if(tecla == 'W' || tecla =='w'){retangulo_2.y -= velocidade};
    if(tecla == 'E' || tecla == 'e'){retangulo_2.x += velocidade; retangulo_2.y -= velocidade};
    if(tecla == 'Q' || tecla == 'q'){retangulo_2.x -= velocidade; retangulo_2.y -= velocidade};
    if(tecla == 'S' || tecla =='s'){retangulo_2.y += velocidade};
    if(tecla == 'A' || tecla =='a'){retangulo_2.x -= velocidade};
    if(tecla == 'D' || tecla =='d'){retangulo_2.x += velocidade};
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    // console.log(x_mouse,y_mouse);

    retangulo_3.x = x_mouse;
    retangulo_3.y = y_mouse
})