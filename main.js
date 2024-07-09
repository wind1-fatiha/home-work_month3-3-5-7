//////////////// 1 /////////////////////
const newGroup=document.getElementById('new')
    newGroup.style.display='none'
document.querySelector('.form_verification').addEventListener('submit', (event)=>{
    event.preventDefault()
    const userName=document.getElementById('username').value
    const oldPass=document.getElementById('oldPass').value
    const password=document.getElementById('password').value
    let userText=document.getElementById('user_text')
    userText.style.color='red'
    userText.style.fontFamily='Arial'
    userText.style.marginBottom='10px'
    let text=document.getElementById('show_text')
    text.style.color='red'
    text.style.fontFamily='Arial'
    text.style.marginBottom='10px'
    if(!userName){
        userText.innerText='Заполните поле пожалуйста'
        return;
    }
    else{
        userText.innerText=''
    }
    if (!oldPass) {
        text.innerText='Нужен пароль на проверку'
        return;
    }

    if (oldPass==='1234') {
        newGroup.style.display='block'

    if (!password) {
        text.innerText='Новый пароль не должен быть пустым'
        return
    }
    else{
        text.innerText='Пароль успешно сменен'
        text.style.color='green'
    }
}
    else{
        text.innerText='Неверный пароль повторите еще раз'
    }
})



///////////////// 4 ////////////////////
    

