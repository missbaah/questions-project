// traversing the dom

displayBtns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

displayBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    // console.log(question);
    question.classList.toggle("show-text");
    questions.forEach((element) => {
      if (element !== question) {
        element.classList.remove("show-text");
      }
    });
  });
});

//using selectors inside the element

// const questions = document.querySelectorAll(".question");

// questions.forEach((qtn) => {
//   const btn = qtn.querySelector(".question-btn");
//   btn.addEventListener("click", () => {
//     questions.forEach((e) => {
//       if (e !== qtn) {
//         e.classList.remove("show-text");
//       }
//     });
//     qtn.classList.toggle("show-text");
//   });
// });
