const listItems = document.querySelectorAll(".list-item");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert("You clicked on " + item.innerText);
  });
});
