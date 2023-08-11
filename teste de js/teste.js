
let quotes = [
  "A preguiça atrasa a vida, faça acontecer!",
  "Só ação pode combater a preguiça!",
  "Não deixe a preguiça dominar, tenha disciplina!",
  "Seja produtivo, a preguiça não vai te levar a lugar algum!",
  "Não perca tempo com a preguiça, vá atrás dos seus objetivos!"
];

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

setTimeout(function () {
  alert(randomQuote);
}, 5000);
window.open

This code uses the setTimeout function to delay the execution of the alert function for 5 seconds(5000 milliseconds).