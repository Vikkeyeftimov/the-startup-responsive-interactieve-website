const buttons = document.querySelectorAll("[data-slider-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pffset = button.dataset.sliderButton === "next" ? 1 : -1
    })
} )