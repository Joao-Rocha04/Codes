document.addEventListener('DOMContentLoaded',function(){
    mail = document.querySelector('.mail')
    enviar_mail = mail.querySelector('input[type="submit"]')
    texto_mail = mail.querySelector('input[type="email"]')
    enviar_mail.addEventListener('click',function(){
        valor = texto_mail.value
        localStorage.setItem('e-mail',valor)
        texto_para_adicionar = document.createElement('p')
        texto_para_adicionar.innerHTML = 'Seu novo e-mail cadastrado é: ' + localStorage.getItem('e-mail')
        texto_para_adicionar.style.margin = '1rem';
        mail.appendChild(texto_para_adicionar)
        
    })
    


    senha = document.querySelector('.senha')
    enviar_senha = senha.querySelector('input[type="submit"]')
    texto_senha = senha.querySelector('input[type="password"]')
    enviar_senha.addEventListener('click',function(){
        valor = texto_senha.value
        localStorage.setItem('senha',valor)
        texto_para_adicionar1 = document.createElement('p')
        texto_para_adicionar1.innerHTML = 'Sua nova senha cadastrada é : ' + localStorage.getItem('senha')
        texto_para_adicionar1.style.margin = '1rem';
        senha.appendChild(texto_para_adicionar1)
    })
    
})