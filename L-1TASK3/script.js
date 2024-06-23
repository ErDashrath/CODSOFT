const calculator = document.querySelector("#calculator");
const display = calculator.querySelector(".display");
const buttons = calculator.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let text = display.textContent.trim();

    if (value === "clear") {
      display.textContent = "0";
    } else if (value === "backspace") {
      display.textContent = text.length > 1 ? text.substring(0, text.length - 1) : "0";
    } else if (value === "=") {
      try {
        // Special case for 0*0
        if (text === "0*0") {
          display.textContent = "0";
        } else {
          // Evaluate the expression
          let result = eval(text);
          // Check if the result is a valid number
          if (!isNaN(result)) {
            display.textContent = result;
          } else {
            display.textContent = "Error";
          }
        }
      } catch (e) {
        display.textContent = "Error";
      }
    } else if (value === "+/-") {
      // Toggle positive/negative sign
      display.textContent = text.startsWith("-") ? text.substring(1) : `-${text}`;
    } else {
      // Append the value to the display or replace the default "0"
      display.textContent = text === "0" ? value : text + value;
    }
  });
});
