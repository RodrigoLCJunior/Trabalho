
document.addEventListener("DOMContentLoaded", function() {
    var regExpTelefone = /^\([0-9]]{2}}\) \[0-9]{4,5}-?\[0-9]{4}$/;
    var regExpNome = /^[^\d]+$/


    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var telefoneInput = document.getElementById('telefone');

    nomeInput.addEventListener('input', function() {
        if (regExpNome.test(nomeInput.value) != true ) {
            nomeError.textContent = "Nome não pode conter números";
        }   
        if (nomeInput.value.length > 100) {
            console.log("Não pode exceder 100 caracteres");
        }
    });

    emailInput.addEventListener('input', function() {
    
    });

    telefoneInput.addEventListener('input', function() {
        if (regExpTelefone.test(telefoneInput.value) != true) {
            console.log("Número de telefone inválido");
        } 
    });
});