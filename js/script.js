document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open");
});


const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");


let first = document.getElementById("first");
let second = document.getElementById("second");

const result = document.getElementById("result");

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num1 !== 0 ? num1 / num2 : "error"
            break;
    }
    result.textContent = res;

}

plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
});

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
});

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
});

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
});


document.addEventListener('DOMContentLoaded', () => {
    const angleInput = document.getElementById('angleInput');
    const resultSpan = document.getElementById('result');

    // Convert degrees to radians
    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    // Calculate sine
    document.getElementById('sinBtn').addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        if (!isNaN(angle)) {
            const radians = degreesToRadians(angle);
            resultSpan.textContent = Math.sin(radians).toFixed(2);
        }
    });

    // Calculate cosine
    document.getElementById('cosBtn').addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        if (!isNaN(angle)) {
            const radians = degreesToRadians(angle);
            resultSpan.textContent = Math.cos(radians).toFixed(2);
        }
    });

    // Calculate tangent
    document.getElementById('tanBtn').addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        if (!isNaN(angle)) {
            const radians = degreesToRadians(angle);
            const tanValue = Math.tan(radians);
            resultSpan.textContent = (angle % 180 === 90) ? "undefined" : tanValue.toFixed(2);
        }
    });

    // Calculate cotangent
    document.getElementById('cotBtn').addEventListener('click', () => {
        const angle = parseFloat(angleInput.value);
        if (!isNaN(angle)) {
            const radians = degreesToRadians(angle);
            const cotValue = 1 / Math.tan(radians);
            resultSpan.textContent = (angle % 180 === 0) ? "undefined" : cotValue.toFixed(2);
        }
    });
});