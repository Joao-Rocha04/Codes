document.addEventListener('DOMContentLoaded',function(){
    checkbox = document.querySelector('.check')
    titulo = document.querySelector('.titulo')
    manha = document.querySelector('.manha')
    almoco = document.querySelector('.almoco')
    jantar = document.querySelector('.jantar')
    checkbox.addEventListener('click',function(){
        if (titulo.innerHTML == 'Desjejum'){
            titulo.innerHTML = 'Almoço'
            manha.style.display = 'none';
            almoco.style.display = 'block';
            checkbox.checked = false
        }
        else if (titulo.innerHTML == 'Almoço'){
            titulo.innerHTML = 'Jantar'
            almoco.style.display = 'none'
            jantar.style.display = 'block'
            checkbox.checked = false
        }
        else{
            titulo.innerHTML = 'Desjejum'
            manha.style.display = 'block'
            jantar.style.display = 'none'
            checkbox.checked = false
        }
    })
    checkbox.style.backgroundColor = "#ADD8E6";
})