function mostrarAlerta(){
    alert("Em breve divulgaremos nossos eventos e atividades!");
}

(function(){
    emailjs.init("2xyrFdiGkTWbwymBz")
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function(event){
    event.preventDefault();

    status.textContent = "Enviando ...";

    emailjs.sendForm("service_tfnle9o", "template_iweevfo", this).then(() => {
        status.textContent = "Mensagem enviada com sucesso!";
        form.reset();
    }, (error) => {
        console.error("Erro:", error);
        status.textContent = "Erro ao enviar. Tente novamente.";
    });
});

