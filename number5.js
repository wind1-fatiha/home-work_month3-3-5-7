function color() {
    let hex = Math.floor(Math.random() * 225);
    while(hex.length>6){
        hex='0'+hex;
    }
    return hex
}

async function changeBg() {
    color();
    const api=' https://www.thecolorapi.com/id?hex=ffa '
    const response=await fetch(api)
    console.log(response);
    const data=await response.json()
    console.log(data);
        document.body.style.background=data.hex.value   ;    
}
window.onload=changeBg;