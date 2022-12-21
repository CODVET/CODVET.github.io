
let counterEl = document.getElementById("counter")

let reset = document.getElementById("counter").innerText = 0

let counter = 0 

let resetButton = document.getElementById("reset-btn");








resetButton.addEventListener("click", function(){
    
    counter = 0
    document.getElementById("counter").innerText = 0

  })



counterEl.addEventListener("click", Increment())



function increment() {
    counter = counter + 1
    counterEl.innerText = counter



 }





