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
  this.active="active"
  }
addClickEvent(){
this.mobileMenu.addEventListener("click", ()=> console.log("hey hey"));}
init(){
  if(this.mobileMenu){
  this.addClickEvent()
    
  }
  return this
}
 
  
}
const MobileNavbar= new MobileNavbar(
".mobile-menu",
".nav-list",
"nav-list li",
  )
MobileNavbar.init()