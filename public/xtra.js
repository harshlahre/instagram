const accordions = document.querySelectorAll(".accordion");
accordions.forEach(c => {
    let e = c.querySelector(".accordion-header");
    e.addEventListener("click", () => {
        c.classList.toggle("active")
    })
});