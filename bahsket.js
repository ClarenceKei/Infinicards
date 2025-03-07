let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total = Math.round((total + price) * 100) / 100; // Ensure total is rounded to 2 decimals
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total");

    // Clear previous cart items
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`; // Fix price display

        // Remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => removeFromCart(index);
        
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });

    totalPrice.textContent = `$${total.toFixed(2)}`; // Ensure total is rounded correctly
}

function removeFromCart(index) {
    total = Math.round((total - cart[index].price) * 100) / 100; // Fix rounding
    cart.splice(index, 1);
    updateCart();
}

// Function to add items to localStorage
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
   
     cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to basket!");
}

// Function to handle checkout process
function checkout(){
    // Save the cart data for the payment page
    localStorage.setItem("checkout", JSON.stringify(checkout));

    // Redirect to payment page
    window.location.href="file:///H:/VS%20Code/Dropshipping%20website%20project/Checkout%20page.html";
}

function loadPayment() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let paymentTable = document.getElementById("payment-items");
    let totalPrice = 0;

    paymentTable.innerHTML = ""; // Clear previous items

    cart.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${item.name}</td><td>$${item.price}</td>`;
        paymentTable.appendChild(row);
        totalPrice += item.price;
    });

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

// Function to simulate payment completion
function completePurchase() {
    alert("Payment Successful! Thank you for your purchase.");
    localStorage.removeItem("cart"); // Clear cart after purchase
    window.location.href = "index.html"; // Redirect to home
}

// Ensure payment page loads cart items
if (window.location.pathname.includes("Checkout page.html")) {
    loadPayment();
}

function validateCreditCardInput(event) {
    // Allow only numeric input
    let input = event.target;
    input.value = input.value.replace(/\D/g, ''); // Remove any non-digit characters

    // Enforce max length of 16 digits
    if (input.value.length > 16) {
      input.value = input.value.slice(0, 16);
    }
  }

function submits() {
    alert("Submitted! Thank you!");
    window.location.href = "index.html"; // Redirect to home
}
