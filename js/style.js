const form = document.querySelector("form")?? null;
try {
    const form= document.querySelector("form")?? null;
    const nomeInput= document.querySelector("#nome");
    const assuntoSelect= document.querySelector("#assunto");
    const mensagemTextearea= document.querySelector("#mensagem");
    const enviarBtn= document.querySelector("#enviar-btn");
    // Validar o formulário:
    // 1- que o nome não seja vazio
    // 2- 

    function ValidarFormulario (evento){
        evento.preventDefault();
        let valido= true;
        if(nomeInput.value.trim()===''){
            valido = false;
            alert("O campo de nome não pode ser vazio!")
        }
        if(mensagemTextearea.value.trim()===""){
            valido=false;
            alert("A mensagem não pode ser vazia!");
        }
        else if(mensagemTextearea.value.trim().length > 500){
            valido=false;
            alert("A mensagem deve ser maior do que 500 caracteres.")
        }
        if(valido){
            alert("Agradecemos seu contato");
            form.submit();
        }}
        enviarBtn.addEventListener('click', ValidarFormulario)
} catch(exception){
    console.log(exception.message)
}