const elTabBtns = document.querySelectorAll(".tab-btn");
const elArticleAbout = document.querySelector(".about");
const elContentDivs = document.querySelectorAll(".content");

elArticleAbout.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    elTabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    elContentDivs.forEach((item) => {
      item.classList.remove("active");
      if (id === item.id) {
        item.classList.add("active");
      }
    });
  }
});
