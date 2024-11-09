// Função para calcular o saldo e determinar o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calculando o saldo de vitórias e derrotas
    const saldoVitorias = vitorias - derrotas;
    
    // Determinando o nível do jogador baseado nas vitórias
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Exibindo a mensagem final
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
}

// Testando a função
calcularRank(50, 30);  // Exemplo: 50 vitórias e 30 derrotas
