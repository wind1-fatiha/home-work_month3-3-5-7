////////////////// 3 ///////////////////
const image=document.getElementById('image')
const api='https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'

async function shoImage() {
    const response=await fetch(api)
    console.log(response);
    const data=await response.json()
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        image.innerHTML+=`
       <img src=${data[i].url} alt='image'>
       </div>
        `
    }
}
shoImage()