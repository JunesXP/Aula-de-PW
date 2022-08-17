$(document).ready(function(){
    //selecionando o elemento que iremos monitorar o click

$('.btn').click(function(e){
    e.preventDefault()
    
    //Armazenando os dados digitados em variáveis
    var nome = $('#NOME').val()
    var idade = $('#IDADE').val()

    var mensagem = 'Seja bem vindo, '+nome!+', sua idade é '+idade

    $('#mensagem').append(mensagem)

    // Limpar os campos do formulário
    $('#NOME').focusin(function(){
         $('#mensagem').empty()
    })
  })
})