const buttons = document.querySelectorAll('.button')


// Method 1 - 
// buttons.forEach( (button) => {
//   button.addEventListener('click', function(e) {
//     if(e.target.id == 'grey'){
//       document.body.style.backgroundColor = "grey"
//     }

//     if(e.target.id == 'white'){
//       document.body.style.backgroundColor = "white"
//     }

//     if(e.target.id == 'blue'){
//       document.body.style.backgroundColor = "blue"
//     }

//     if(e.target.id == 'yellow'){
//       document.body.style.backgroundColor = "yellow"
//     }
//   })
// })

buttons.forEach( (button) =>{
  button.addEventListener('click', function(e){
    document.querySelector('body').style.backgroundColor = e.target.id
  } )
})