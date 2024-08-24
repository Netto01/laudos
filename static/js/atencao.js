// Função para alternar a visibilidade dos campos adicionais com base na seleção do teste
function toggleTestOptions() {
    var testSelect = document.getElementById('test-select');
    var bpaOptions = document.getElementById('bpa-options');

    // Mostrar ou esconder o campo de tipo de atenção com base na seleção do teste
    if (testSelect.value === 'bpa-2') {
        bpaOptions.style.display = 'block';
    } else {
        bpaOptions.style.display = 'none';
    }

    checkFormCompletion(); // Verifica o preenchimento do formulário ao mudar a seleção
}

// Função para verificar se todos os campos necessários estão preenchidos
function checkFormCompletion() {
    var testSelect = document.getElementById('test-select').value;
    var attentionType = document.getElementById('attention-type').value;
    var fileUpload = document.getElementById('file-upload').value;
    var submitBtn = document.getElementById('submit-btn');

    var allFilled = true;

    // Verificar se os campos do BPA-2 estão preenchidos
    if (testSelect === 'bpa-2') {
        if (!attentionType || !fileUpload) {
            allFilled = false;
        }
    } else {
        if (!fileUpload) {
            allFilled = false;
        }
    }

    // Ativar ou desativar o botão de envio com base nos campos preenchidos
    if (allFilled) {
        submitBtn.classList.remove('disabled');
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.add('disabled');
        submitBtn.disabled = true;
    }
}

// Função para mostrar o spinner de carregamento ao enviar o formulário e processar o resultado
function showLoadingSpinner(event) {
    event.preventDefault();  // Previne o envio imediato do formulário

    var submitBtn = document.getElementById('submit-btn');
    var loadingSpinner = document.querySelector('.loading-spinner');

    submitBtn.classList.add('loading');
    loadingSpinner.style.display = 'block';  // Mostra o GIF de carregamento
    submitBtn.disabled = true;  // Desativa o botão para evitar múltiplos envios

    // Simula um atraso para fins de demonstração (substitua isso pela lógica de envio real)
    setTimeout(function() {
        displayResults();  // Função para exibir os resultados após o carregamento
        document.querySelector('form').reset();  // Reseta o formulário
        loadingSpinner.style.display = 'none';  // Esconde o GIF de carregamento
        submitBtn.classList.remove('loading');
        submitBtn.disabled = true;
    }, 2000);
}

// Função para exibir os resultados após o envio do formulário
function displayResults() {
    var resultDisplay = document.getElementById('result-display');
    var selectedTestName = document.getElementById('selected-test-name');
    var resultCorrect = document.getElementById('result-correct');
    var resultIncorrect = document.getElementById('result-incorrect');
    var resultOmissions = document.getElementById('result-omissions');
    var resultTotal = document.getElementById('result-total');

    var testSelect = document.getElementById('test-select').value;
    var attentionType = document.getElementById('attention-type').value;

    // Exibir o nome do teste selecionado e o tipo de atenção, se aplicável
    if (testSelect === 'bpa-2') {
        selectedTestName.textContent = "BPA-2 - Atenção " + attentionType;
    } else {
        selectedTestName.textContent = testSelect;
    }

    // Exemplos de valores - estes devem ser substituídos pelos valores reais processados
    resultCorrect.textContent = "Acertos: 10";  // Substitua pelos resultados reais
    resultIncorrect.textContent = "Erros: 2";  // Substitua pelos resultados reais
    resultOmissions.textContent = "Omissões: 1";  // Substitua pelos resultados reais
    resultTotal.textContent = "Total: 7";  // Substitua pela lógica de cálculo real

    resultDisplay.style.display = 'block';  // Mostra a seção de resultados
}

// Adiciona um evento de clique ao botão de envio para chamar a função showLoadingSpinner
document.getElementById('submit-btn').addEventListener('click', showLoadingSpinner);
