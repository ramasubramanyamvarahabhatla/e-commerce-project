document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productDetails = {
                image: card.querySelector("img").src,
                name: card.querySelector("h3").textContent,
                price: card.querySelector(".discounted-price").textContent,
                originalPrice: card.querySelector(".original-price").textContent,
                discount: card.querySelector(".discount-badge").textContent
            };
            localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
            window.location.href = "product.html";
        });
    });
});
