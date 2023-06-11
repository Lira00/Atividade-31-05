// // const readline = require("redline");
// // var cel = "";

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });

// // rl.question("Qual a temperatura hoje: ", (cel) => {
// //   var fah = cel * 1.8 + 32;
// //   console.log("A temperatura em fahrenheit é ${fah}!");

// //   rl.close();
// // });

// var temp = prompt("Digite a temperatura:");
// var fah = temp * 1.8 + 32;
// console.log(`A temperatura em fahrenheit é ${fah}!`);

// var numeroDia = parseInt(prompt("Digite um número:"));
// switch (numeroDia) {
//   case 1:
//     console.log("domingo");
//     break;
//   case 2:
//     console.log("segunda");
//     break;
//   case 3:
//     console.log("terça");
//     break;
//   case 4:
//     console.log("quarta");
//     break;
//   case 5:
//     console.log("quinta");
//     break;
//   case 6:
//     console.log("sexta");
//     break;
//   case 7:
//     console.log("sábado");
//     break;
//   default:
//     console.log("número inválido");
//     break;
// }

// const numero = parseFloat(prompt("Digite um número:"));

// if (numero > 0) {
//   console.log("O número é positivo.");
// } else if (numero < 0) {
//   console.log("O número é negativo.");
// } else {
//   console.log("O número é zero.");
// }

// // O custo de um carro novo ao consumidor é a soma do custo de
// // fábrica com a porcentagem do distribuidor e dos impostos
// // (aplicados ao custo de fábrica). Supondo que o percentual do
// // distribuidor seja de 28% e os impostos de 45%, escrever um
// // algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// // o custo final ao consumidor.

// const dist = 0.28;
// const imp = 0.45;
// var custoCarro = parseFloat(prompt("Digite o custo do carro:"));
// var valorCarro = custoCarro * dist + custoCarro * imp + custoCarro;
// console.log("O custo final do carro é: " + valorCarro.toFixed(2));

// // Desenvolva um algoritmo que faça o cálculo do índice de massa
// // corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// // que digite sua altura, em seguida solicitar que digite seu peso e que
// // lhe exiba o status. O status vai variar da seguinte forma:
// // a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// // “Você está abaixo da faixa de peso ideal”;
// // b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// // “Você está acima da faixa de peso ideal”;
// // c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// // 24,99, o status a ser mostrado será “Você está dentro da faixa
// // de peso ideal”.

// var peso = parseFloat(prompt("Digite seu peso:"));
// var altura = parseFloat(prompt("Digite sua altura:"));
// var imc = peso / (altura * altura);
// console.log("Seu IMC é: " + imc.toFixed(2));

// if (imc < 18.5) {
//   console.log("Você está abaixo da faixa de peso ideal");
// } else if (imc < 24.99) {
//   console.log("Você está dentro da faixa de peso ideal");
// } else {
//   console.log("Você está acima da faixa de peso ideal");
// }

// // Escreva um algoritmo que solicite 2 números e uma operação
// // matemática. O algoritmo deve realizar o cálculo com os 2 números
// // digitados conforme a operação informada.

// var num1 = parseFloat(prompt("Digite um número:"));
// var num2 = parseFloat(prompt("Digite outro número:"));
// var op = prompt("Insira uma operação:");
// var resultado;

// switch (op) {
//   case "adição":
//     console.log(
//       (resultado = num1 + num2),
//       `A adição de ${num1} com ${num2} tem o resultado de ${resultado}`
//     );
//     break;
//   case "subtração":
//     console.log(
//       (resultado = num1 - num2),
//       `A subtração de ${num1} com ${num2} tem o resultado de ${resultado}`
//     );
//     break;
//   case "divisão":
//     console.log(
//       (resultado = num1 / num2),
//       `A divisão de ${num1} com ${num2} tem o resultado de ${resultado}`
//     );
//     break;
//   case "multiplicação":
//     console.log(
//       (resultado = num1 * num2),
//       `A multiplicação de ${num1} com ${num2} tem o resultado de ${resultado}`
//     );
// }

// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

var conta = prompt("Deseja criar conta?s/n");
const taxa = 4.5;

if (conta == "s") {
  console.log("Parabéns, sua conta bancária foi criada.");
  var saldoInicial = parseFloat(prompt("Digite o depósito inicial da conta:"));
  var saque = parseFloat(prompt("Digite o valor a ser sacado da conta:"));
  var saqueT = saque + taxa;
  if (saqueT <= saldoInicial) {
    console.log(`Saque realizado com sucesso  ${saque}`);
    var saldo = saldoInicial - saqueT;
  } else {
    console.log("Saldo insulficiente");
  }
}
