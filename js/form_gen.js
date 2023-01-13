const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = form.name.value;
  const number = form.number.value;
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
  newDiv.innerHTML = `<div>Name: ${name}</div> <div>Reps: ${number}</div>`;
  newDiv.appendChild(checkboxContainer);
  const output = document.getElementById("output");
  output.appendChild(newDiv);
});
