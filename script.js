const addbtn = document.querySelector(".add");
const input = document.querySelector(".input");
const activites = document.querySelector(".activites");

addbtn.addEventListener("click", function () {
  if (input.value != "") {
    let inputTxt = input.value;

    const todo = `
    <li class="">
    <input type="checkbox" class="boxcheck"/>
    <i class="fa-regular fa-square-minus"></i> ${inputTxt}
    </li> `;
    activites.insertAdjacentHTML("afterbegin", todo);
    input.value = "";
    storeDate();
  }
});

const showbtne = document.querySelector(".maindiv");
const yesbtn = document.querySelector(".yes");
const nobtn = document.querySelector(".no");
const popupbtn = document.querySelector(".popup");
const dismissbtn = document.querySelector("#dismiss-popup-btn");

activites.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "input") {
    e.target.parentElement.classList.toggle("done");
    storeDate();
  }
});
activites.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "i") {
    showbtne.classList.add("showbtne");
    storeDate();
  }
  yesbtn.addEventListener("click", function () {
    e.target.parentElement.remove();
    setTimeout(function () {
      showbtne.classList.remove("showbtne");
    }, 50);
    popupbtn.classList.add("newclass");
  });
  nobtn.addEventListener("click", function () {
    showbtne.classList.remove("showbtne");
  });
});
dismissbtn.addEventListener("click", function () {
  popupbtn.classList.remove("newclass");
});

function storeDate() {
  localStorage.setItem("data", activites.innerHTML);
}

function getData() {
  activites.innerHTML = localStorage.getItem("data");
}
getData();
