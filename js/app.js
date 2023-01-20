let button=document.querySelector(".hamburger");
let nav=document.querySelector(".nav-menu");
button.addEventListener("click",function(){
nav.classList.toggle("active");
let img=button.src;
if(img.indexOf('/images/icon-close.svg')==-1){
  document.querySelector(".hamburger").src="./images/icon-close.svg"
}
else{
  document.querySelector(".hamburger").src="./images/icon-hamburger.svg"
}
})
