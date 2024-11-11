
document.addEventListener("DOMContentLoaded", () => {
  // Cache elements using getElementById and querySelector
  const form = document.getElementById("registrationForm");
  const nameInput = document.querySelector("#name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.querySelector("#email");
  const cityInput = document.getElementById("city");
  const stateInput = document.querySelector("#state");
  const countryInput = document.getElementById("country");
  const resultDiv = document.getElementById("result");

  // Cache error message elements
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const cityError = document.getElementById("cityError");
  const stateError = document.getElementById("stateError");
  const countryError = document.getElementById("countryError");

  // Validate inputs and set custom validity messages
  function validateInputs() {
    let valid = true;

    // Clear previous errors
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    cityError.textContent = "";
    stateError.textContent = "";
    countryError.textContent = "";

    // Validate name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      valid = false;
    }

    // Validate phone number
    if (phoneInput.value.trim() === "") {
      phoneError.textContent = "Phone number is required.";
      valid = false;
    } else if (!validatePhone(phoneInput.value)) {
      phoneError.textContent = "Invalid phone number formats.";
      valid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!validateEmail(emailInput.value)) {
      emailError.textContent = "Invalid email format.";
      valid = false;
    }

    // Validate city
    if (cityInput.value.trim() === "") {
      cityError.textContent = "City is required.";
      valid = false;
    }

    // Validate state
    if (stateInput.value.trim() === "") {
      stateError.textContent = "State is required.";
      valid = false;
    }

    // Validate country
    if (countryInput.value.trim() === "") {
      countryError.textContent = "Country is required.";
      valid = false;
    }

    return valid;
  }

  // Validate phone number format
  function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  }

  // Validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Form submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = validateInputs();

// Modify the style and/or CSS classes of an element in response to user interactions 
// using the style or classList properties
    if (valid) {  
        //

        //Modify the HTML or text content of at least one element in response to user interaction using innerHTML
        const successMessage = document.createElement('p'); 
        successMessage.textContent = `<p>Registration successful! Welcome, ${nameInput.value} from ${cityInput.value}, ${stateInput.value}, ${countryInput.value}.</p>`;
         
          resultDiv.style.color = '#28a745'; 

          resultDiv.appendChild(successMessage);
         
          pageTitle.setAttribute('style', 'color: blue;');
    }
  
  });

  [
    nameInput,
    phoneInput,
    emailInput,
    cityInput,
    stateInput,
    countryInput,
  ].forEach((input) => {
    input.addEventListener("input", () => {
      validateInputs();
    });
  });

  // Event listener for changing button style on mouseover and mouseout 
  submitButton.addEventListener('mouseover', () => { submitButton.style.backgroundColor = '#218838'; });
   submitButton.addEventListener('mouseout', () => { submitButton.style.backgroundColor = '#28a745'; }); 
   // Use BOM properties/methods
    console.log(`Current URL: ${window.location.href}`); 
   console.log(`Window inner width: ${window.innerWidth}px`);
});
