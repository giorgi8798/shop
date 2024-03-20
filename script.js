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

const bigPhoto = document.querySelector(".bigPhoto");
const smalPhoto = document.querySelectorAll(".img1");

// console.dir(bigPhoto.src);
// console.log(smalPhoto);
// console.log(smalPhoto[2]);

function changeUrl(x) {
  bigPhoto.src = smalPhoto[x].src;
}
smalPhoto[0].addEventListener("click", () => changeUrl(0));
smalPhoto[1].addEventListener("click", () => changeUrl(1));
smalPhoto[2].addEventListener("click", () => changeUrl(2));
smalPhoto[3].addEventListener("click", () => changeUrl(3));
