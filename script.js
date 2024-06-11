const bigMessage = document.getElementById("message");

const form = document.getElementById("form")

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const input = document.querySelector("input").value;
    bigMessage.textContent = input
} )