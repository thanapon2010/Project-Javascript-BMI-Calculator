window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI () {

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#result");
    let bmi = ((weight / (height * height)) * 10000).toFixed(2);

    if (bmi < 16) {
        result.innerHTML = `Your BMI is ${bmi} and you are Severe Thinness.`;
    }
    else if (bmi >= 16 && bmi <= 17) {
        result.innerHTML = `Your BMI is ${bmi} and you are Moderate Thinness.`;
    }
    else if (bmi >= 17 && bmi <= 18.5) {
        result.innerHTML = `Your BMI is ${bmi} and you are Mild Thinness.`;
    }
    else if (bmi >= 18.5 && bmi <= 25) {
        result.innerHTML = `Your BMI is ${bmi} and you are Normal.`;
    }
    else if (bmi >= 25 && bmi <= 30) {
        result.innerHTML = `Your BMI is ${bmi} and you are Overweight.`;
    }
    else if (bmi >= 30 && bmi <= 35) {
        result.innerHTML = `Your BMI is ${bmi} and you are Obese Class I.`;
    }
    else if (bmi >= 35 && bmi <= 40) {
        result.innerHTML = `Your BMI is ${bmi} and you are Obese Class II.`;
    }
    else {
        result.innerHTML = `Your BMI is ${bmi} and you are Obese Class III.`;
    }
}