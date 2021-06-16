
const messages = document.querySelectorAll('.chat-item')


messages.forEach((item) =>{
    item.addEventListener('click', event =>{
        messages.forEach((mes)=>{
            console.log(mes);
            mes.classList.remove('active')
        })
        item.classList.add('active')
    })
})