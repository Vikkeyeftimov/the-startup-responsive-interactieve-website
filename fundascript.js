
// SLIDER BEGIN
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach( button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1; 
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider)


// SLIDER END

// PLUS BUTTON BEGIN

var plusbutton = document.getElementById("plusbutton");
var plustekst = document.getElementById("vergroten");

plusbutton.addEventListener("click", function(){
    if (plustekst.style.display === "none") {
        plustekst.style.display = "block";
    } else {
        plustekst.style.display = "none";
    }
    })
 
 plusbutton.addEventListener("click", function(){   
    if(this.innerHTML === "- Inklappen") {
    this.innerHTML = "+ Lees de volledige omschrijving"
    } else {
    this.innerHTML = "- Inklappen"
    }
    })

// PLUS BUTTON END

// PLATTEGROND BEGIN

var plattegrond = document.querySelector(".plattegrond-button")
var classeerste = document.getElementById("oude")
var classtweede = document.getElementById("nieuwe")

plattegrond.addEventListener("click", function() {
    var tempKlassen = classeerste.className
    classeerste.classname = classtweede.className
    classtweede.className= tempKlassen
})






