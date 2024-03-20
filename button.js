const buttons = document.querySelectorAll("button");
const numbers = document.querySelector(".number1");
const cartDrop = document.querySelector(".drop-cart");
const badge = document.querySelector(".badge");
var number = 0;

if (localStorage.getItem("product")) {
  number = JSON.parse(localStorage.getItem("product"));
  badge.innerHTML = number;
  cartDrop.innerHTML = number;
  number = 0;
  badge.hidden = false;
} else {
  badge.hidden = true;
}

numbers.innerText = number;

const numberChange = (par) => {
  if (number > 0 && par == "minusi") {
    number = number - 1;
  } else if (par == "pliusi") {
    number = number + 1;
  } else {
    number = 0;
  }
  numbers.innerText = number;
};

function badgeFun() {
  if (number !== 0) {
    cartDrop.innerHTML = number;
    badge.hidden = false;
    badge.innerHTML = number;
    localStorage.setItem("product", number);
  } else {
    badge.hidden = true;
    cartDrop.innerHTML = "Your cart is empty";
  }
}

buttons[0].addEventListener("click", () => numberChange("minusi"));

buttons[1].addEventListener("click", () => numberChange("pliusi"));

buttons[2].addEventListener("click", badgeFun);
console.dir(badge.hidden);
