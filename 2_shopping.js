const products = [
  // Mobile Category
  { id: 1, name: "Mobile A", price: 20000, category: "Mobile", image: "Mobile/mobile - 1.jpg" },
  { id: 2, name: "Mobile B", price: 22000, category: "Mobile", image: "Mobile/mobile - 2.jpg" },
  { id: 3, name: "Mobile C", price: 25000, category: "Mobile", image: "Mobile/mobile - 3.jpg" },
  { id: 4, name: "Mobile D", price: 27000, category: "Mobile", image: "Mobile/mobile - 4.jpg" },
  { id: 5, name: "Mobile E", price: 23000, category: "Mobile", image: "Mobile/mobile - 5.jpg" },
  { id: 6, name: "Mobile F", price: 21000, category: "Mobile", image: "Mobile/mobile - 6.jpg" },
  { id: 7, name: "Mobile G", price: 26000, category: "Mobile", image: "Mobile/mobile - 7.jpg" },
  { id: 8, name: "Mobile H", price: 28000, category: "Mobile", image: "Mobile/mobile - 8.jpg" },
  { id: 9, name: "Mobile I", price: 24000, category: "Mobile", image: "Mobile/mobile - 9.jpg" },
  { id: 10, name: "Mobile J", price: 25000, category: "Mobile", image: "Mobile/mobile - 10.jpg" },
  { id: 11, name: "Mobile K", price: 29000, category: "Mobile", image: "Mobile/mobile - 11.jpg" },
  { id: 12, name: "Mobile L", price: 30000, category: "Mobile", image: "Mobile/mobile - 12.jpg" },
  

  // Laptop Category
  { id: 21, name: "Laptop A", price: 60000, category: "Laptop", image: "Laptop/Laptop - 2.jpg" },
  { id: 22, name: "Laptop B", price: 65000, category: "Laptop", image: "Laptop/Laptop - 2.jpg" },
  { id: 23, name: "Laptop C", price: 70000, category: "Laptop", image: "Laptop/Laptop - 3.jpg" },
  { id: 24, name: "Laptop D", price: 75000, category: "Laptop", image: "Laptop/Laptop - 4.jpg" },
  { id: 25, name: "Laptop E", price: 80000, category: "Laptop", image: "Laptop/Laptop - 5.jpg" },
  { id: 26, name: "Laptop F", price: 85000, category: "Laptop", image: "Laptop/Laptop - 6.jpg" },
  { id: 27, name: "Laptop G", price: 90000, category: "Laptop", image: "Laptop/Laptop - 7.jpg" },
  { id: 28, name: "Laptop H", price: 95000, category: "Laptop", image: "Laptop/Laptop - 8.jpg" },
  { id: 29, name: "Laptop I", price: 100000, category: "Laptop", image: "Laptop/Laptop - 9.jpg" },
  { id: 30, name: "Laptop J", price: 110000, category: "Laptop", image: "Laptop/Laptop - 10.jpg" },
  { id: 31, name: "Laptop K", price: 120000, category: "Laptop", image: "Laptop/Laptop - 11.jpg" },
  { id: 32, name: "Laptop L", price: 130000, category: "Laptop", image: "Laptop/Laptop - 12.jpg" },
 

  // Headphone Category
  { id: 41, name: "Headphone A", price: 3500, category: "Headphones", image: "Headphone/Headphone - 1.jpg" },
  { id: 42, name: "Headphone B", price: 4000, category: "Headphones", image: "Headphone/Headphone - 2.jpg" },
  { id: 43, name: "Headphone C", price: 4500, category: "Headphones", image: "Headphone/Headphone - 3.jpg" },
  { id: 44, name: "Headphone D", price: 5000, category: "Headphones", image: "Headphone/Headphone - 4.jpg" },
  { id: 45, name: "Headphone E", price: 5500, category: "Headphones", image: "Headphone/Headphone - 5.jpg" },
  { id: 46, name: "Headphone F", price: 6000, category: "Headphones", image: "Headphone/Headphone - 6.jpg" },
  { id: 47, name: "Headphone G", price: 6500, category: "Headphones", image: "Headphone/Headphone - 7.jpg" },
  { id: 48, name: "Headphone H", price: 7000, category: "Headphones", image: "Headphone/Headphone - 8.jpg" },
  { id: 49, name: "Headphone I", price: 7500, category: "Headphones", image: "Headphone/Headphone - 9.jpg" },
  { id: 50, name: "Headphone J", price: 8000, category: "Headphones", image: "Headphone/Headphone - 10.jpg" },
  { id: 51, name: "Headphone K", price: 8500, category: "Headphones", image: "Headphone/Headphone - 11.jpg" },
  { id: 52, name: "Headphone L", price: 9000, category: "Headphones", image: "Headphone/Headphone - 12.jpg" },
 
  // Camera Category
{ id: 61, name: "Camera A", price: 10000, category: "Camera", image: "Camera/Camera - 1.jpg" },
{ id: 62, name: "Camera B", price: 11000, category: "Camera", image: "Camera/Camera - 2.jpg" },
{ id: 63, name: "Camera C", price: 12000, category: "Camera", image: "Camera/Camera - 3.jpg" },
{ id: 64, name: "Camera D", price: 13000, category: "Camera", image: "Camera/Camera - 4.jpg" },
{ id: 65, name: "Camera E", price: 14000, category: "Camera", image: "Camera/Camera - 5.jpg" },
{ id: 66, name: "Camera F", price: 15000, category: "Camera", image: "Camera/Camera - 6.jpg" },
{ id: 67, name: "Camera G", price: 16000, category: "Camera", image: "Camera/Camera - 7.jpg" },
{ id: 68, name: "Camera H", price: 17000, category: "Camera", image: "Camera/Camera - 8.jpg" },
{ id: 69, name: "Camera I", price: 18000, category: "Camera", image: "Camera/Camera - 9.jpg" },
{ id: 70, name: "Camera J", price: 19000, category: "Camera", image: "Camera/Camera - 10.jpg" },
{ id: 71, name: "Camera K", price: 20000, category: "Camera", image: "Camera/Camera - 11.jpg" },
{ id: 72, name: "Camera L", price: 21000, category: "Camera", image: "Camera/Camera - 12.jpg" },

// Smartwatch Category
{ id: 81, name: "Smartwatch A", price: 3000, category: "Smartwatch", image: "Smartwatch/Smartwatch - 1.jpg" },
{ id: 82, name: "Smartwatch B", price: 3200, category: "Smartwatch", image: "Smartwatch/Smartwatch - 2.jpg" },
{ id: 83, name: "Smartwatch C", price: 3400, category: "Smartwatch", image: "Smartwatch/Smartwatch - 3.jpg" },
{ id: 84, name: "Smartwatch D", price: 3600, category: "Smartwatch", image: "Smartwatch/Smartwatch - 4.jpg" },
{ id: 85, name: "Smartwatch E", price: 3800, category: "Smartwatch", image: "Smartwatch/Smartwatch - 5.jpg" },
{ id: 86, name: "Smartwatch F", price: 4000, category: "Smartwatch", image: "Smartwatch/Smartwatch - 6.jpg" },
{ id: 87, name: "Smartwatch G", price: 4200, category: "Smartwatch", image: "Smartwatch/Smartwatch - 7.jpg" },
{ id: 88, name: "Smartwatch H", price: 4400, category: "Smartwatch", image: "Smartwatch/Smartwatch - 8.jpg" },
{ id: 89, name: "Smartwatch I", price: 4600, category: "Smartwatch", image: "Smartwatch/Smartwatch - 9.jpg" },
{ id: 90, name: "Smartwatch J", price: 4800, category: "Smartwatch", image: "Smartwatch/Smartwatch - 10.jpg" },
{ id: 91, name: "Smartwatch K", price: 5000, category: "Smartwatch", image: "Smartwatch/Smartwatch - 11.jpg" },
{ id: 92, name: "Smartwatch L", price: 5200, category: "Smartwatch", image: "Smartwatch/Smartwatch - 12.jpg" },


// Tablet
{ id: 101, name: "Tablet A", price: 10000, category: "Tablet", image: "Tablet/Tablet - 1.jpg" },
{ id: 102, name: "Tablet B", price: 11000, category: "Tablet", image: "Tablet/Tablet - 2.jpg" },
{ id: 103, name: "Tablet C", price: 12000, category: "Tablet", image: "Tablet/Tablet - 3.jpg" },
{ id: 104, name: "Tablet D", price: 13000, category: "Tablet", image: "Tablet/Tablet - 4.jpg" },
{ id: 105, name: "Tablet E", price: 14000, category: "Tablet", image: "Tablet/Tablet - 5.jpg" },
{ id: 106, name: "Tablet F", price: 15000, category: "Tablet", image: "Tablet/Tablet - 6.jpg" },
{ id: 107, name: "Tablet G", price: 16000, category: "Tablet", image: "Tablet/Tablet - 7.jpg" },
{ id: 108, name: "Tablet H", price: 17000, category: "Tablet", image: "Tablet/Tablet - 8.jpg" },
{ id: 109, name: "Tablet I", price: 18000, category: "Tablet", image: "Tablet/Tablet - 9.jpg" },
{ id: 110, name: "Tablet J", price: 19000, category: "Tablet", image: "Tablet/Tablet - 10.jpg" },
{ id: 111, name: "Tablet K", price: 20000, category: "Tablet", image: "Tablet/Tablet - 11.jpg" },
{ id: 112, name: "Tablet L", price: 21000, category: "Tablet", image: "Tablet/Tablet - 12.jpg" },


];


