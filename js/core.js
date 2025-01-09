// import fuctions
// create item function
import { createItem } from './creteItem.js'

// var for input - submit
const inputSubmit = document.getElementById("input-submit")

// listener for input
inputSubmit.addEventListener("click", (event) => {
  event.preventDefault()  
  // var for input text
  const inputText = document.getElementById("input-item")

  // valid input
  if (inputText.value !== "") {
    // remove p-listNull
    const pNull = document.getElementById("p-listNull")
    if (pNull.style.display !== "none" ) {
      pNull.style.display = "none"
    }
    // function to create item
    const item = createItem(inputText.value)
  } else {
    alert("Escreva algo para sua lista!")
  }
})
