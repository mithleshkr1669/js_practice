function debouncing(value) {
    console.log(value)
}

const inputElement = document.createElement('input');
inputElement.setAttribute('id',"input")
inputElement.style.border = "1px solid red"
let inputContainer = document.getElementById("input-container");
inputContainer.appendChild(inputElement)
const input = document.getElementById('input')
let timeOutId;
input.addEventListener("input", function () {
    let value = input.value;
    clearTimeout(timeOutId)
    timeOutId=setTimeout(() => {
      debouncing(value)
    }, 4000)
    // clearTimeout(timeOutId)
})
