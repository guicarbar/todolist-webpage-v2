// export function
export { deleteItem }

function deleteItem(item, main, listNull) {
  // remove item
  item.remove()

  const childDivs = main.querySelectorAll('div')
  // valid remove
  if (childDivs.length === 0) {
    listNull.style.display = "block"
  }
}