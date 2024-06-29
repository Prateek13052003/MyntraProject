
let bagItemObjects;
onLoad(); 
function onLoad(){
  loadBagItemsObjects();
  displayBagItems();
}
function loadBagItems(){
console.log(bagItems);
bagItemObjects=bagItems.map(itemId=>{
  for(let i=0;i<bagItems.length;i++){
    if(itemId==items[i].id){
      return items[i];
    }
  }
});
console.log(bagItemObjects);
}
function displayBagItems(){

  let containerElement= document.querySelector('.bag-items-container');
  let innerHTML='';
  bagItemObjects.array.forEach(bagItem => {
    innerHTML+= generateItemHTML(bagItem);
  });
  containerElement.innerHTML=innerHTML;
 //ontainerElement.innerHTML=
}
function generateItemHTML(item){
  `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${'item.company'}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">${item.orignal_price}</span>
      <span cl ass="discount-percentage">${item.discount_percentage}</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period}days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days"> ${item.delievery_date }</span>
    </div>
  </div>

  <div class="remove-from-cart"onclick="removeFromBag(${item.id})">X</div>
</div>`;
}