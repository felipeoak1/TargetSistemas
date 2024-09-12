let mock = require('./mocks/dados.json')
const data = JSON.stringify(mock);

let menorValorFaturamento = Infinity
let maiorValorFaturamento = -Infinity
let valorTotalFaturamento = 0, mediaFaturamento = 0, quantidadeDias = 0, diasAcimaDaMedia = 0

for (c of JSON.parse(data)) {
  
  if (c.valor != 0) {
    valorTotalFaturamento += c.valor
    quantidadeDias++
    
    if (menorValorFaturamento > c.valor) {
      menorValorFaturamento = c.valor
    }

    if (maiorValorFaturamento < c.valor) {
      maiorValorFaturamento = c.valor
    }

  }

}

mediaFaturamento = quantidadeDias > 0 ? valorTotalFaturamento / quantidadeDias : 0;

for (let c of mock) {
  if (c.valor > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
}

// Exibir os resultados
console.log('Menor valor de faturamento:', menorValorFaturamento);
console.log('Maior valor de faturamento:', maiorValorFaturamento);
console.log('Número de dias acima da média:', diasAcimaDaMedia);