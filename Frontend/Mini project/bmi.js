const form = document.getElementById("bmi-form");
const cardBox = document.getElementById("card-box");
const resetBtn = document.getElementById("reset-btn");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const goal = document.getElementById("goal").value;

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = "";
    let badgeBg = "";
    let badgeColor = "";

    if (bmi < 18.5) {
        category = "Underweight";
        badgeBg = "rgb(219, 234, 254)";
        badgeColor = "rgb(29, 78, 216)";
    } else if (bmi < 25) {
        category = "Normal Weight";
        badgeBg = "rgb(220, 252, 231)";
        badgeColor = "rgb(21, 128, 61)";
    } else if (bmi < 30) {
        category = "Overweight";
        badgeBg = "rgb(254, 243, 199)";
        badgeColor = "rgb(180, 83, 9)";
    } else {
        category = "Obese";
        badgeBg = "rgb(254, 226, 226)";
        badgeColor = "rgb(185, 28, 28)";
    }

    document.getElementById("bmi-circle").innerText = bmi;
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-age").innerText = age + " Years";
    document.getElementById("display-weight").innerText = weight + " kg";
    document.getElementById("display-height").innerText = heightCm + " cm";
    document.getElementById("display-goal").innerText = goal;

    const badge = document.getElementById("status-badge");
    badge.innerText = category;
    badge.style.background = badgeBg;
    badge.style.color = badgeColor;

    cardBox.style.display = "block";
});

resetBtn.addEventListener("click", function() {
    form.reset();
    document.getElementById("bmi-circle").innerText = "--.-";
    document.getElementById("display-name").innerText = "Member Name";
    document.getElementById("display-age").innerText = "---";
    document.getElementById("display-weight").innerText = "---";
    document.getElementById("display-height").innerText = "---";
    document.getElementById("display-goal").innerText = "---";

    const badge = document.getElementById("status-badge");
    badge.innerText = "BMI Category";
    badge.style.background = "rgb(230, 230, 230)";
    badge.style.color = "rgb(51, 51, 51)";
});