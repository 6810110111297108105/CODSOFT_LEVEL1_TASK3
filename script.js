// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.button'));
    let currentInput = '';
    let memory = 0; // Memory for M+ and M-
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const value = e.target.textContent;
  
        if (value === 'C') {
          // Clear the display
          currentInput = '';
          display.value = '';
        } else if (value === '=') {
          // Evaluate the expression
          try {
            display.value = eval(currentInput); // Evaluate the expression
          } catch {
            display.value = 'Error';
          }
          currentInput = display.value;
        } else if (value === '%') {
          // Calculate percentage
          currentInput = (parseFloat(currentInput) / 100).toString();
          display.value = currentInput;
        } else if (value === 'M+') {
          // Add to memory
          memory += parseFloat(display.value) || 0;
        } else if (value === 'M-') {
          // Subtract from memory
          memory -= parseFloat(display.value) || 0;
        } else if (value === '.') {
          // Add decimal point
          if (!currentInput.includes('.')) {
            currentInput += '.';
            display.value = currentInput;
          }
        } else {
          // Handle numbers and operators
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
  