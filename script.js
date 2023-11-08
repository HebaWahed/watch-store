var allProducts=document.querySelectorAll(".products li")
var div1=document.querySelector("#content")
var btn1=document.querySelector("#show")
var div2=document.querySelector("#content2")

var total=0;
allProducts.forEach( function (item) {
  item.onclick= function(){
    total += +(item.getAttribute("price"))
    div1.innerHTML+=item.textContent + "  " 
    if(div1.innerHTML!=" "){
          btn1.style.display="block"
          
    }
  }
})
btn1.onclick= function(){
  div2.innerHTML=total
}





