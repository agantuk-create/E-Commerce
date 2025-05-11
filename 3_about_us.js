document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    const userName = localStorage.getItem("username");

    if (userName) {
        welcomeMessage.textContent = `Hi, ${userName}`;
        loginLink.style.display = "none";
        logoutLink.style.display = "inline-block";
    } else {
        welcomeMessage.textContent = "Hi, Guest";
        loginLink.style.display = "inline-block";
        logoutLink.style.display = "none";
    }

    logoutLink.addEventListener("click", function () {
        localStorage.removeItem("username");
        window.location.href = "index.html";
    });
});
