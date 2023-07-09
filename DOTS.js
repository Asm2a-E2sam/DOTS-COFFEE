let navbar = document.querySelector('.nav');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchform.classList.remove('active');

}
var searchInput = document.getElementsByClassName("search")[0];
let search_form = document.getElementById("search_form")
let searchform = document.getElementById("search-btn");
searchform.addEventListener("click",()=>{
  if(search_form.style.display =='flex'){
    search_form.style.display='none'
  }else{
    search_form.style.display='flex'
  } 
})

window.scroll = () => {
  navbar.classList.remove('active');
  searchform.classList.remove('active');

}



//  api products

var xhr = new XMLHttpRequest();
xhr.open("GET", "product.json")
xhr.send()

var data;
xhr.addEventListener("load", function () {

  data = JSON.parse(xhr.response)
  //  console.log(xhr.response);
  console.log(data);//array
  let product_curd = [];

  for (let i = 0; i < data.length; i++) {

    let title = data[i].title;
    let ingredients = data[i].ingredients;
    let price = data[i].price;
    let img = data[i].image;
    let rating = data[i].rating.rate;
    let count = data[i].rating.count;
    let description = data[i].description;
    let id = data[i].id;


    // console.log(img);
    // <p class="card-text"> ${rating.rate}</p>
    // <p class="card-text"> ${category}</p>
    //  <p class="card-text"> $${price}</p>

    product_curd +=
      ` 
       <div id="product_curd" class="card" style="width: 18rem;">
       <div id="img">
       <img src=${img} id=${id} class="card-img-top" alt="..."></div>
       <div class="card-body">
         <h2 class="card-title">${title}</h2>
         <p class="card-text"> ${ingredients}</p>
         
         <div>
         <i class="fas fa-star"></i>
         <span> ${rating}</span>
         <i class="fas fa-shopping-cart" id="cart-btn"></i>
         <span> ${count}</span></div>

    
         
         <div class="price">$${price} <span>20.99</span>
         

     
         <a  class="btn btn-primary">
         <i  onclick="sendID_Icon(${id},this)" class="fa-solid fa-cart-shopping " ></i></a></div>
       </div>
     </div>`

  }
  let main = document.getElementById('main');

  main.innerHTML = product_curd;
})




// search // JavaScript


const itemsList = document.createElement("div");
itemsList.classList.add('list')
search_form.appendChild(itemsList)

searchInput.addEventListener("input", e =>{
  itemsList.innerHTML =""
  let value = e.target.value;
  // console.log(value);
  if(value){
    var filteredData=[];
    var regex = new RegExp(`^${value}`, "i");
       filteredData= data.filter((element) => {
         return element.title.match(regex);
    
    })
    itemsList.style.display="flex"
    for(let element of filteredData){
      let newItem = document.createElement("div");
      newItem.classList.add('item');
      newItem.id = element.id
      console.log(element.id);
      newItem.innerHTML = 
            `<img src="${element.image}" id="${element.id}">
            <h3 class="title" onclick="sendID_Icon(${element.id},this)">${element.title}</h3>`
      itemsList.appendChild(newItem)  
    }

    console.log(filteredData);

  }else{
    itemsList.innerHTML =""
    itemsList.style.display = "none"
  }
});




// about

const images = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg', 'imgs/6.jpg', 'imgs/7.jpg'];
const sliderImage = document.getElementById('slider-image');
let currentPosition = 0;
//slider  in top page
function changeImage() {
  currentPosition++;
  if (currentPosition >= images.length) {
    currentPosition = 0;
  }
  sliderImage.src = images[currentPosition];
}

setInterval(changeImage, 1000);


// const reviewSlider = document.querySelector('.review .box-container ');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// let currentPosition1 = 0;
// let i;
// for( i=0; i<reviewarray.length;i++)
//{


// ///carsoul
// function slide(direction) {
//   currentPosition1 += direction * 100;
//   if (currentPosition1 > 0) {
//     currentPosition1 = -200;
//   } else if (currentPosition1 < -200) {
//     currentPosition1 = 0;
//   }
//   reviewSlider.style.transform = `translateX(${currentPosition1}%)`;
// }

