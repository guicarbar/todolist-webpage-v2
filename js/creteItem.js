// export function
export { createItem }

// import function
import { deleteItem } from './removeItem.js'
import { validCheckbox } from './checkbox.js'

// function to create item
function createItem(text, listNull) {
  // var to list area
  const areaList = document.getElementById("list-area")

  // create div main
  const div = document.createElement("div")

  // create p with text
  const p = document.createElement("p")
  p.textContent = text

  // delet button
  const btnDelete = document.createElement("button")
  btnDelete.innerHTML = `<i class="bi bi-trash-fill"></i>`
  btnDelete.onclick = () => deleteItem(div, areaList, listNull)

  // create input - checkbox
  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "Checkbox"
  inputCheckbox.onclick = () => validCheckbox(div, inputCheckbox, p)

  // unificad itens
  div.appendChild(inputCheckbox)
  div.appendChild(p)
  div.appendChild(btnDelete)

  // add to list area
  areaList.appendChild(div)

  // to scroll
  areaList.scrollTop = areaList.scrollHeight;
}