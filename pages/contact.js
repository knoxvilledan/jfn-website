// Function to validate email address
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate name and email
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Submit the form
  // TODO: Add your code to submit the form here
}

// Add event listener to the form
const form = document.getElementById("contactForm");
form.addEventListener("submit", handleSubmit);
