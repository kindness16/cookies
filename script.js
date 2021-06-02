const input = document.getElementById("input");
const lists = document.querySelector(".lists");

const btn = document.querySelector(".add");

btn.addEventListener("click", (add) => {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  lists.append(li);
  if (input.value == 0) {
    alert("Введите что нибудь");
  }
  localStorage.setItem("first", input.value);
  const nameStr = localStorage.getItem("first");
  console.log(nameStr);
});
    