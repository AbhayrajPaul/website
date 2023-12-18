function dark_mode() {
  var element = document.body;
  element.classList.add("dark-mode");
  element.classList.remove("light-mode")
  document.getElementById('logo').src = '/Media/Logo Black.png'
  var a = document.getElementById('Header');
  a.classList.remove("dark-mode")
  a.classList.add("light-mode");
  var b = document.getElementById('Footer');
  b.classList.remove("dark-mode")
  b.classList.add("light-mode");
}

function light_mode() {
  var element = document.body;
  element.classList.remove("dark-mode");
  element.classList.add("light-mode");
  document.getElementById('logo').src = '/Media/Logo White.png'
  var a = document.getElementById('Header');
  a.classList.remove("light-mode");
  a.classList.add("dark-mode");
  var b = document.getElementById('Footer');
  b.classList.remove("light-mode");
  b.classList.add("dark-mode");
}