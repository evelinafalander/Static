const url = "https://kea-alt-del.dk/t7/api/products";

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

/*
  <template class="productsTemplate onSale">
        <article class="products">
          <a href="productpage.html"
            ><img
              src="images/t-shirt.jpeg"
              alt="Sahara Team India Fanwear Round Neck Jersey"
          /></a>
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
           <p class="type"> type // Brand </p>
          <p class="price">DKK 895</p>
           <div class="sale">
          <p>DKK 1150</p>
          <p>SALE 28%</p>
        </div>
        </article>
      </template>
*/

function showProduct(product) {
  console.log(product);
  //grabtempalte

  const template = document.querySelector(".productsTemplate").content;
  //clone it

  const copy = template.cloneNode(true);
  //change content
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

  copy.querySelector(".sale p").textContent = `DKK ${Math.round(
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
