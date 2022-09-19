let smallCups = document.querySelectorAll(".cup-small");
let percentage = document.getElementById("percentage");
let liters = document.getElementById("liters");
let remaining = document.getElementById("remaining");

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highLightCup(index));
});

function highLightCup(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  let fullCups = document.querySelectorAll(".cup-small.full").length;
  let totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 25}rem`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
