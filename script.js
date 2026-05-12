const keyButtons = document.querySelectorAll("button.key")
const result = document.querySelector("div.display-result")
const resultHistory = document.querySelector("div.display-history")
const operators = ["+", "-", "/", "x", "%"]

keyButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const lastChar = result.innerHTML[result.innerHTML.length - 1]
        if (operators.includes(lastChar) && operators.includes(event.target.value)) {
            return;
        }
        if(event.target.value === "="){
            resultHistory.innerHTML = result.innerHTML
            result.innerHTML=eval(result.innerHTML)
            return;
        }
        if(event.target.value === ""){
            result.innerHTML = ""
            resultHistory.innerHTML = ""
        }
        result.innerHTML += event.target.value
        
        
    })
});
