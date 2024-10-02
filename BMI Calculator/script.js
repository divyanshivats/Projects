const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  let text;
  if (height == ' ' || height < 0 || isNaN(height)) {
    text = 'Please Enter Valid Height';
  } else if (weight == ' ' || weight < 0 || isNaN(weight)) {
    text = 'Please Enter Valid Weight';
  } else {
    text = (weight / ((height * height) / 1000)).toFixed(2);

    if(text < 18.6){
      text = `You are underweight with BMI ${text}`
    }
    else if(18.6 <= text < 24.9){
      text = `You have normal weight with BMI ${text}`
    }
    else if(text > 24.9){
      text = `You are overweight with BMI ${text}`
    }
  }
  document.getElementById('results').innerHTML = text;
});
