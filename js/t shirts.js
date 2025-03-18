document.addEventListener("DOMContentLoaded", function () {
    const sortSelect = document.getElementById("sortSelect");
    const productGrid = document.querySelector(".product-grid");

    // Sorting Logic
    sortSelect.addEventListener("change", function () {
        let products = Array.from(document.querySelectorAll(".product-card"));

        if (sortSelect.value === "lowToHigh") {
            products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (sortSelect.value === "highToLow") {
            products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        } else if (sortSelect.value === "popular") {
            products.sort((a, b) => parseFloat(b.dataset.popularity) - parseFloat(a.dataset.popularity));
        }

        // Remove and re-append sorted products
        productGrid.innerHTML = "";
        products.forEach(product => productGrid.appendChild(product));
    });

    // Product Click Event - Redirect to Product Page
    document.querySelectorAll(".product-card").forEach(product => {
        product.addEventListener("click", function () {
            const productDetails = {
                image: this.querySelector("img").src,
                name: this.querySelector("h3").textContent,
                price: this.querySelector(".price").textContent
            };

            // Store product details in localStorage
            localStorage.setItem("selectedProduct", JSON.stringify(productDetails));

            // Redirect to product details page
            window.location.href = "product.html";
        });
    });
});