const categories = ["Mobile", "Laptop", "Headphones", "Camera", "Smartwatch", "Tablet"];
const productList = document.getElementById("productList");
const cart = {};

categories.forEach(category => {
  const section = document.createElement("div");
  section.id = category;
  section.className = "product-section";

  section.innerHTML = `
    <h2 class="category-title">${category}s</h2>
    <div class="row">
      ${products.filter(p => p.category === category).map(product => `
        <div class="col-md-3">
          <div class="card mb-3">
            <div class="position-relative">
              <img src="${product.image}" class="card-img-top" />
              <div class="category-label text-white px-2 py-1 position-absolute top-0 start-0 bg-dark bg-opacity-50">
                ${product.category}
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p>⭐ 4.5 Rating</p>
              <p>Price: ₹${product.price}</p>
              <button class="btn btn-success buy-now" data-id="${product.id}">Buy Now</button>
              <button class="btn btn-warning add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  productList.appendChild(section);
});


// Handle buy/add buttons
document.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (!id) return;

  const product = products.find((p) => p.id == id);
  if (!product) return;

  if (e.target.classList.contains("buy-now")) {
    document.getElementById("hiddenProductName").value = product.name;
    document.getElementById("hiddenProductPrice").value = product.price;

    autofillForm(); // ✅ autofill name/email
    bootstrap.Modal.getOrCreateInstance(document.getElementById("buyNowModal")).show();
  }

  if (e.target.classList.contains("add-to-cart")) {
    if (!cart[id]) {
      cart[id] = { ...product, qty: 1 };
    } else {
      cart[id].qty += 1;
    }
    updateCartModal();
    document.getElementById("cartCount").textContent = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  }
});

