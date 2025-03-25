let p1 = document.getElementById('p1').innerHTML;
console.log(p1);

document.getElementById('p1').innerHTML = "Olá Mundo!";

//Exemplo 1
//let nome = prompt("Qual o seu nome?");
//let idade = prompt("Qual a sua idade?");
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;

//let resposta =
//    "Olá" + nome + ", seu ano de nascimento é " + ano_nascimento + " !";
//document.getElementById('ex1').innerHTML = resposta;

//Exemplo de função
function imprimeMensagem(msg) {
    console.log('msg');
}
imprimeMensagem('mensagem 1');
imprimeMensagem('mensagem 2');
imprimeMensagem('mensagem 3');

function soma(a,b) {
    //let c = a + b;
    //console.log("A soma de " + a + " e " + b + " é igual " + c);
    //return c;
    return a + b;
}

function mult(a,b){
    return a*b
}

let c = soma(3,4);
console.log("A soma de " + 3 + " e " + 4 + " é igual " + c);

function ex2(){
    let num = parseInt(document.getElementById('ex2_in').value);
    console.log("Incrementos até "+ num)
    for (let i = 0; i <= num; i++){
        console.log(i);
    }
    console.log(num);
}

function ex3(){
    let num1 = parseInt(document.getElementById('ex3_1').value);
    let num2 = parseInt(document.getElementById('ex3_2').value);
    let result = soma(num1,num2);
    //console.log(result);
    document.getElementById('ex3_resp').innerHTML = "A soma de " + num1 + " e " + num2 + " é "+result;
}

function ex4(){
    let num1 = parseInt(document.getElementById('ex4_1').value);
    let num2 = parseInt(document.getElementById('ex4_2').value);
    let result;
    if(num1 < 0 || num2 < 0){
        result = soma(num1,num2);
    }else{
        result = mult(num1,num2);
    }
    //console.log(result);
    document.getElementById('ex4_resp').innerHTML = "O resultado é " + result;
}