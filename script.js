const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounterE1 = document.getElementById("remaining-counter");


const wordLimit = 50;

textareaE1.addEventListener("input", () => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    const currentLength = textareaE1.value.length;
    totalCounterE1.innerText = currentLength;


    const remainingWords = wordLimit - currentLength;

    
    remainingCounterE1.innerText = `Remaining: ${remainingWords}`;
}
