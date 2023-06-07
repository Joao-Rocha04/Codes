document.addEventListener('DOMContentLoaded',function(){
    mail = document.querySelector('.mail')
    mail.innerHTML = 'Seu e-mail é: ' + localStorage.getItem('e-mail')


    senha = document.querySelector('.senha')
    botao = senha.querySelector('.botao')
    botao.style.backgroundColor = "#ADD8E6";
    texto_para_adicionar1 = document.createElement('p')
    texto_para_adicionar1.innerHTML = localStorage.getItem('senha')
    texto_para_adicionar1.style.marginLeft = '1rem';
    senha.insertBefore(texto_para_adicionar1,botao)
    texto_para_adicionar1.style.display= 'none';

    botao.addEventListener('click',function(){
        if (botao.innerHTML == 'Mostrar Senha'){
            texto_para_adicionar1.style.display = 'block';
            botao.style.marginLeft = '1rem';
            botao.innerHTML = 'Esconder Senha'
        }
        else if (botao.innerHTML == 'Esconder Senha'){
            texto_para_adicionar1.style.display = 'none';
            botao.style.marginLeft = '5rem';
            botao.innerHTML = 'Mostrar Senha'
        }

    })
})