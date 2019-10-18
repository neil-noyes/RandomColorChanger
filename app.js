let button = document.getElementById('clicker');

button.addEventListener('click', buttClick);

function buttClick(ev){
  changeColor(getRandomColor());
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(color){
  document.body.style.backgroundColor = color;
}
