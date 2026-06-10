// script.js

// ==================== FUNCIONALIDADE PRINCIPAL: CALCULADORA DE ÁGUA ====================
// Função que calcula o consumo de água baseado no tempo de banho e torneira

function calcularConsumoAgua() {
    // Buscar os valores digitados pelo usuário
    let minutosBanho = document.getElementById('banho').value;
    let minutosTorneira = document.getElementById('torneira').value;
    
    // Converter para números (caso esteja vazio, usa 0)
    minutosBanho = Number(minutosBanho) || 0;
    minutosTorneira = Number(minutosTorneira) || 0;
    
    // Valores médios de consumo por minuto
    const LITROS_POR_MINUTO_CHUVEIRO = 15;
    const LITROS_POR_MINUTO_TORNEIRA = 10;
    
    // Calcular litros gastos
    let litrosBanho = minutosBanho * LITROS_POR_MINUTO_CHUVEIRO;
    let litrosTorneira = minutosTorneira * LITROS_POR_MINUTO_TORNEIRA;
    let litrosTotal = litrosBanho + litrosTorneira;
    
    // Exibir o resultado
    let resultadoLitros = document.getElementById('litrosDia');
    let mensagemEconomia = document.getElementById('mensagemEconomia');
    
    resultadoLitros.innerHTML = `💧 Você gasta aproximadamente ${litrosTotal} litros de água por dia!`;
    
    // Mensagem de conscientização baseada no consumo
    if (litrosTotal <= 50) {
        mensagemEconomia.innerHTML = "🌟 PARABÉNS! Você está economizando muita água. Continue assim para proteger os rios e nascentes!";
    } else if (litrosTotal <= 100) {
        mensagemEconomia.innerHTML = "👍 Bom trabalho! Dá para melhorar um pouco. Tente reduzir o tempo no banho em 2 minutos.";
    } else if (litrosTotal <= 200) {
        mensagemEconomia.innerHTML = "⚠️ Atenção! Seu consumo está alto. Feche a torneira ao escovar os dentes e tome banhos mais curtos.";
    } else {
        mensagemEconomia.innerHTML = "🚨 MUITO ALTO! Você pode economizar mais de 50% da água. Cada gota conta para salvar nossos rios!";
    }
}

// ==================== FUNCIONALIDADE EXTRA: DICA DO DIA ====================
// Array com dicas sobre economia de água e preservação dos rios

const dicas = [
    "💡 Feche a torneira enquanto escova os dentes: economiza até 12 litros por minuto!",
    "💡 Tome banhos de no máximo 5 minutos. Um banho longo gasta até 150 litros!",
    "💡 Reaproveite a água da chuva para regar plantas e limpar o quintal.",
    "💡 Não jogue lixo nos rios. Uma bituca de cigarro polui até 50 litros de água!",
    "💡 Plante árvores perto de nascentes para proteger a água.",
    "💡 Use balde ao invés de mangueira para lavar o carro. Economize 300 litros!",
    "💡 Verifique vazamentos em casa. Uma torneira pingando gasta 46 litros por dia.",
    "💡 Na agricultura, use irrigação por gotejamento. Economiza até 60% de água.",
    "💡 Prefira produtos orgânicos: eles não poluem os rios com agrotóxicos."
];

function mostrarDicaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    const dicaEscolhida = dicas[indiceAleatorio];
    document.getElementById('dicaAleatoria').innerHTML = dicaEscolhida;
}

// ==================== ACESSIBILIDADE ====================
// 1. Aumentar fonte
function aumentarFonte() {
    let tamanhoAtual = window.getComputedStyle(document.body).fontSize;
    let novoTamanho = parseFloat(tamanhoAtual) + 2;
    if (novoTamanho <= 32) { // Limite máximo para não quebrar layout
        document.body.style.fontSize = novoTamanho + 'px';
    }
}

// 2. Diminuir fonte
function diminuirFonte() {
    let tamanhoAtual = window.getComputedStyle(document.body).fontSize;
    let novoTamanho = parseFloat(tamanhoAtual) - 2;
    if (novoTamanho >= 12) { // Limite mínimo para legibilidade
        document.body.style.fontSize = novoTamanho + 'px';
    }
}

// 3. Alto contraste
let contrasteAtivo = false;
function ativarAltoContraste() {
    if (!contrasteAtivo) {
        document.body.classList.add('alto-contraste');
        contrasteAtivo = true;
    } else {
        document.body.classList.remove('alto-contraste');
        contrasteAtivo = false;
    }
}

// ==================== CONFIGURAR EVENTOS APÓS O CARREGAMENTO DA PÁGINA ====================
document.addEventListener('DOMContentLoaded', function() {
    // Evento do botão calcular
    const botaoCalcular = document.getElementById('calcularBtn');
    if (botaoCalcular) {
        botaoCalcular.addEventListener('click', calcularConsumoAgua);
    }
    
    // Evento do botão nova dica
    const botaoNovaDica = document.getElementById('novaDicaBtn');
    if (botaoNovaDica) {
        botaoNovaDica.addEventListener('click', mostrarDicaAleatoria);
    }
    
    // Eventos de acessibilidade
    const botaoAumentar = document.getElementById('aumentarFonte');
    const botaoDiminuir = document.getElementById('diminuirFonte');
    const botaoContraste = document.getElementById('altoContraste');
    
    if (botaoAumentar) botaoAumentar.addEventListener('click', aumentarFonte);
    if (botaoDiminuir) botaoDiminuir.addEventListener('click', diminuirFonte);
    if (botaoContraste) botaoContraste.addEventListener('click', ativarAltoContraste);
    
    // Mostrar uma dica aleatória ao carregar a página
    mostrarDicaAleatoria();
    
    // Calcular automaticamente quando a página carregar (valores padrão)
    calcularConsumoAgua();
});
