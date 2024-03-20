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

const bigPhoto = document.querySelectorAll(".bigPhoto");
const smalPhoto = document.querySelectorAll(".img1");
const slideBtn = document.querySelectorAll(".slide-btn");
const slideOp = document.querySelector(".slideOp");
const slide = document.querySelector("#slide");
console.log(bigPhoto);
console.log(smalPhoto);

function changeUrl(x) {
  bigPhoto[0].src = smalPhoto[x].src;
}
smalPhoto[0].addEventListener("click", () => changeUrl(0));
smalPhoto[1].addEventListener("click", () => changeUrl(1));
smalPhoto[2].addEventListener("click", () => changeUrl(2));
smalPhoto[3].addEventListener("click", () => changeUrl(3));

console.log(slideBtn);
let x = 4;

slideBtn[1].addEventListener("click", () => {
  if (x == 7) {
    x = 4;
    bigPhoto[1].src = "http://127.0.0.1:5500/image/Rectangle%20(1).png";
  } else {
    x += 1;
    bigPhoto[1].src = smalPhoto[x].src;
  }
});
console.dir(bigPhoto[1].src);

slideBtn[2].addEventListener("click", () => {
  if (x <= 4) {
    x = 7;
    bigPhoto[1].src = "http://127.0.0.1:5500/image/Rectangle%20(1).png";
  } else {
    x -= 1;
    bigPhoto[1].src = smalPhoto[x].src;
  }
});

slideOp.addEventListener("dblclick", () => {
  slide.classList = "slide";
});

slideBtn[0].addEventListener("click", () => {
  slide.classList = " slide1";
});
