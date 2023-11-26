// Create Array
let boolArray = [true, true, false, true, false, true, false, true, false];

// Creating Variables for button and display
let resultInput = document.getElementById('resultInput');
let calcbtn = document.getElementById('calcbtn');

// addEventListener for button functionality
calcbtn.addEventListener('click', trueCount);

function trueCount() {
    let trueValues = boolArray.filter(value => value === true).length;

    // Display the result in the input field
    resultInput.value = trueValues;
}