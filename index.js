function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";

        document.getElementById("result").innerHTML = `Your BMI is: <b>${bmi.toFixed(2)}</b> (${category})`;
    } else {
        document.getElementById("result").innerText = "Please enter valid values.";
    }
}