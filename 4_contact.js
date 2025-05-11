// Show user greeting and toggle login/logout buttons
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");
  
    const username = localStorage.getItem("username");
    if (username) {
      welcomeMessage.textContent = `Hi, ${username}`;
      loginLink.style.display = "none";
      logoutLink.style.display = "inline-block";
    } else {
      welcomeMessage.textContent = "Hi, Guest";
      loginLink.style.display = "inline-block";
      logoutLink.style.display = "none";
    }
  
    logoutLink.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "index.html";
    });
  
    // Form submit alert
    document.getElementById("contactForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for contacting us! We will get back to you soon.");
      e.target.reset();
    });
  });
  