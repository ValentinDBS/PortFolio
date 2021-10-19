
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(box => {

    box.addEventListener("click", e => {
        e.target.classList.toggle("active");
    })
    
})