const flags = document.querySelectorAll(".flag")
const titleFlag = document.querySelector(".title-flag")

flags.forEach(element => {
    element.addEventListener('click', () => {
        titleFlag.innerHTML = element.innerHTML

    })
})
// -----------------------------------------------------------------

const child = document.querySelectorAll("#arrivals .card")
const card1 = document.querySelector("#arrivals #card1 img")
const next = document.querySelector("#arrivals #next")
const prev = document.querySelector("#arrivals #prev")
let count = 0;
next.addEventListener("click", () => {
    if (count == Math.ceil((child.length - 1) / 4)) {
        count = 0;
    } else {
        count++;
    }
    child.forEach(element => {
        element.style.transform = `translateX(-${count * 22.7708}vw)`
    })

})

prev.addEventListener("click", () => {
    if (count == 0) {
        count = Math.ceil((child.length - 1) / 4);
    } else {
        count--;
    }
    child.forEach(element => {
        element.style.transform = `translateX(-${count * 22.7708}vw)`
    })

})

card1.addEventListener("mouseenter", () => {
    card1.src = "./assets/img/card2.webp"
})

card1.addEventListener("mouseout", () => {
    card1.src = "./assets/img/card1.webp"
})