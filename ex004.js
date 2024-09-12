const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFaturamento = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

for (const [estado, valor] of Object.entries(faturamentoEstados)) {
  const percentual = (valor / totalFaturamento) * 100;
  console.log(`O percentual de ${estado} é ${percentual.toFixed(2)}%`);
}