const api="https://replit.com/@gustavomelechen/Apipromisse-1?v=1"
 fetch(api)
.then(res=>res.json())
let banco_de_dados=[]

const html = document.querySelectorAll(".html")
const logo=document.querySelector("#logo")
const myObserve=new IntersectionObserver((ent)=>{
ent.forEach((entrey)=>{
if(entrey.isIntersecting){
  entrey.target.classList.add("visil")
}else{
entrey.target.classList.remove("html")
}
  
})
  
})
html.forEach((element)=> myObserve.observe(element))
/*
document.querySelector("#enviar").addEventListener("click",(evt)=>{
evt.preventDefault()
const nome=document.querySelector("#nome").value
const tel=document.querySelector("#telefone").value
const CPF=document.querySelector("#CPF").value
banco_de_dados.push(nome,tel,CPF)
localStorage.setItem("dados",banco_de_dados)
console.log(banco_de_dados)
})*/
logo.addEventListener("click",(evt)=>{
window.location.href="Index.html"
console.log("teste")
} )
class MobileNavbar{
  constructor(mobileMenu,navList,navlinks){
  this.mobileMenu=document.querySelector(mobileMenu)
  this.navList=document.querySelector(navList)
  this.navlinks=document.querySelectorAll(navlinks)
  this.activeClass="active"
  this.Click=this.Click.bind(this)
  }
animateLinks(){
  console.log(window)
this.navlinks.forEach((link)=>{
  link.style.animation?(link.style.animation = ""):(link.style.animation =`navLinkFade 0.5s ease 0.3s`);

});
}
Click(){
this.navList.classList.toggle(this.activeClass) 
this.animateLinks()
  
}
addClickEvent(){
this.mobileMenu.addEventListener("click", this.Click)
}
init(){
  if(this.mobileMenu){
  this.addClickEvent()
    console.log("hey")
  }
  return this
}
 
  
}
const mobileNavbar= new MobileNavbar(
".mobile-menu",
".nav-list",
"nav-list li",
  )
mobileNavbar.init()