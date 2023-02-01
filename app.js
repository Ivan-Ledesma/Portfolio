let menuButton = document.getElementById("menu")
let menuDesplegable = document.querySelector(".sectionMenuDrop");
let mobileLink = document.querySelectorAll('.mobile-link')

menuButton.addEventListener("click", (e)=>{
    menuDesplegable.classList.toggle('height');
    menuButton.classList.toggle('menuButtonColor');
    e.preventDefault()
})

document.addEventListener("click",(e)=>{
    if(menuDesplegable.classList.contains('height')){
        e.target.classList.contains('mobile-link') && menuDesplegable.classList.remove('height')
        e.target.classList.contains('mobile-link') && menuButton.classList.remove('menuButtonColor')
    }
})
