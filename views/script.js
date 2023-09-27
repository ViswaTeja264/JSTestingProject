//script.js file

const runCypressTests = require('../app')
try {
    const button = document.getElementById('demo'); 
    button.addEventListener('click', () => {
    // Trigger the Cypress tests
    console.log('Button clicked');
    runCypressTests();
    console.log('Method Triggered');
  });
} catch (error) {
    console.log(error);
}
