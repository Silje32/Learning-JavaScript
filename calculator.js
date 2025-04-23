const calculatorButton = document.getElementById("calculator-btn");

calculatorButton.addEventListener("click", function calculateSum() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operator = document.getElementById("operator").value;

  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      console.log(result);
      break;
    case "-":
      result = number1 - number2;
      console.log(result);
      break;
    case "*":
      result = number1 * number2;
      console.log(result);
      break;
    case "/":
      if (number2 == 0) {
        console.error("Cannot divide by 0!");
      } else {
        result = Math.floor(number1 / number2);
        console.log(result);
      }
      break;
    case "^":
      result = Math.pow(number1, number2);
      break;
    case "PI":
      result = Math.PI;
      break;
    case "E":
      result = Math.E;
      (document.getElementById("result").textContent = "Natural logarithm E"),
        result;
      break;
    default:
      result = "Invalid operator!";
      break;
  }

  document.getElementById.ById("result").textContent = result;

  console.log("number1, number2, operator");
});
