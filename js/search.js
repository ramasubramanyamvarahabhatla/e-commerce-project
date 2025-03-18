const products = [
    { name: "T-shirt with Tape Details", url: "tshirts.html" },
    { name: "Skinny Fit Jeans", url: "jeans.html" },
    { name: "Lightweight Joggers", url: "jeans.html" },
    { name: "Ripped Slim Fit", url: "jeans.html" },
    { name: "Running Sneakers", url: "shoes.html" },
    { name: "Casual Shirt", url: "tshirts.html" }
];

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", function() {
    const input = this.value.trim().toLowerCase();
    suggestionsBox.innerHTML = "";

    if (input.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    if (filteredProducts.length === 0) {
        const noResult = document.createElement("div");
        noResult.classList.add("suggestion-item");
        noResult.innerHTML = "No products found";
        suggestionsBox.appendChild(noResult);
    } else {
        filteredProducts.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("suggestion-item");

            const highlighted = product.name.replace(
                new RegExp(input, "gi"),
                match => `<strong>${match}</strong>`
            );

            item.innerHTML = highlighted;
            item.addEventListener("click", () => {
                window.location.href = product.url;
            });
            suggestionsBox.appendChild(item);
        });
    }

    suggestionsBox.style.display = "block";
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsBox.style.display = "none";
    }
});
