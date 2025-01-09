// import fuctions
// create item function
import { createItem } from './creteItem.js'

// var for input - submit
const inputSubmit = document.getElementById("input-submit")

// var for input text
const inputText = document.getElementById("input-item")

// listener for input
inputSubmit.addEventListener("click", (event) => {
  // prevennt reload page
  event.preventDefault()  

  // listull var
  const pNull = document.getElementById("p-listNull")

  // valid input
  if (inputText.value !== "") {
    // remove p-listNull
    if (pNull.style.display !== "none" ) {
      pNull.style.display = "none"
    }
    // function to create item
    const item = createItem(inputText.value, pNull)
  } else {
    alert("Escreva algo para sua lista!")
  }
})


// enter for more user
inputText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    inputSubmit.click()
  }
})