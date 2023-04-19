const billInput = document.getElementById("bill-input");
const tips = document.getElementsByClassName("tip-btn");
const tipsArray = tips;
const buttonActive = [...tips];
const peopleInput = document.getElementById("people-input");
const total = document.getElementById("total");
const tipAmount = document.getElementById("tip-amount");
const customTip = document.getElementById("custom-tip");
const resetBtn = document.getElementById("reset");

let billInputValue = 0;
let tipsValue = 0;
let peopleInputValue = 0;
let totalValue = 0;
let tipAmountValue = 0;

// bill input
billInput.addEventListener("input", (event) => {
    billInputValue = parseInt(event.target.value);
    console.log(billInputValue);
    calculate();
})


for (let i = 0; i < tipsArray.length; i++) {
    tipsArray[i].addEventListener("click", (event) => {
        tipsValue = parseInt(event.target.innerText);
        // console.log(tipsValue);
        calculate();
    })
}


let active = null;

buttonActive.forEach((item) => {
    item.addEventListener("click", () => {
        if (item == active) {
            item.classList.remove('btn-active');
            active = null;
        } else {
            if (active != null) {
                item.classList.remove('btn-active');
                active = null;
            }
            item.classList.add('btn-active');
            active = item;
        }
    })
})


// custom tip value 
customTip.addEventListener("input", (event) => {
    if (customTip.value) {
        tipsValue = parseInt(event.target.value);
        calculate();
    } 
})

//people input 
peopleInput.addEventListener("input", (event) => {
    if (peopleInput.value == 0) {
        document.getElementById("validation-p").style.display = "block";
    } else {
        peopleInputValue = parseInt(event.target.value);
        document.getElementById("validation-p").style.display = "none";
     }
    
    console.log(peopleInputValue);
    calculate();
    
})

//reset button 
resetBtn.addEventListener("click", (event) => {
    totalValue = 0;
    tipAmountValue = 0;
    billInputValue = 0;
    peopleInputValue = 0;
    tipsValue = 0;

    total.innerText = `$0.00`;
    tipAmount.innerText = `$0.00`;
    billInput.value = "";
    peopleInput.value = "";
    customTip.value = "";
    document.getElementById("validation-p").style.display = "none";

})

function calculate () {
    totalValue = (billInputValue + billInputValue * (tipsValue / 100)).toFixed(2);
    tipAmountValue = (((billInputValue + billInputValue * (tipsValue / 100)) / peopleInputValue)).toFixed(2);

    if (peopleInput.value == 0 || peopleInput.value.length == 0 || peopleInputValue == 0) {
        total.innerText = `$0.00`;
        tipAmount.innerText = `$0.00`;
    }  else {
        total.innerText = `$${totalValue}`;
        tipAmount.innerText = `$${tipAmountValue}`;
    }
}