const loginForm = document.getElementById('loginForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Load saved data on page load
window.onload = () => {
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('password');

  if (savedName && savedEmail && savedPassword) {
    nameInput.value = savedName;
    emailInput.value = savedEmail;
    passwordInput.value = savedPassword;
    rememberMeCheckbox.checked = true;
  }
};

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const rememberMe = rememberMeCheckbox.checked;

  if (!name) {
    alert('Please enter your name.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  if (rememberMe) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }

  alert('Login successful!');
  window.location.href = '2_Shopping.html';
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

document.querySelector('.fab.fa-facebook-f').addEventListener('click', () => {
  alert('Logging in with Facebook...');
});
document.querySelector('.fab.fa-google').addEventListener('click', () => {
  alert('Logging in with Google...');
});
document.querySelector('.fab.fa-twitter').addEventListener('click', () => {
  alert('Logging in with Twitter...');
});

window.addEventListener("load", () => {
    displayUsername();
    populateProductList();
  });


  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    localStorage.setItem("username", name);
  
    window.location.href = "2_shopping.html";
  });

  
  