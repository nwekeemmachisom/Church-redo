let form = window.document.getElementById('forms')
let message = window.document.getElementById('message')
let messagebutt = window.document.getElementById('messagebutt')
let input = window.document.getElementById('input')
let namer = window.document.getElementById('name')
let email = window.document.getElementById('email')
let subject = window.document.getElementById('subject')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    message.style.display = 'block'
})

messagebutt.addEventListener('click',()=>{
    message.style.display = 'none'
    input.value = ''
    email.value = ''
    namer.value = ''
    subject.value = ''
})