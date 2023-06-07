document.addEventListener('DOMContentLoaded',function(){
    e = document.querySelector('.texto')
    box = document.querySelector('.box')
    submit = document.querySelector('input[type="submit"]')
    submit.style.backgroundColor = "#ADD8E6";
    texto = document.querySelector('input[type="text"]')
    submit.addEventListener('click',function(){
        valor = texto.value
        texto_para_adicionar = document.createElement('p')
        texto_para_adicionar.innerHTML = valor
        box.appendChild(texto_para_adicionar)
        texto.value = ''
    })
})