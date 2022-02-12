let toTopDiv = document.querySelector('.toTop');
window.addEventListener('scroll',function(){
  let pxWin = window.pageYOffset;
  if(pxWin>150){
  toTopDiv.style.display=`block`;
  }
  else {
    toTopDiv.style.display ='none';
  }
});
window.addEventListener(`load`,function() {
  toTopDiv.style.display=`none`;
});



let shoppingBag = [];
let shoppingPrices = [];
let currentProduct = "";
let prodName= "";
let totalItems=0;

let currentPrice=0.00;
let totalPrice= 0.00;
function changeModalInfo(clickedId) {
//  alert(clickedId);
currentProduct= clickedId;
console.log(currentProduct);
console.log(shoppingBag);
 if(clickedId === "product1"){
   document.getElementById("modalImage").src ="images/3.jpg";
   document.getElementById("modalText").textContent="Soft Glass 3D Curved Full Screen Protector for Apple Watch iWatch 7 ";
   document.getElementById("prodSize").textContent="41mm 45mm";
   document.getElementById("origPrice").textContent="$5.95";
   document.getElementById("price").textContent="Now $3.45";
   prodName="ScreenProtector";
   currentPrice=3.45;
   document.getElementById("prodName").textContent=prodName.valueOf();
  }
  if(clickedId === "product2"){

    document.getElementById("modalImage").src ="images/7.jpg";
    document.getElementById("modalText").textContent="Muliplies Color Watch band";
    document.getElementById("prodSize").textContent="For Apple Watch iWatch 7";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$7.50";
    prodName="Colorful Band";
    currentPrice=7.50;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product3"){
    document.getElementById("modalImage").src ="images/p1.jpg";
    document.getElementById("modalText").textContent="Value Pack Wristbands ";
    document.getElementById("prodSize").textContent="Buy two get one free!";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$9.50";
    prodName="Multi Pack Wristband";
    currentPrice=9.50;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product4"){

    document.getElementById("modalImage").src ="images/wb2.jpg";
    document.getElementById("modalText").textContent="4 Colors Samsung Watch 4 band ";
    document.getElementById("prodSize").textContent="41mm 45mm";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$7.50";
    prodName="Samsung Watch Band";
    currentPrice=7.50;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product5"){

    document.getElementById("modalImage").src ="images/wb2.jpg";
    document.getElementById("modalText").textContent="purple wrist band";
    document.getElementById("prodSize").textContent="";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$12.00";
    prodName="Purple Wrist Band";
    currentPrice=12.00;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product6"){
    document.getElementById("modalImage").src ="images/cer1.jpg";
    document.getElementById("modalText").textContent="Ribbon Earrings gift Set ";
    document.getElementById("prodSize").textContent="10mm";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="Hand crafted! Only $5.00";
    prodName="Ribbon Earrings";
    currentPrice=5.00;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product7"){
    document.getElementById("modalImage").src ="images/er1.jpg";
    document.getElementById("modalText").textContent="Small Hoop Earrings";
    document.getElementById("prodSize").textContent="5mm";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$4.50";
    prodName="Small Hoop Earrings";
    currentPrice=4.50;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product8"){
    document.getElementById("modalImage").src ="images/cer3.jpg";
    document.getElementById("modalText").textContent="Pearl Earrings ";
    document.getElementById("prodSize").textContent="";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$4.50";
    prodName="Pearl Earrings";
    currentPrice=4.50;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product9"){
    document.getElementById("modalImage").src ="images/er5.jpg";
    document.getElementById("modalText").textContent="Gemstone Earrings";
    document.getElementById("prodSize").textContent="";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="$17.50";
    prodName="Gemstone Earrings";
    currentPrice=17.50;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
   if(clickedId === "product10"){
    document.getElementById("modalImage").src ="images/ber5.jpg";
    document.getElementById("modalText").textContent="Violet Earrings gift Set ";
    document.getElementById("prodSize").textContent="41mm 45mm";
    document.getElementById("origPrice").textContent="";
    document.getElementById("price").textContent="Buy one get one Free $5.00";
    prodName="Violet Earrings";
    currentPrice=5.00;
    document.getElementById("prodName").textContent=prodName.valueOf();
   }
}
function addToBag(){
  totalItems+=1;
  shoppingBag.push(prodName);
  shoppingPrices.push(currentPrice);
  document.getElementById("cart").textContent= totalItems.valueOf().toString();
  console.log(shoppingBag);
  totalPrice += currentPrice;
}
function passvalue(){

  localStorage.setItem('products',JSON.stringify(shoppingBag));
  localStorage.setItem('prices',JSON.stringify(shoppingPrices));
  localStorage.setItem('totalPrice', totalPrice);
  localStorage.setItem('totalItems',totalItems);
  return false;
}
