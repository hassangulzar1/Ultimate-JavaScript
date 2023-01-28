addBtn.addEventListener("click", (e) => {
  console.log(e);
  let title = input1.value;
  let location = input2.value;
  let desc = input3.value;
  localStorage.setItem("todo", JSON.stringify([title, location, desc]));
  addTodo.innerHTML = `
  <div id="title">${title}</div>
  <div id="location">${location}</div>
  <div id="Description">${desc}</div>
  <div id="action">
    <button id="removeBtn" class="secondaryBtn">Remove</button>
  </div>
  `;
  // input1.value = "";
  // input2.value = "";
  // input3.value = "";
});

// Removing
removeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("todo");
  addTodo.innerHTML = `
  <div id="title"></div>
  <div id="location"></div>
  <div id="Description"></div>
`;
});
