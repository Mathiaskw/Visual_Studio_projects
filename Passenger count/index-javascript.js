let count = 0
let quant = document.getElementById("count-displayed")
let savebutton = document.getElementById("save-1")
let para1 =document.getElementById("enteries-el")
function incrementCount() {
  count += 1
  quant.innerText = count
}
function saveOnClick() {
  let countNew = count + " - "
  para1.textContent += countNew
  quant.innerText = 0
  count = 0
}
