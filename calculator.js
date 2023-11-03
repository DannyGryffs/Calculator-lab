function addNums(num1, num2) {
  return num1 + num2;
}


function subNums(num1, num2) {
  return num1 - num2;
}

function multNums(num1, num2) {
    return num1 * num2;
}

function divNums(num1, num2) {
      return num1 / num2;
}

function powNums(num1, num2) {
  return num1 ** num2;
}

function modNums(num1, num2) {
  return num1 % num2;
}

function sqrtNums(num1) {
  return num1 ** 0.5; 
}

// calculate functions

function calculate(expression) {
  
  const tokens = expression.split(' ');

  let num1;
  let operator;
  let num2;

  if (tokens.length === 3) {
    
    num1 = Number(tokens[0]);

    operator = tokens[1];

    num2 = Number(tokens[2]);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert('Not a number! Try again.');
      return;
    }
  } else if (tokens.length === 2) {
    operator = tokens[0];
    num1 = Number(tokens[1]);
  
    if (Number.isNaN(num1)) {
      alert('Not a number! Try again.');
      return;
    }
  } else {
    alert('Invalid expression! Try again.');
    return;
  }

  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtract(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
  if (operator === '^') {
    return power(num1, num2);
  }
  if (operator === '%') {
    return mod(num1, num2);
  }
  if (operator === 'sqrt') {
    return sqrt(num1);
  }
  alert('Unrecognized operator.');
}


 




/* **************** DONOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});

