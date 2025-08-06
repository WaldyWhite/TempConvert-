const cel2far = (c) => {
    const result = (c * 9) / 5 + 32;
    return `${c}°C равно ${result.toFixed(2)}°F`;
};

const far2cel = (c) => {
    const result = ((c - 32) * 5) / 9;
    return `${c}°F равно ${result.toFixed(2)}°C`;
};

const radioCheck = () => {
    const rdioForm = document.getElementById("radiForm");
    const checked = rdioForm.radio.value;
    return checked;
};

const getNumber = () => {
    const inputNumber = document.getElementById("txt1").value;
    if (isNaN(inputNumber) && inputNumber != undefined) {
        alert("Invalid input. Please enter numbers only.");
        return;
    } else{
        return Number(inputNumber);
    }

};

document.getElementById("btn1").addEventListener("click", function () {
    const num = getNumber();
    const radioValue = radioCheck();
    if (radioValue === "f" && num != undefined) {
        document.getElementById("p1").textContent = far2cel(num);
    } else if (radioValue === "c" && num != undefined) {
        document.getElementById("p1").textContent = cel2far(num);
    } else {
        document.getElementById("p1").textContent ='';
    }
});
