const bigMessage = document.getElementById("message");

const form = document.getElementById("form");
const remover = document.getElementById("remover")

const storedMessage = localStorage.getItem("message");
if (storedMessage){bigMessage.textContent = storedMessage;}

form.addEventListener("submit",(event) => {
    event.preventDefault();
    const input = document.querySelector("input").value;
    input.trim();
    if(input){
        bigMessage.textContent = input;
        localStorage.setItem("message", input)
        form.reset()
    }
} );

remover.addEventListener("click", () => {
    if(storedMessage){
        localStorage.clear();
    };
    form.reset();
    bigMessage.textContent = "The Messaginator";
})