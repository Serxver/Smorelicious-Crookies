// Add global variable for the cart items and total
let cartItems = [];
let totalAmount = 0;

// Function to add an item to the cart
function addToCart(itemName, price) {
    const item = { name: itemName, price: price };
    cartItems.push(item);
    totalAmount += price;
    alert(`${itemName} added to cart!`);
}

// Function to display cart items in the checkout page
function displayCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    cartItemsDiv.innerHTML = "";

    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = "<p>No items in the cart.</p>";
    } else {
        cartItemsDiv.innerHTML = "<h3>Cart Items:</h3>";

        cartItems.forEach((item) => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            const itemName = document.createElement("p");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `$${item.price}`;

            cartItemDiv.appendChild(itemName);
            cartItemDiv.appendChild(itemPrice);
            cartItemsDiv.appendChild(cartItemDiv);
        });

        totalDiv.textContent = `Total: $${totalAmount.toFixed(2)}`;
    }
}

// Function to place an order
function placeOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
    } else {
        // Here, you can implement your order processing logic
        // For demonstration purposes, we will simply display a success message
        alert("Order placed successfully! Thank you for shopping with us.");
        // Clear the cart and reset the total amount
        cartItems = [];
        totalAmount = 0;
        // Update the cart items display
        displayCartItems();
    }
}
