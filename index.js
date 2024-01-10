const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");


function calculateTotal() {
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);




    const totalValue = billValue + tipValue;

    
    totalSpan.innerText = totalValue;
   

}

btnEl.addEventListener("click",calculateTotal)