// Autofill form fields with stored login info
function autofillForm() {
  const fullNameInput = document.getElementById("fullNameInput");
  const emailInput = document.getElementById("emailInput");

  const username = localStorage.getItem("username") || "";
  const email = localStorage.getItem("email") || "";

  if (fullNameInput) fullNameInput.value = username;
  if (emailInput) emailInput.value = email;
}

// Update cart modal content
function updateCartModal() {
  const tbody = document.getElementById("cartItems");
  tbody.innerHTML = "";
  let total = 0;

  Object.values(cart).forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.image}" width="60" /></td>
      <td>${item.name}</td>
      <td>x${item.qty}</td>
      <td>₹${item.price}</td>
      <td>₹${item.qty * item.price}</td>
    `;
    total += item.qty * item.price;
    tbody.appendChild(row);
  });

  document.getElementById("grandTotal").textContent = total;
}

// Open cart modal
document.getElementById("cartButton").addEventListener("click", () => {
  updateCartModal();
  new bootstrap.Modal(document.getElementById("cartModal")).show();
});

// Reset cart modal on close
document.getElementById("cartModal").addEventListener("hidden.bs.modal", () => {
  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("grandTotal").textContent = "₹0";

  const modalBackdrop = document.querySelector(".modal-backdrop");
  if (modalBackdrop) modalBackdrop.remove();

  document.body.classList.remove("modal-open");
  document.body.style.overflow = "auto";
});

// Checkout cart → open form modal
document.getElementById("checkoutCart").addEventListener("click", () => {
  bootstrap.Modal.getInstance(document.getElementById("cartModal"))?.hide();

  let summary = "";
  let total = 0;

  Object.values(cart).forEach((item) => {
    summary += `${item.name} (Qty: ${item.qty}), `;
    total += item.qty * item.price;
  });

  summary = summary.trim().slice(0, -1);
  document.getElementById("hiddenProductName").value = summary;
  document.getElementById("hiddenProductPrice").value = total;

  autofillForm(); // ✅ autofill name/email
  new bootstrap.Modal(document.getElementById("buyNowModal")).show();
});

// Handle form submit
document.getElementById("buyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("hiddenProductName").value;
  const price = document.getElementById("hiddenProductPrice").value;

  const productSummary = name.split(',').map(item => item.trim()).join(', ');
  alert(`✅ Your products "${productSummary}" of ₹${price} have been dispatched!`);

  document.getElementById("buyForm").reset();
  location.reload();
});

// Show user greeting
function displayUsername() {
  const username = localStorage.getItem("username");
  const usernameDisplay = document.getElementById("usernameDisplay");

  if (username && usernameDisplay) {
    usernameDisplay.textContent = `Hi, ${username}`;
  }
}

// Setup login/logout button
function setupLoginLogoutButton() {
  const btn = document.getElementById("loginLogoutBtn");
  const username = localStorage.getItem("username");

  if (username) {
    btn.textContent = "Logout";
    btn.classList.replace("btn-success", "btn-danger");

    btn.onclick = () => {
      localStorage.clear();
      window.location.href = "1_login.html";
    };
  } else {
    btn.textContent = "Login";
    btn.classList.replace("btn-danger", "btn-success");

    btn.onclick = () => {
      window.location.href = "1_login.html";
    };
  }
}

// Initial setup on page load
window.addEventListener("load", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userGreeting = document.getElementById("usernameDisplay");
  const cartCount = document.getElementById("cartCount");

  const username = localStorage.getItem("username");

  if (username) {
    userGreeting.textContent = `Hi, ${username}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cartItems.length;

    logoutBtn.onclick = () => {
      localStorage.clear();
      window.location.reload();
    };
  } else {
    userGreeting.textContent = "";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";

    loginBtn.onclick = () => {
      window.location.href = "1_login.html";
    };
  }

  displayUsername();
  setupLoginLogoutButton();
});
