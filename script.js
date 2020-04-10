const lista = document.querySelectorAll('.embaixo')


lista.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        element.classList.add('active')
        var id = element.id
        id--;
        if(id>0){
            document.querySelector("[id='"+id+"']").classList.add('radiuscima')
        }
        id = id +2
        console.log(id, lista.length)
        if(id <=lista.length){
            document.querySelector("[id='"+id+"']").classList.add('radiusbaixo')
        }

       
    })
    element.addEventListener('mouseout', ()=>{
        element.classList.remove('active')
        var id = element.id
        id--;
        if(id>0){
            document.querySelector("[id='"+id+"']").classList.remove('radiuscima')
        }
        id = id +2
        if(id <=lista.length){
            document.querySelector("[id='"+id+"']").classList.remove('radiusbaixo')
        }
    })
});