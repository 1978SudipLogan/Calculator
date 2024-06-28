let currentDisplay = '';
let result = '';
function myFunc(val) {
    currentDisplay = currentDisplay + val;
    document.getElementById("display").value = currentDisplay;
    // if (val == '+' || val == '-' || val == '*' || val == '/' || val == '%') {
    //     let current = '';
    //     current = currentDisplay;
    //     document.getElementById("display").value = current;
    //     current = eval(currentDisplay);
    // }
}

function myResult() {

    result = eval(currentDisplay);
    document.getElementById("display2").value = currentDisplay;
    document.getElementById("display").value = result;
    currentDisplay = result;
}

function sqr() {
    let squareroot = '';
    squareroot = Math.sqrt(eval(currentDisplay));
    document.getElementById("display").value = squareroot;
    currentDisplay = squareroot;
}
function myClear() {
    currentDisplay = '';
    document.getElementById("display").value = currentDisplay;
    document.getElementById("display2").value = currentDisplay;
}

function myDel() {
    if (currentDisplay == result) {
        document.getElementById("display2").value = '';
    }
    else {
        let str = currentDisplay;
        let str1 = str.substring(0, --str.length);
        document.getElementById("display").value = str1;
        currentDisplay = str1;
    }
}

function myLog() {

    let l = Math.log10(eval(currentDisplay));
    document.getElementById("display").value = l;
}

function pow() {
    let base = parseFloat(prompt("Enter the base:"));
    let exponent = parseFloat(prompt("Enter the exponent:"));
    let result = Math.pow(base, exponent);
    currentDisplay = result.toString();
    document.querySelector('#display').value = currentDisplay;
    document.querySelector('#display2').value = currentDisplay;
}


// function factorial() {
//     let str = currentDisplay;
//     let str1 = str.substring(str.length - 1, str.length);
//     let x = Math.
// }