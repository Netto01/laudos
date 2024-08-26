document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado e pronto!");

    document.getElementById("dataForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Previne o envio padrão do formulário

        console.log("Formulário enviado!");

        // Exibe uma mensagem de status
        let messageElement = document.getElementById("message");
        messageElement.textContent = "Enviando...";
        messageElement.style.display = "block";
        document.getElementById("submit-button").disabled = true;

        // Coleta os dados do formulário
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
            keyValuePairs.push(encodeURIComponent(pair[0]) + "=" + encodeURIComponent(pair[1]));
        }

        var formDataString = keyValuePairs.join("&");

        // Envia uma solicitação POST para o Google Apps Script
        fetch("https://script.google.com/macros/s/AKfycbxmCAyYV38nkiWZjmnylqAo_eMYYwEx-ZR1ptfTrb3rsoHR-nGqzDwfAs5Z4vGFJr3K/exec", {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
        })
        .then(function (response) {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Falha ao enviar o formulário. Status: " + response.status);
            }
        })
        .then(function (data) {
            console.log("Dados recebidos:", data);
            messageElement.textContent = "Dados enviados com sucesso!";
            messageElement.style.display = "block";
            messageElement.style.backgroundColor = "green";
            messageElement.style.color = "beige";
            document.getElementById("submit-button").disabled = false;
            document.getElementById("dataForm").reset();

            setTimeout(function () {
                messageElement.textContent = "";
                messageElement.style.display = "none";
            }, 2600);
        })
        .catch(function (error) {
            console.error("Erro ao enviar o formulário:", error);
            messageElement.textContent = "Ocorreu um erro ao enviar o formulário.";
            messageElement.style.display = "block";
            messageElement.style.backgroundColor = "red";
            messageElement.style.color = "white";
            document.getElementById("submit-button").disabled = false;
        });
    });
});
