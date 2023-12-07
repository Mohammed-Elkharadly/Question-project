const contentContainer = document.querySelectorAll(".content-container");

contentContainer.forEach(function (content) {
  const btnPlus = content.querySelector(".btn-plus");
  const btnMinus = content.querySelector(".btn-minus");
  const answer = content.querySelector(".answer");
  btnPlus.addEventListener("click", function (e) {
    answer.classList.add("show-text");
    btnMinus.classList.add("show-text");
    e.currentTarget.classList.add("hide-text");
    e.currentTarget.classList.remove("show-text");
  });

  btnMinus.addEventListener("click", function (e) {
    answer.classList.remove("show-text");
    btnPlus.classList.remove("hide-text");
    e.currentTarget.classList.remove("show-text");
  });
});
