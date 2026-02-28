// M-Restaurant Ordering System
// Email: medhanitmedi344@gmail.com | Phone: +251 938675525

// EmailJS Configuration (Optional - for automatic email sending)
const EMAILJS_CONFIG = {
  serviceID: "YOUR_SERVICE_ID",
  templateID: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

// Initialize EmailJS
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
})();

// Menu Data
const menuData = [
  // Ethiopian Food
  {
    id: 1,
    name: "Doro Wat",
    category: "ethiopian",
    price: 450,
    image: "image/doro wat.jpg",
    description: "Spicy chicken stew with berbere spices, served with injera",
  },
  {
    id: 2,
    name: "Kitfo",
    category: "ethiopian",
    price: 500,
    image: "image/kitfo.jpg",
    description:
      "Traditional minced beef seasoned with mitmita and niter kibbeh",
  },
  {
    id: 3,
    name: "Chechebsa",
    category: "ethiopian",
    price: 350,
    image: "image/chechebsa.jpg",
    description: "Shredded flatbread mixed with spiced butter and berbere",
  },
  {
    id: 4,
    name: "Tibs",
    category: "ethiopian",
    price: 1000,
    image: "image/tibs.jpg",
    description: "Sautéed meat with onions, garlic, and Ethiopian spices",
  },
  {
    id: 5,
    name: "Shiro",
    category: "ethiopian",
    price: 200,
    image: "image/shiro.jpg",
    description: "Ground chickpeas cooked with berbere and spiced butter",
  },

  // Special Food
  {
    id: 6,
    name: "Pizza",
    category: "special",
    price: 600,
    image: "image/pizza.jpg",
    description: "Wood-fired pizza with fresh mozzarella and toppings",
  },
  {
    id: 7,
    name: "Burger",
    category: "special",
    price: 450,
    image: "image/burger.jpg",
    description: "Juicy beef patty with cheese, lettuce, and special sauce",
  },
  {
    id: 8,
    name: "Roasted Chicken",
    category: "special",
    price: 800,
    image: "image/chicken.jpg",
    description: "Herb-seasoned chicken slow-cooked to perfection",
  },
  {
    id: 9,
    name: "Egg Sandwich",
    category: "special",
    price: 300,
    image: "image/eggsandwich.jpg",
    description: "Fluffy scrambled eggs with bacon and melted cheese",
  },
  {
    id: 10,
    name: "Salad",
    category: "special",
    price: 250,
    image: "image/salad.jpg",
    description: "Fresh mixed vegetables with tangy dressing",
  },

  // Drinks
  {
    id: 11,
    name: "Avocado Juice",
    category: "drinks",
    price: 150,
    image: "image/avocado_juice.jpg",
    description: "Creamy fresh avocado juice",
  },
  {
    id: 12,
    name: "Orange Juice",
    category: "drinks",
    price: 180,
    image: "image/orange_juice.jpg",
    description: "Freshly squeezed orange juice",
  },
  {
    id: 13,
    name: "Mango Juice",
    category: "drinks",
    price: 150,
    image: "image/mango-juice.jpg",
    description: "Sweet tropical mango juice",
  },
  {
    id: 14,
    name: "Pineapple Juice",
    category: "drinks",
    price: 180,
    image: "image/pineapple-juice.jpg",
    description: "Refreshing pineapple juice",
  },
  {
    id: 15,
    name: "Strawberry Juice",
    category: "drinks",
    price: 180,
    image: "image/strawberry_juice.jpg",
    description: "Fresh strawberry juice",
  },
  {
    id: 16,
    name: "Coffee",
    category: "drinks",
    price: 50,
    image: "image/coffee.jpg",
    description: "Traditional Ethiopian coffee",
  },
  {
    id: 17,
    name: "Tea",
    category: "drinks",
    price: 50,
    image: "image/tea.jpg",
    description: "Hot tea",
  },
  {
    id: 18,
    name: "Macchiato",
    category: "drinks",
    price: 70,
    image: "image/macchiato.jpg",
    description: "Espresso with steamed milk",
  },
  {
    id: 19,
    name: "Cappuccino",
    category: "drinks",
    price: 80,
    image: "image/cappuccino.jpg",
    description: "Classic cappuccino",
  },
  {
    id: 20,
    name: "Soft Drinks",
    category: "drinks",
    price: 50,
    image: "image/soft.jpg",
    description: "Coca-Cola, Pepsi, Sprite, Fanta",
  },
  {
    id: 21,
    name: "Tej",
    category: "drinks",
    price: 100,
    image: "image/tejo.jpg",
    description: "Traditional Ethiopian honey wine",
  },
  {
    id: 22,
    name: "Tella",
    category: "drinks",
    price: 100,
    image: "image/tella.jpg",
    description: "Traditional Ethiopian beer",
  },
  {
    id: 23,
    name: "Beer",
    category: "drinks",
    price: 100,
    image: "image/beer.jpg",
    description: "Cold beer",
  },
  {
    id: 24,
    name: "Wine",
    category: "drinks",
    price: 1200,
    image: "image/wine.jpg",
    description: "Premium wine selection",
  },

  // Desserts
  {
    id: 25,
    name: "Cake",
    category: "desserts",
    price: 150,
    image: "image/cake.jpg",
    description: "Delicious homemade cake",
  },
  {
    id: 26,
    name: "Ice Cream",
    category: "desserts",
    price: 120,
    image: "image/ice-cream.jpg",
    description: "Creamy ice cream",
  },
  {
    id: 27,
    name: "Chocolate",
    category: "desserts",
    price: 100,
    image: "image/chocolates.jpg",
    description: "Premium chocolates",
  },
];

