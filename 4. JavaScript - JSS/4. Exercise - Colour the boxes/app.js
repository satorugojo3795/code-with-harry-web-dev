let randomColour = function(){
    let val1 = Math.floor(Math.random() * 255)
    let val2 = Math.floor(Math.random() * 255)
    let val3 = Math.floor(Math.random() * 255)
    return `rgb(${val1},${val2},${val3})`
}

var boxes = document.getElementsByClassName("box");

for(let i=0;i<boxes.length;i++){
    boxes[i].style.backgroundColor = randomColour();
}