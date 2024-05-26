
let banco_de_dados=[]
console.log(window)
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

document.querySelector(".enviar").addEventListener("click",(evt)=>{
evt.preventDefault()
const nome=document.querySelector("#nome").value
const tel=document.querySelector("#telefone").value
const CPF=document.querySelector("#CPF").value
banco_de_dados.push(nome,tel,CPF)
localStorage.setItem("dados",banco_de_dados)
console.log(banco_de_dados)
})
logo.addEventListener("click",(evt)=>{
window.location.href="index.html"
} )