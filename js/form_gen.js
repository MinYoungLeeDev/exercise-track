const form = document.querySelector("form");
let outputs = [];
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = form.name.value;
  const reps = form.reps.value;
  const numCheckboxes = form.numCheckboxes.value;
  // create the checkboxes 
  const newDiv = document.createElement("div");
  const checkboxContainer = document.createElement("div");
  for (let i = 0; i < numCheckboxes; i++) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = `checkbox${i}`;
    checkboxContainer.appendChild(checkbox);
  }
  newDiv.innerHTML = `<div>Name: ${name}</div> <div>Reps: ${reps}</div>`;
  newDiv.appendChild(checkboxContainer);
  const output = document.getElementById("output");
  output.appendChild(newDiv);
  outputs.push({ name, reps, numCheckboxes });
});

const archiveButton = document.getElementById("archive-button");
archiveButton.addEventListener("click", () => {
  sessionStorage.setItem("outputs", JSON.stringify(outputs));
  window.location.href = "output.html";
});