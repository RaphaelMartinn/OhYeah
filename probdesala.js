
//Variáveis
var hab = prompt("Número de habitantes da cidade é:");
var idade = [];
var sexo = [];
var salario = [];
var numf = [];
var mctf = 0;
var menor = 150;
var maior = 0;
var soma = 0;
var ordem = 1;

//Funções
function coleta () {
    for (var i = 0; i < hab; i++) {
        idade[i] = parseInt(prompt(ordem + "." + "  Qual a sua idade?"));
        sexo[i] = prompt(ordem + "." +"  Diga seu sexo. M para masculino, F para feminino.");
        salario[i] = parseInt(prompt(ordem + "." + "  Qual o seu salário?"));
        numf[i] = parseInt(prompt(ordem + "." + "  Você tem quantos filhos?"));
        ordem = ordem + 1;
    }
}

function somasal () {
    for (var i = 0; i < hab; i++) {
        soma = soma + salario[i];
    }
    document.write("<h2>"+"A média dos salários na cidade é:  " + (soma/hab).toFixed(2) + "</h2>" + "<hr>")
}

function mnidade() {
    for(var i = 0; i < hab; i++) {
    if(idade[i] < menor){
        menor = idade[i];
    }
    if(idade[i] > maior){
        maior = idade[i];
    }
    }
    document.write("<h2>"+"A pessoa mais velha da cidade tem " + maior + " anos." + "</h2>" +"<hr>");
    document.write("<h2>"+"A pessoa mais nova da cidade tem " + menor + " anos." +"</h2>" + "<hr>");
}

function MulherTresFilhos () {
    for(var i = 0; i < hab; i++) {
        if (salario[i] <= 500 && numf[i] == 3 && sexo[i] == "F"){
        mctf++;
    }
    }
    document.write("<h2>"+"Existem na cidade  " + mctf + "  mulheres com três filhos que ganham até 500 reais." + "</h2>" );
}

//Algorítimo principal
coleta();
somasal();
mnidade();
MulherTresFilhos();
