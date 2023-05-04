let box = document.querySelector(".box")
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function hover(elem){
    elem.addEventListener('mouseenter', () => {
        let color = generateRandomColor()
        elem.style.backgroundColor = color
        elem.style.boxShadow = `15px 15px 15px ${color}`
    });
      
    elem.addEventListener('mouseleave', () => {
        setTimeout(() => {
            elem.style.backgroundColor = "black"
            elem.style.boxShadow = "None"
        }, 1000);
        
    });
}
for (let index = 0; index < 100; index++) {
    let d = document.createElement("div")
    d.classList.add("mini-box")
    hover(d)
    box.appendChild(d)  
}

