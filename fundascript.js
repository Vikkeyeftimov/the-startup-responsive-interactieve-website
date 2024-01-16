// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "tweede" ? 1 : -1
//         const slides = button
//         .closest("[data-slider]")
//         .querySelector("[data-slids]")

//     const activeSlide = slides.querySelector("[data-active]")  
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1 
//     if (newindex >= slides.children.length) newIndex = 0 

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//     })
// } ) 

let button = document.querySelector(".volledig")
let begin = document.querySelector("start")
let eind = document.querySelector("hele")

button,addEventListener('click', veranderen)
function veranderen(){
    begin=
}