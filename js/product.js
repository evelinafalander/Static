const url = "https://kea-alt-del.dk/t7/api/products/1525";

//fetch data

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".productname").textContent =
    product.productdisplayname;
  document.querySelector(
    ".productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimg").alt = product.productdisplayname;
  document.querySelector(".productprice").textContent = product.price;
}
