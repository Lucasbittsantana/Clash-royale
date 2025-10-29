avanca =document.querySelectorAll('.btn-proximo')
console.log(avanca)

avanca.forEach(button => {
    button.addEventlistener('click', function (){
    const atual = document.querySelectorAll('.ativo')
    const proximopasso = 'passo-' + this.getattribute('data-proximo')

    atual.classilist.remove('ativo')
    document.getElementById(proximopasso).classList.add('ativo')






