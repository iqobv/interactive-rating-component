const submit = document.querySelector(".submit"),
  rate = document.querySelectorAll(".rate"),
  selected = document.querySelector(".selected");

const stateEnd = document.querySelector(".wrapper__state-end"),
  stateStart = document.querySelector(".wrapper__state-start");

rate.forEach((rateBtns) => {
  rateBtns.addEventListener("click", () => {
    submit.addEventListener("click", () => {
      stateEnd.style.display = "block";
      stateStart.style.display = "none";
      selected.textContent = rateBtns.textContent;
    });
  });
});
