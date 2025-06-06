const cartDisplay = document.getElementById("cart-count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cartDisplay) {
  cartDisplay.textContent = cart.length;
}

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector(".price").textContent;

    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} تمت إضافته إلى العربة`);
    if (cartDisplay) cartDisplay.textContent = cart.length;
  });
});
