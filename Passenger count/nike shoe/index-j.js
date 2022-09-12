
function showError() {
  let errortext = document.getElementById("error")
  errortext.textContent = "Some error occured please try again later"
}
function tryAgain() {
  let thisError = document.getElementById("error")
  thisError.textContent = ""
}