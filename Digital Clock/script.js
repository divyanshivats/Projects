const clock = document.getElementById('clock');
// let date = new Date();
// clock.innerHTML = date.toLocaleTimeString();

// to run it lgatar -
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
