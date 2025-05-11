function signIn() {
  window.location.href = "1_login.html";
}

function guestMode() {
  window.location.href = "2_shopping.html";
}


function guestMode() {
  // Store a flag in localStorage to indicate guest mode
  localStorage.setItem("isGuest", "true");

  // Redirect to the shopping page
  window.location.href = "2_shopping.html";
}