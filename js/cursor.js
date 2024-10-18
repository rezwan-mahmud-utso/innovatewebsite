var cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.x+"px"
    cursor.style.top = e.y+"px"
    
})
