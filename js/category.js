const url = "https://kea-alt-del.dk/t7/api/categories/";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategories(data);
  });

function handleCategories(data) {
  data.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);

  const template = document.querySelector(".MyCatagories").content;

  const copy = template.cloneNode(true);

  copy
    .querySelector("a")
    .setAttribute("href", `list.html?products&category=${category.category}`);

  copy.querySelector("a.name").textContent = category.category;
  const parent = document.querySelector("main");

  parent.appendChild(copy);
}
