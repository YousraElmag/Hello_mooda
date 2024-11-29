

const carrt=document.querySelector(".ysra")
const car=document.querySelector(".car")
const update=document.querySelector(".update")
const tatel=document.querySelector(".total")
const cart=document.querySelector(".ysra div")
const women=document.querySelector('.container-women')
const men=document.querySelector('.container-men') 
const kids=document.querySelector('.container-kids')
const cartlength=document.querySelector(".imo")
const num=document.querySelector(".num")
const xicon=document.querySelector(".ysra i")



// open cart and close ::
car.addEventListener('click',()=>{
 
carrt.style.display='block'

})
xicon.addEventListener('click',()=>{
  carrt.style.display='none'
})
// set all data 
let productwomen=[{
  id:1,
  title:'brand',
  price:22,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37096715_99-99999999_01.jpg?ts=1663766125643&imwidth=507&imdensity=2'
},
{
  id:2,
  title:'brand',
  price:18,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37069096_92-99999999_01.jpg?ts=1666017189982&imwidth=507&imdensity=2'
},
{
  id:3,
  title:'brand',
  price:14,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37029021_99-99999999_01.jpg?ts=1648026406031&imwidth=507&imdensity=2'
},
{
  id:4,
  title:'brand',
  price:12,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37007769_78-99999999_01.jpg?ts=1663323428770&imwidth=507&imdensity=2'

},
{
  id:5,
  title:'brand',
  price:9.5,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37077714_06-99999999_01.jpg?ts=1661268472747&imwidth=507&imdensity=2'
  

},
{
  id:6,
  title:'brand',
  price:20,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/47050270_96-99999999_01.jpg?ts=1666623774321&imwidth=507&imdensity=2'
},]
let prodectmen=[{
  
    id:7,
    title:'brand',
    price:10,
    imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37025911_TM-99999999_01.jpg?ts=1656406823037&imwidth=507&imdensity=2'
    
  
  },{

  id:8,
  title:'brand',
  price:10,
  imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37006304_08.jpg?ts=1659016213614&imwidth=507&imdensity=2'

},
  {
   
    id:9,
    title:'brand',
    price:15,
    imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37057710_37-99999999_01.jpg?ts=1659096772557&imwidth=507&imdensity=2'
  
  },
  {
    id:10,
    title:'brand',
    price:30,
    imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37047713_32-99999999_01.jpg?ts=1663257343280&imwidth=507&imdensity=2'
  
  },
  {
    id:11,
    title:'brand',
    price:35,
    imgurl:'https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47030905_08.jpg?ts=1666008178629&imwidth=507&imdensity=2'
  
  },
  {
    id:12,
    title:'brand',
    price:8,
    imgurl:'https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/47000026_32-99999999_01.jpg?ts=1665491566293&imwidth=507&imdensity=2'
    
  
  }]
  let prodectkids=[{
   
    
      id:13,
      title:'brand',
      price:20,
      imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37017750_99.jpg?ts=1666276577720&imwidth=507&imdensity=2'
      
    
    },
    {
      id:14,
      title:'brand',
      price:23,
      imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37013254_37.jpg?ts=1660200603701&imwidth=507&imdensity=2'
      
    
    },
    {
      id:15,
      title:'brand',
      price:20,
      imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37023253_40.jpg?ts=1667892827631&imwidth=507&imdensity=2'
      
    
    },
    {
      id:16,
      title:'brand',
      price:20,
      imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37022003_82-99999999_01.jpg?ts=1660659176383&imwidth=507&imdensity=2'
      
    
    },
    {
      id:17,
      title:'brand',
      price:20,
      imgurl:'https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37012005_50.jpg?ts=1655460530707&imwidth=507&imdensity=2'
      
    
    },
    {
      id:18,
      title:'brand',
      price:20,
      imgurl:"https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37087734_85_D5.jpg?ts=1665138899684&imwidth=507&imdensity=2"
      
    
    },]
  

