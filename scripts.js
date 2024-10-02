function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar img
  const img = document.querySelector("#profile img")
  //subtituir img
  if (html.classList.contains("light")) {
    //se tiver light mode, add img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Avatar de Samara Lima modo light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Avatar de Samara Lima")
  }

  //if(html.classList.contains('light')){
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')
  //}
}
