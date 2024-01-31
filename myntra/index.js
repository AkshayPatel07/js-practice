let bagItems;
onLoad();

function onLoad(){
  let bagStr = localStorage.getItem("bagIt12");
  bagItems = bagStr ? JSON.parse(bagStr) : [];
  displayItemsOnHomePage();
  displayBagItems();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem("bagIt12", JSON.stringify(bagItems));
  displayBagItems();
}

function displayBagItems(){
  let bagItemsCount = document.querySelector(".bagItemCount");
  if(bagItems.length > 0){
    bagItemsCount.style.visibility = "visible";
    bagItemsCount.innerHTML = bagItems.length;
  } else {
    bagItemsCount.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector(".items-container");

  if(!itemsContainerElement){
    return
  }

  let innerHtml = "";

  items.forEach(singleItem => {
    innerHtml +=`
    <div class="item-container">
      <img class="item-image" src="${singleItem.image}" alt="item image">
      <div class="rating">
          ${singleItem.rating.stars} ⭐ | ${singleItem.rating.count}
      </div>
      <div class="company-name">${singleItem.company}</div>
      <div class="item-name">${singleItem.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${singleItem.current_price}</span>
          <span class="original-price">Rs ${singleItem.original_price}</span>
          <span class="discount">(${singleItem.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${singleItem.id})">Add to Bag</button>
    </div>`
  });

  itemsContainerElement.innerHTML = innerHtml;
}

let eleElment = document.querySelector(".elm-comtainer");
let fixEle = document.querySelector(".fix-image-wrap");

eleElment.addEventListener("mouseenter", () => {
  fixEle.style.display = "block";
})

eleElment.addEventListener("mouseleave", () => {
  fixEle.style.display = "none";
})

let elms = document.querySelectorAll(".elm");

elms.forEach(e => {
  
  e.addEventListener("mouseenter", () => {
    var eleImg = e.getAttribute("data-src");
    fixEle.style.backgroundImage = `url(${eleImg})`;
  })
})