// prevButton.addEventListener('click', () => slide(-1));
// nextButton.addEventListener('click', () => slide(1));

setInterval(() => slide(1), 3000);

//poula

// let arr=[1,2,3,4,5,6]
// let i=0
// let j=0
// let k=0
// let v=3
// let count=3
// function croseler() {
//   if(j>5){
//     console.log("reset");
//     j=0
//     i=0
//     k=0
//     v=3
//   }
//     for(i;i<arr.length;i++){
//       document.getElementById(arr[i]).setAttribute("hidden","true")
//     }
//     i=0
//     console.log("i",i);
//     for(j;j<arr.length-v;j++){
//       document.getElementById(arr[j]).removeAttribute("hidden")
//     }
//     console.log("j",j);
//     v--
//     for(k;k<=j-3;k++){
//       document.getElementById(arr[k]).removeAttribute("hidden")
//       document.getElementById(arr[k+1]).removeAttribute("hidden")
//     }
//     console.log("k",k);
//     console.log("v",v);
//     count=j-1
//     console.log(count);


//   }
//   setInterval(croseler(),3000)




//   function croselerback() {
//     if(count>2){
//       console.log("j",j);
//         for(i;i<arr.length;i++){
//           document.getElementById(arr[i]).setAttribute("hidden","true")
//         }
//         i=0
//       document.getElementById(arr[count-1]).removeAttribute("hidden")
//       document.getElementById(arr[count-2]).removeAttribute("hidden")
//       document.getElementById(arr[count-3]).removeAttribute("hidden")
//       count--
//       console.log(count);
//       j=count+1
//       v++
//       k--
//       console.log("j after",j);
//     }
//       if(count==2){
//         count=6
//         j=0
//         i=0
//         k=0
//         v=3
//         for(i;i<arr.length;i++){
//           document.getElementById(arr[i]).setAttribute("hidden","true")
//         }
//         i=0
//       document.getElementById(arr[count-1]).removeAttribute("hidden")
//       document.getElementById(arr[count-2]).removeAttribute("hidden")
//       document.getElementById(arr[count-3]).removeAttribute("hidden")
//       count--
    
    
//       }
//     }


//}
// let reviewcontainer = document.querySelector('.review-container');

// reviewcontainer.innerHTML= reviewarray[i];



//single product
function sendID(target) {
  // console.log(target);
  if (target.tagName == "IMG") {
    // console.log("img",target.id);
    var url = "sigleProduct.html?id=" + target.id
    open(url, "_blank")

  }

}
//////add product
let cart_arr = [];
let items;
function sendID_Icon(id, element) {
  
  if (cart_arr.length == 0) {
    cart_arr.push(id);
    localStorage.setItem("userCart", JSON.stringify(cart_arr));

     items = JSON.parse(localStorage.getItem("userCart"));
    console.log(items);  
      console.log(cart_arr);
  } else {
    let res = cart_arr.find((ele) => ele == id);//CONDITION TO NOT REPEAT PRODUCT ID IN THE CART_ARR

    if (res === undefined) {//لو ال id م موجود يعني م متضاف قبل كده
      cart_arr.push(id);
      localStorage.setItem("userCart", JSON.stringify(cart_arr));
    }else{
      alert('YOU HAVE CHOSEN THIS PRODUCT ONCE,IF U WANT MORE ONE PLSES SELECT FROM YOUR CART')
    }
  }

  $("element").attr("disabled", "disabled");
  // console.log(cart_arr);  !=  console.log(items);
// 
$(".cartProduct").html(cart_arr.length);

}


var cart = document.getElementsByClassName('fas fa-shopping-cart')[0];

cart.addEventListener('click', function () {
  // var cartcontainer=document.getElementsByClassName('cartcontainer')[0];
  window.open('cart.html')
  // cartcontainer.innerHTML=`<h1>esraa</h1>`;
  // console.log(cart);
});


