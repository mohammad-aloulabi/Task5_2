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
const card2 = document.querySelector("#arrivals #card2 img")
const card3 = document.querySelector("#arrivals #card3 img")
const card4 = document.querySelector("#arrivals #card4 img")
const card5 = document.querySelector("#arrivals #card5 img")
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


card2.addEventListener("mouseenter", () => {
    card2.src = "./assets/img/phone2.webp"
})

card2.addEventListener("mouseout", () => {
    card2.src = "./assets/img/phone3.webp"
})


card3.addEventListener("mouseenter", () => {
    card3.src = "./assets/img/phone3.webp"
})

card3.addEventListener("mouseout", () => {
    card3.src = "./assets/img/card1.webp"
})


card4.addEventListener("mouseenter", () => {
    card4.src = "./assets/img/phone3.webp"
})
card4.addEventListener("mouseout", () => {
    card4.src = "./assets/img/phone2.webp"
})


card5.addEventListener("mouseenter", () => {
    card5.src = "./assets/img/phone3.webp"
})
card5.addEventListener("mouseout", () => {
    card5.src = "./assets/img/phone2.webp"
})
