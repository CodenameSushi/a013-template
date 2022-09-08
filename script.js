// let idade = Number(prompt('Qual a idade do seu dependete?'))

/////////////////////////if aninhado
// if(idade >= 13){
//     if(idade <= 17){
//         alert('Seu depedente ja pode ter um cartao de credito vinculado seu!')
//     }else{
//         alert('Consulte outras possibilidades do Labank')
//     }
// }else{
//     alert('Consulte outras possibilidades do Labank')
// }
    





//////////////////////////////if com operadores logicos
// if(idade >= 13 && idade <= 17){
//     alert('Seu depedente ja pode ter um cartao de credito vinculado seu!')
// }else{
//     alert('Consulte outras possibilidades do Labank')
// }

// ///////////////////////////if ternario
// idade === 13 ? alert('A idade do dependente e 13 e ja pode ter um cartao.'):alert('Verifique as opcoes possiveis.')\


//Switch-case

// let card = Number(prompt(`Digite o numero para o cartao desejado: 
// 1 para "Facil"
// 2 para "Black"
// 3 para "Platinum"
// 4 para "Master Gold"`)) 

// switch(card){
//     case 1:
//         alert('Facil Selecionado');
//         break;
//     case 2:
//         alert('Black Selecionado');
//         break;
//     case 3:
//         alert('Platinum Selecionado');
//         break;
//     case 4:
//         alert('Master Gold Selecionado');
//         break;
//     default:
//         alert('Escolha uma das quatro opcoes disponiveis')
// }

// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3. Faça isso:
//  Utilizando ifs aninhados
// Utilizando um operador lógico para unir duas operações relacionais

const num1 = Number(prompt('Digite um numero que seja divisivel por 2 e 3'))

////////////////////////IF ANINHADO
// if(num1 % 2 === 0){
//     if(num1 % 3 === 0){
//         alert('Esse numero pode ser divido por 2 e por 3')
//     }
// }else{
//     alert('Esse numero nao pode ser divido por 2 nem por 3') 
// }


if(num1 % 2 === 0 & num1 % 3 === 0){
    switch (num1) {
        case 6:
            alert('o numero escolhido foi 6')
            break;
        case 12:
            alert('o numero escolhido foi 12')
            break;
        case 18:
            alert('o numero escolhido foi 18')
            break;
        case 24:
            alert('o numero escolhido foi 24')
            break;
        case 30:
            alert('o numero escolhido foi 30')
            break;            
        default:
            alert('O numero escolhido e maior que 30 ou menor que 6')
            break;
        }
    alert('Esse numero pode ser divido por 2 e por 3')
    num1 === 30 ? alert('UFA ACERTEI!'):alert('NAO FOI DESSA VEZ :(')
}else{
    alert('Esse numero nao pode ser divido por 2 nem por 3')
}

