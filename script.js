let cart = [];
let cartTotal = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(p);
    });

    cartCount.textContent = cart.length;
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
}