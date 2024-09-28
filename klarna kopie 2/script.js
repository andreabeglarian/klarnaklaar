const hamburgerIcon = document.getElementById('hamburger-icon')
const sluitmenu = document.getElementById('sluitmenu')
const menu = document.querySelector('header nav ul')

hamburgerIcon.addEventListener('click', menuSlider)
sluitmenu.addEventListener('click', closeMenu)

function menuSlider(){
 menu.classList.toggle('active')
}

function closeMenu(){
    menu.classList.remove('active')
   }

function text() {
    document.getElementById("text").style.display = "block";
}

function textWeg() {
    document.getElementById("text").style.display = "none";
}

function playAudio() {
    var audio = document.getElementById("mijnAudio");
    audio.play();
}

function playAudio() {
    var audio = document.getElementById("mijnAudio");
    audio.play();
}

