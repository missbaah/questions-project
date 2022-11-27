//using selectors inside the element
// traversing the dom

displayBtn = document.querySelector(".question-btn");
plusSign = document.querySelector(".plus-icon");
minusSign = document.querySelector(".minus-icon");
qtn = document.querySelectorAll(".question");

console.log(displayBtn);

displayBtn.addEventListener("click", () => {
  qtn.forEach((e) => {
    e.classList.add("show-text");
  });
});
