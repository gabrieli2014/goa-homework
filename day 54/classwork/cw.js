let box = document.getElementById("box")

let colorIndex = 0
let colors = ["red", "blue", "green"]

setInterval(function(){
    box.style.backgroundColor = colors[colorIndex]
    
    colorIndex++
    
    if(colorIndex >= colors.length){
        colorIndex = 0
    }
},1000)





let interval

function start(){
    interval = setInterval(function(){
        document.getElementById("text").innerText = "Hello World"
    },1000)
}

function stop(){
    clearInterval(interval)
}
