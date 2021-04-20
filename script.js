const labels = document.querySelectorAll(".form-control label");
//splits the label,maps it into an array inclding the inputted data, joins it all back together
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span> `
    )
    .join("");
});
