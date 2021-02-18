// tells function to work
document.getElementById('button').addEventListener('click',compare)
let userinput = 0

// gets the number from box and will check if its positive or negative
function compare() {
  userinput = document.getElementById('input').value
  userinput = parseInt(userinput)


  if (userinput < 0) {
    document.getElementById('answer').innerHTML = "negative"
   } else {
    document.getElementById('answer').innerHTML = "positive"
   }

}