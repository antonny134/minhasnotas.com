// Função genérica para calcular a média ou soma
function calcular(ids, outputId) {
    let total = 0;
    
    ids.forEach(id => {
        // Pega o valor, substitui vírgula por ponto e converte para número
        let valor = parseFloat(document.getElementById(id).value.replace(',', '.'));
        
        // Verifica se é um número válido, se não for, considera 0
        if (!isNaN(valor)) {
            total += valor;
        }
    });

    // Exibe o resultado no elemento de texto
    document.getElementById(outputId).innerText = "Resultado: " + total;
}

// Funções chamadas pelos botões no HTML
function s1() {
    calcular(['soma1', 'soma2', 'soma3', 'soma4'], 'somas1');
}

function s2() {
    calcular(['soma5', 'soma6', 'soma7', 'soma8'], 'somas2');
}

function s3() {
    calcular(['soma9', 'soma10', 'soma11', 'soma12'], 'somas3');
}

function s4() {
    calcular(['soma13', 'soma14', 'soma15', 'soma16'], 'somas4');
}

function s5() {
    calcular(['soma17', 'soma18', 'soma19', 'soma20'], 'somas5');
}


function navigateCatalog(page) {
    if (page) {
        window.location.href = page;
    }
}