// Cart Management
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderMenu("all");
  updateCartCount();
  setupEventListeners();
});

// Render Menu
function renderMenu(category) {
  const menuGrid = document.getElementById("menuGrid");
  const filteredItems =
    category === "all"
      ? menuData
      : menuData.filter((item) => item.category === category);

  menuGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='image/food.jpg'">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">${item.price} ETB</span>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Add to Cart
function addToCart(itemId) {
  const item = menuData.find((i) => i.id === itemId);
  const existingItem = cart.find((i) => i.id === itemId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart();
  updateCartCount();
  showNotification(`${item.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

// Save Cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Show Cart Modal
function showCart() {
  const modal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<div class="empty-cart"><p>Your cart is empty</p></div>';
    cartTotal.textContent = "0";
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price} ETB</p>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    cartTotal.textContent = total;
  }

  modal.classList.add("active");
}

// Update Quantity
function updateQuantity(itemId, change) {
  const item = cart.find((i) => i.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(itemId);
    } else {
      saveCart();
      showCart();
      updateCartCount();
    }
  }
}

// Remove from Cart
function removeFromCart(itemId) {
  cart = cart.filter((i) => i.id !== itemId);
  saveCart();
  showCart();
  updateCartCount();
}

// Clear Cart
function clearCart() {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    saveCart();
    showCart();
    updateCartCount();
  }
}

// Show Checkout
function showCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("cartModal").classList.remove("active");
  const modal = document.getElementById("checkoutModal");
  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
        <div class="summary-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>${item.price * item.quantity} ETB</span>
        </div>
    `,
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  checkoutTotal.textContent = total;

  modal.classList.add("active");
}

// Handle Checkout Form
// Validate Checkout Form
function validateCheckoutForm() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const deliveryOption = document.querySelector(
    'input[name="deliveryOption"]:checked',
  ).value;
  const address = document.getElementById("deliveryAddress").value.trim();

  if (!name) {
    alert("Please enter your name");
    return false;
  }

  if (!phone) {
    alert("Please enter your phone number");
    return false;
  }

  if (deliveryOption === "delivery" && !address) {
    alert("Please enter your delivery address");
    return false;
  }

  return true;
}

// Get Order Data
function getOrderData() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const deliveryOption = document.querySelector(
    'input[name="deliveryOption"]:checked',
  ).value;
  const address = document.getElementById("deliveryAddress").value.trim();
  const tableNumber = document.getElementById("tableNumber").value.trim();
  const instructions = document
    .getElementById("specialInstructions")
    .value.trim();

  const orderDetails = cart
    .map(
      (item) =>
        `${item.name} x ${item.quantity} = ${item.price * item.quantity} ETB`,
    )
    .join("\n");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    name,
    phone,
    email,
    deliveryOption,
    address,
    tableNumber,
    instructions,
    orderDetails,
    total,
  };
}