// add data into html 
function drawproduct(){
  let product=productwomen.map((item)=>{
    return   ` 
    
    
        <div class="box">
            <img class="imo" src="${item.imgurl}" alt="">
            <div class="size">
               
                <button onclick="addtocart(${item.id})" class="btn cart-btn">add to cart</button>
                
            </div>
            
                
            <div class="price">
                <span class="sale">$${item.price}</span><span class="actual">$40
                    
                </span>
                </div>
        </div>
        
          </div>
      `
  })
  .join("");

women.innerHTML=product
  
}


  

 
// add items to cart 
let datapro=[]
let overprice=0;
function addtocart(id){
let chooseitem=productwomen.find((item) => item.id === id)
overprice +=parseInt(chooseitem.price,10);
  tatel.innerHTML=`$ ToTAL:${overprice}`
  
  num.innerHTML=overprice
  num.style.display='block'
    cart.innerHTML +=`
    <div class="container">
    <img src="${chooseitem.imgurl}">
    <div class="title"><p>${chooseitem.title}</p></div>
        <div class="price"><p>${chooseitem.price}</p></div>
  
  
  </div>`
  
 
  
  //  save items in localstorage
datapro.push(chooseitem)
localStorage.setItem('prodect',JSON.stringify(datapro))

}
drawproduct()


function drawproduct2(){
  let product2=prodectmen.map((item)=>{
    return  ` 
    
    
        <div class="box">
            <img class="imo" src="${item.imgurl}" alt="">
            <div class="size">
               
                <button onclick="addtocart2(${item.id})" class="btn cart-btn">add to cart</button>
              
            </div>
            
                
            <div class="price">
                <span class="sale">$${item.price}</span><span class="actual">$40
                    
                </span>
                </div>
        </div>
        
          </div>
      `
      
  })
  .join("");

  men.innerHTML=product2
  
}


function addtocart2(id){
  let chooseitem2=prodectmen.find((item) => item.id === id)
  overprice +=parseInt(chooseitem2.price,10);
  tatel.innerHTML=`$ ToTAL:${overprice}`

  num.innerHTML=overprice
  num.style.display='block'
    cart.innerHTML +=`
    <div class="container">
    <img src="${chooseitem2.imgurl}">
    <div class="title"><p>${chooseitem2.title}</p></div>
        <div class="price"><p>${chooseitem2.price}</p></div>
  
  
  </div>`
  
 
  
   
datapro.push(chooseitem2)
localStorage.setItem('prodect',JSON.stringify(datapro))

}

function drawproduct3(){
  let product3=prodectkids.map((item)=>{
    return ` 
    
    
        <div  class="box">
            <img class="imo" src="${item.imgurl}" alt="">
            <div class="size">
              
                <button onclick="addtocart3(${item.id})" class="btn cart-btn">add to cart</button>
             
            </div>
            
                
            <div class="price">
                <span class="sale">$${item.price}</span><span class="actual">$40
                    
                </span>
                </div>
        </div>
        
          </div>
      `
  })
  .join("");

  kids.innerHTML=product3
  
}

function addtocart3(id){
  let chooseitem3=prodectkids.find((item) => item.id === id)
  overprice +=parseInt(chooseitem3.price,10);
  tatel.innerHTML=`$ ToTAL:${overprice}`

  num.innerHTML=overprice
  num.style.display='block'
  cart.innerHTML +=`
  <div class="container">
  <img src="${chooseitem3.imgurl}">
  <div class="title"><p>${chooseitem3.title}</p></div>
      <div class="price"><p>${chooseitem3.price}</p></div>


</div>`


 
datapro.push(chooseitem3)
localStorage.setItem('prodect',JSON.stringify(datapro))



}


drawproduct()
drawproduct3()
drawproduct2()

// make scroll to page
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000 ? span.style.visibility="visible" : span.style.visibility="hidden"
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// make slider
var i=0

var images=[]
var time=1000;
images[0]='https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37098259_91-99999999_01.jpg?ts=1663930569452&imwidth=507&imdensity=2'
images[1]='https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37013255_56-99999999_01.jpg?ts=1660895798312&imwidth=507&imdensity=2'
images[2]='https://st.mngbcn.com/rcs/pics/static/T3/fotos/outfit/S20/37005933_49-99999999_01.jpg?ts=1658492173476&imwidth=507&imdensity=2'

function changeimage(){
  document.slide.src=images[i]
  if(i<images.length-1){
    i++;
  }else{
    i=0
  }
  setTimeout("changeimage()",time)
}  

changeimage()


// make event in news section
const activ=()=>{
    update.style.display="block"
}
