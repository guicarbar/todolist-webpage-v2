// export function
export { validCheckbox }

// function for validation checkbox
function validCheckbox(item, inputCheckbox, p) {
  if (inputCheckbox.checked === true) {
    p.classList.add("line")
  } else {
    p.classList.remove("line")
  }
}