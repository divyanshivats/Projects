
document.getElementById('setColor')
.addEventListener('click', () =>{
    let color = document.querySelector('#color').value;
    console.log(color);
    if(color){
        document.body.style.backgroundColor = color;
    }
})