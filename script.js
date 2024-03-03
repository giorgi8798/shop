const dropCart = document.querySelector(".drop-cart");
const cart = document.querySelector(".cart");
var display = "";
cart.addEventListener("click", () => {
  if (display == "block") {
    dropCart.style.display = "none";
  } else {
    dropCart.style.display = "block";
  }
  display = dropCart.style.display;
});
