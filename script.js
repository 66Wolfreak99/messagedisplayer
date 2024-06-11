const bigMessage = document.getElementById("message");

const form = document.getElementById("form")

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const input = document.querySelector("input").value;
    input.trim();
    if(input){
        bigMessage.textContent = input;
        form.reset()
    }
} )