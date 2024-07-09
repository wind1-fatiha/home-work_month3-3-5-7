////////////// 2 /////////////////
document.getElementById('get_btn').addEventListener('click', ()=>{
    const xhr=new XMLHttpRequest() 
        xhr.open('GET','https://api.quotable.io/random', true)  
        xhr.send()
        xhr.onload=()=>{ 
            if (xhr.status===200) {
                console.log(`Статус: ${xhr.status} ${xhr.responseText}`);
            }
            else{
                console.log(`ошибка: ${xhr.status}`);
            }
        }
        
})