const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let touristName = '';
let visitedCities = [];

rl.question('Qual seu nome turista?\n', (name) => {
  touristName = name;
  askCity();
});

function askCity() {
  rl.question('Você visitou alguma cidade? (s/n)\n', (answer) => {
    if (answer.toLowerCase() === 's') {
      rl.question('Qual é o nome da cidade visitada?\n', (city) => {
        visitedCities.push(city);
        askCity(); // Pergunta novamente
      });
    } else {
      // Exibe os resultados
      console.log(`Turista: ${touristName}`);
      console.log(`Quantidade de cidades visitadas: ${visitedCities.length}`);
      visitedCities.forEach(city => console.log(`- ${city}`));
      rl.close();
    }
  });
}