// Complete Order
function completeOrder() {
  setTimeout(() => {
    cart = [];
    saveCart();
    updateCartCount();
    document.getElementById("checkoutModal").classList.remove("active");
    document.getElementById("checkoutForm").reset();
    showNotification("Order sent successfully! We will contact you soon.");
  }, 1000);
}
// Send Order Automatically via EmailJS
// Send Order Automatically via EmailJS
// Send Order Automatically via EmailJS
// Send Order Automatically via EmailJS
function autoSendOrder() {
  if (!validateCheckoutForm()) return;

  const data = getOrderData();

  // Check if EmailJS is configured
  if (
    EMAILJS_CONFIG.serviceID === "YOUR_SERVICE_ID" ||
    EMAILJS_CONFIG.templateID === "YOUR_TEMPLATE_ID" ||
    EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY"
  ) {
    // EmailJS not configured - use Gmail fallback
    sendViaGmailFallback(data);
    return;
  }

  // Show loading
  showNotification("📤 Sending your order...", 10000);

  // Prepare email template parameters
  const templateParams = {
    to_email: "medhanitmedi344@gmail.com",
    customer_name: data.name,
    customer_phone: data.phone,
    customer_email: data.email || "Not provided",
    service_option:
      data.deliveryOption === "delivery" ? "🚚 Delivery" : "🍽️ Dine-in",
    delivery_info:
      data.deliveryOption === "delivery"
        ? data.address
        : `Table: ${data.tableNumber || "Not specified"}`,
    order_items: data.orderDetails,
    total_amount: data.total + " ETB",
    special_instructions: data.instructions || "None",
    order_date: new Date().toLocaleString(),
  };

  // Send email using EmailJS
  emailjs
    .send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showNotification(
          "✅ Order sent successfully! We will contact you soon.",
        );
        completeOrder();
      },
      function (error) {
        console.error("FAILED...", error);
        alert(
          "❌ Failed to send order. Please try again or contact us directly at:\n\n" +
            "📧 Email: medhanitmedi344@gmail.com\n" +
            "📞 Phone: +251 938675525",
        );
      },
    );
}

// Gmail Fallback - Opens Gmail with order details
// Gmail Fallback - Opens Gmail with order details
// Gmail Fallback - Opens Gmail with order details
// Gmail Fallback - Opens Gmail with order details
// Gmail Fallback - Mobile-optimized version
function sendViaGmailFallback(data) {
    // Simplified order text for mobile
    const orderText = `M-RESTAURANT ORDER #${Date.now().toString().slice(-6)}

Customer: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'None'}

Service: ${data.deliveryOption === 'delivery' ? 'DELIVERY' : 'DINE-IN'}
${data.deliveryOption === 'delivery' ? 'Address: ' + data.address : 'Table: ' + (data.tableNumber || 'Not specified')}

Items:
${cart.map(item => `${item.name} x${item.quantity} = ${item.price * item.quantity} ETB`).join('\n')}

TOTAL: ${data.total} ETB

${data.instructions ? 'Instructions: ' + data.instructions : ''}

M-Restaurant, Adama | +251 938675525`;

    // Simpler Gmail URL
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=medhanitmedi344@gmail.com&su=Order%20${Date.now().toString().slice(-6)}&body=${encodeURIComponent(orderText)}`;

    // Try opening Gmail
    try {
        window.location.href = gmailURL;

        setTimeout(() => {
            if (confirm('Did you send the email?\n\nClick OK if sent.')) {
                completeOrder();
            }
        }, 5000);
    } catch (error) {
        alert('Please call to order:\n+251 938675525\n\nOr email:\nmedhanitmedi344@gmail.com');
    }
}

// Setup Event Listeners
function setupEventListeners() {
  // Category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".category-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu(btn.dataset.category);
    });
  });

  // Cart button
  document.getElementById("cartBtn").addEventListener("click", showCart);

  // Close cart
  document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartModal").classList.remove("active");
  });

  // Clear cart
  document.getElementById("clearCart").addEventListener("click", clearCart);

  // Checkout button
  document
    .getElementById("checkoutBtn")
    .addEventListener("click", showCheckout);

  // Close checkout
  document.getElementById("closeCheckout").addEventListener("click", () => {
    document.getElementById("checkoutModal").classList.remove("active");
  });

  // Auto Send Order button
  document
    .getElementById("autoSendOrder")
    .addEventListener("click", autoSendOrder);

  // Delivery option toggle
  document.querySelectorAll('input[name="deliveryOption"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const addressGroup = document.getElementById("addressGroup");
      const addressField = document.getElementById("deliveryAddress");
      const tableGroup = document.getElementById("tableGroup");
      const tableField = document.getElementById("tableNumber");

      if (e.target.value === "delivery") {
        addressGroup.style.display = "block";
        addressField.required = true;
        tableGroup.style.display = "none";
        tableField.required = false;
      } else {
        addressGroup.style.display = "none";
        addressField.required = false;
        tableGroup.style.display = "block";
        tableField.required = false;
      }
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Close modals on outside click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
}

// Show Notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #d4af37;
        color: #000;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
