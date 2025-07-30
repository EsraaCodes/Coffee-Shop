document.addEventListener('DOMContentLoaded', function () {
    // Adding event listeners to add to cart buttons
    document.querySelectorAll('.btn-primary').forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            const itemName = this.getAttribute('data-item-name');
            const itemPrice = parseFloat(this.getAttribute('data-item-price'));
            addToCart(itemName, itemPrice);
        });
    });

    //  event listener to cart icon
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function () {
            showCartModal();
        });
    }

   
    const clearCartButton = document.querySelector('.clear-cart-button');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
});

function addToCart(itemName, itemPrice) {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify({ items: [], total: 0 }));
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.items.push({ name: itemName, price: itemPrice });
    cart.total += itemPrice;
    localStorage.setItem('cart', JSON.stringify(cart));
    showCustomAlert(`"${itemName}" added to cart. Total: $${cart.total.toFixed(2)}`);
}

function clearCart() {
    localStorage.removeItem('cart');
    showCustomAlert("Cart cleared successfully.");
}

function showCustomAlert(message) {
    const modal = document.getElementById('alertModal');
    const modalBody = modal.querySelector('.modal-body');
    modalBody.textContent = message;
    $('#alertModal').modal('show');
}

function showCartModal() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = cartModal.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart && cart.items.length > 0) {
        cart.items.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name}: $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemElement);
        });
        const totalElement = document.createElement('p');
        totalElement.innerHTML = `<strong>Total: $${cart.total.toFixed(2)}</strong>`;
        cartItemsContainer.appendChild(totalElement);
        cartModal.querySelector('.clear-cart-button').style.display = 'block';
    } else {
        cartItemsContainer.textContent = 'Your cart is empty.';
        cartModal.querySelector('.clear-cart-button').style.display = 'none';
    }
    $('#cartModal').modal('show');
}