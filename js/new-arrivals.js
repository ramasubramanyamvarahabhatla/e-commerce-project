document.addEventListener("DOMContentLoaded", function () {
    const sortSelect = document.getElementById("sortSelect");
    const productGrid = document.querySelector(".product-grid");

    sortSelect.addEventListener("change", function () {
        let products = Array.from(document.querySelectorAll(".product-card"));

        if (sortSelect.value === "lowToHigh") {
            products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (sortSelect.value === "highToLow") {
            products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        } else if (sortSelect.value === "popular") {
            // Most Popular - default order for now
            products.sort(() => 0); // Keeps original order (can later implement based on actual popularity data)
        }

        productGrid.innerHTML = "";
        products.forEach(product => productGrid.appendChild(product));
    });

    document.querySelectorAll(".product-card").forEach(product => {
        product.addEventListener("click", function () {
            const productDetails = {
                image: this.querySelector("img").src,
                name: this.querySelector("h3").textContent,
                price: this.querySelector(".price").textContent
            };

            localStorage.setItem("selectedProduct", JSON.stringify(productDetails));
            window.location.href = "product.html";
        });
    });
});
