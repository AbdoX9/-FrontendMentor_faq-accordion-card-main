let question = document.querySelectorAll(".question");
let quest = document.querySelector(".question");
let arrow = document.querySelector(".arrow");
let faq = document.querySelector(".faq");
let appearll = document.querySelectorAll(".appear");
let answer = document.querySelector(".answer");
let answerall = document.querySelectorAll(".answer");

faq.onclick = function (e) {
  question.forEach(function (e) {
    e.classList.remove("active");
    e.classList.add("activex");
  });
  if (
    e.target.classList.contains("questions") ||
    e.target.classList.contains("arrow")
  ) {
    e.target.parentElement.parentElement.classList.toggle("active");
    e.target.parentElement.parentElement.classList.toggle("activex");
  }
};
