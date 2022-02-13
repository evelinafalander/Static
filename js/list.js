const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const url =
  "https://kea-alt-del.dk/t7/api/products?limit=20&category=" + category;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  document.querySelector(".categoryName").textContent = product.category;
  //grabtempalte

  const template = document.querySelector(".productsTemplate").content;
  //clone it

  const copy = template.cloneNode(true);
  //change content
  copy
    .querySelector("a")
    .setAttribute("href", `productpage.html?id=${product.id}`);

  copy.querySelector(
    ".type"
  ).textContent = `${product.articletype} - ${product.brandname}`;

  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".price").classList.add("OGprice");
  }

  copy.querySelector(".price").textContent = `DKK ${product.price}`;

  copy.querySelector(".sale p").textContent = `DKK ${Math.ceil(
    (1 - product.discount / 100) * product.price
  )}`;
  copy.querySelector(
    ".sale p:nth-child(2)"
  ).textContent = `${product.discount} %`;
  copy.querySelector(
    "article.products img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //grab parent

  const parent = document.querySelector("main");
  //apend

  parent.appendChild(copy);
}
