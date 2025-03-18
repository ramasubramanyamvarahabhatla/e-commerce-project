document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotalElement = document.getElementById("cartTotal");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotalElement.textContent = "$0.00";
            return;
        }

        cart.forEach((item, index) => {
            let priceNumber = parseFloat(item.price.replace("$", "")); 
            let itemTotal = priceNumber * item.quantity;
            total += itemTotal;

            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <div class="quantity">
                        <button class="decrease" data-index="${index}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="increase" data-index="${index}">+</button>
                    </div>
                    <p class="item-total">Total: $${itemTotal.toFixed(2)}</p>
                    <button class="remove" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    cartItemsContainer.addEventListener("click", function (event) {
        const index = event.target.dataset.index;

        if (event.target.classList.contains("increase")) {
            cart[index].quantity++;
        } else if (event.target.classList.contains("decrease")) {
            cart[index].quantity = Math.max(1, cart[index].quantity - 1);
        } else if (event.target.classList.contains("remove")) {
            cart.splice(index, 1);
        }

        updateCart();
    });

    updateCart();
});
