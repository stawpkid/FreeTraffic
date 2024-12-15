// Get the target URL from the query parameters
const urlParams = new URLSearchParams(window.location.search);
const redirectUrl = urlParams.get('url');

// Create the button element
const button = document.createElement('button');
button.textContent = 'Wait 10 seconds';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.backgroundColor = '#007BFF';
button.style.color = 'white';
button.style.cursor = 'not-allowed';
button.style.opacity = '0.7';
button.disabled = true;

// Add the button to the top of the page
document.body.insertBefore(button, document.body.firstChild);

// Countdown logic
let countdown = 10;
const timer = setInterval(() => {
  if (countdown > 1) {
    countdown--;
    button.textContent = `Wait ${countdown} seconds`;
  } else {
    clearInterval(timer);
    button.textContent = 'Proceed to Content';
    button.disabled = false;
    button.style.cursor = 'pointer';
    button.style.opacity = '1';

    // Add click listener for redirect
    button.addEventListener('click', () => {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert('No target URL specified!');
      }
    });
  }
}, 1000);
