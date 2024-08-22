const timer=document.querySelector(".time")
const tmp=Date.now()
const contador=()=>{
const tmpatual=Date.now() 
let cont=tmpatual-tmp
let seg=Math.floor((tmpatual-tmp)/1000)
timer.innerHTML=console.log(seg)

}
setInterval(contador, 1000);
let banco_de_dados=[]
const face=document.querySelector("#face")
const insta=document.querySelector("#insta")
const x=document.querySelector("#x")
const yt=document.querySelector("#yt")
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
window.location.href="Index.html"})

face.addEventListener("click",(evt)=>{
window.location.href="https://www.facebook.com/gustavo.donascimento.5667?mibextid=ZbWKwL"})

insta.addEventListener("click",(evt)=>{
window.location.href="https://www.instagram.com/gustavo_nascimento_melechenco/"})

x.addEventListener("click",(evt)=>{
window.location.href="Index.html"})

yt.addEventListener("click",(evt)=>{
window.location.href="https://youtube.com/@caimbiotech?si=MPE6yf1qBfVWom64"})

class MobileNavbar{
  constructor(mobileMenu,navList,navlinks){
  this.mobileMenu=document.querySelector(mobileMenu)
  this.navList=document.querySelector(navList)
  this.navlinks=document.querySelectorAll(navlinks)
  this.activeClass="active"
  this.Click=this.Click.bind(this)
  }
animateLinks(){
this.navlinks.forEach((link,index)=>{
  link.style.animation?(link.style.animation = ""):(link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)

})
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
".nav-list li",
  )
mobileNavbar.init()




const ctx = document.getElementById('myChart')
new Chart(ctx, { 
  type: 'bar', 
  data: { 
    labels: ['Soja', 'feijão', 'milho', 'arroz', 'uva', 'batata'],
  datasets: [{ 
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1 
  }] 
    
  },options: { 
    scales: {
    y: { 
    beginAtZero: true } } } });  
  


