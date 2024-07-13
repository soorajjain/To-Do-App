const handleSubmit = (event) => {
  event.preventDefault();
  console.log("hey");

  const inputValue = document.getElementById("todo").value;
  console.log(inputValue);

  const ul = document.getElementById("ul");
  const li = document.createElement("li");

  li.innerHTML = `${inputValue} <button class ="delete" >Delete</button>`;

  console.log(li);
  ul.appendChild(li);

  document.getElementById("todo").value = "";

  li.querySelector(".delete").addEventListener("click", () => {
    ul.removeChild(li);
  });
};
