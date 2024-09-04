// Solicita o nome do turista
const touristName = prompt("Qual seu nome, turista?");

// Variáveis para armazenar o número de cidades e a lista de cidades
const citiesVisited = [];
let cityCount = 0;

// Loop para perguntar se o turista visitou alguma cidade
let visitCity = prompt("Você visitou alguma cidade? (s/n)");

while (visitCity.toLowerCase() === 's') {
    // Pergunta o nome da cidade visitada
    const cityName = prompt("Qual é o nome da cidade visitada?");
    // Armazena o nome da cidade na lista
    citiesVisited.push(cityName);
    // Incrementa o contador de cidades
    cityCount++;
    // Pergunta se o turista visitou outra cidade
    visitCity = prompt("Você visitou alguma outra cidade? (s/n)");
}

// Exibe o resultado final
console.log(`Turista: ${touristName}`);
console.log(`Quantidade de cidades visitadas: ${cityCount}`);
console.log("Cidades visitadas:");

citiesVisited.forEach(function(city) {
    console.log(`- ${city}`);
});
