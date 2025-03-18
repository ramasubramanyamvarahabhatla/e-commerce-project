// Corrected cart clear function
function clearCart() {
    localStorage.removeItem('cart');
    console.log('Cart has been cleared!');
}

// Open Apple Modal
document.getElementById('applePayBtn').addEventListener('click', () => {
    document.getElementById('appleModal').classList.add('active');
});

// Open Google Modal
document.getElementById('googlePayBtn').addEventListener('click', () => {
    document.getElementById('googleModal').classList.add('active');
});

// Confirm Apple Payment
document.getElementById('appleConfirm').addEventListener('click', () => {
    clearCart();
    window.location.href = "order-confirmation.html";
});

// Confirm Google Payment
document.getElementById('googleConfirm').addEventListener('click', () => {
    clearCart();
    window.location.href = "order-confirmation.html";
});

// Standard Pay Now Button
document.getElementById('payNowBtn').addEventListener('click', (e) => {
    e.preventDefault();
    clearCart();
    window.location.href = "order-confirmation.html";
});

// Optional: Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
});
