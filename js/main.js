document.getElementById("burger-lines").addEventListener("click", function(){
    document.getElementById("burger-box").classList.add("open")
    document.getElementById("close").classList.add("open")
    document.getElementById("burger-lines").classList.add("invis")
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("burger-box").classList.remove("open")
    document.getElementById("close").classList.remove("open")
    document.getElementById("burger-lines").classList.remove("invis")
})