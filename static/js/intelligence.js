// Função para alternar a visibilidade dos campos de data, tabela de subtestes e exibição de idade
function toggleTestOptions() {
    var testSelect = document.getElementById('test-select');
    var dateFields = document.querySelectorAll('#date-fields');
    var subtestTable = document.getElementById('subtest-table');
    var ageDisplay = document.getElementById('age-display');

    // Mostrar ou esconder campos adicionais com base na seleção do teste
    if (testSelect.value === 'wisc') {
        dateFields.forEach(function(field) {
            field.style.display = 'block';
        });
        subtestTable.style.display = 'block';
        ageDisplay.style.display = 'block';
    } else {
        dateFields.forEach(function(field) {
            field.style.display = 'none';
        });
        subtestTable.style.display = 'none';
        ageDisplay.style.display = 'none';
    }

    checkFormCompletion(); // Verifica o preenchimento do formulário ao mudar a seleção
}

// Função para verificar se todos os campos necessários estão preenchidos
function checkFormCompletion() {
    var testSelect = document.getElementById('test-select').value;
    var dataInicio = document.getElementById('data-inicio').value;
    var dataNascimento = document.getElementById('data-nascimento').value;
    var inputs = document.querySelectorAll('#subtestes input[type="number"]');
    var submitBtn = document.getElementById('submit-btn');

    var allFilled = true;

    // Verificar se os campos do WISC estão preenchidos
    if (testSelect === 'wisc') {
        if (!dataInicio || !dataNascimento) {
            allFilled = false;
        }

        inputs.forEach(function(input) {
            if (input.value === '') {
                allFilled = false;
            }
        });
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

// Função para calcular a idade com base nas datas de nascimento e início de aplicação
function calculateAge() {
    var dataNascimento = document.getElementById('data-nascimento').value;
    var dataInicio = document.getElementById('data-inicio').value;
    var idadeField = document.getElementById('idade');

    // Calcular a idade se ambas as datas forem fornecidas
    if (dataNascimento && dataInicio) {
        var nascimento = new Date(dataNascimento);
        var inicio = new Date(dataInicio);

        var anos = inicio.getFullYear() - nascimento.getFullYear();
        var meses = inicio.getMonth() - nascimento.getMonth();

        // Ajustar a idade se o mês de início for anterior ao mês de nascimento
        if (meses < 0) {
            anos--;
            meses += 12;
        }

        idadeField.value = anos + " anos e " + meses + " meses";
    } else {
        idadeField.value = '';
    }
}

// Função para mostrar o spinner de carregamento ao enviar o formulário
function showLoadingSpinner(event) {
    event.preventDefault();  // Previne o envio imediato do formulário

    var submitBtn = document.getElementById('submit-btn');
    var loadingSpinner = document.querySelector('.loading-spinner');

    submitBtn.classList.add('loading');
    loadingSpinner.style.display = 'block';  // Mostra o GIF de carregamento
    submitBtn.disabled = true;  // Desativa o botão para evitar múltiplos envios

    // Simula um atraso para fins de demonstração (substitua isso pela lógica de envio real)
    setTimeout(function() {
        document.querySelector('form').submit();  // Envia o formulário após o carregamento
    }, 2000);
}

// Adiciona um evento de clique ao botão de envio para chamar a função showLoadingSpinner
document.getElementById('submit-btn').addEventListener('click', showLoadingSpinner);
