document.addEventListener("DOMContentLoaded", function () {
    const productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (productData) {
        document.getElementById("productImage").src = productData.image;
        document.getElementById("productName").textContent = productData.name;
        document.getElementById("productPrice").textContent = productData.price;
    }

    // Add to Cart Functionality
    document.getElementById("addToCartBtn").addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Check if the item is already in the cart
        let existingItem = cart.find(item => item.name === productData.name);
        
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if exists
        } else {
            productData.quantity = 1; // Set initial quantity
            cart.push(productData);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to Cart!");
    });
});
