const btn=document.querySelector("#enviar")
let banco_de_dados=[]
const html = document.querySelectorAll(".html")

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
btn.addEventListener("submit",(evt)=>{
evt.preventDefault()
const nome=document.querySelector("#nome").value
const tel=document.querySelector("#telefone").value
const CPF=document.querySelector("#CPF").value
banco_de_dados.push(nome,tel,CPF)
console.log(banco_de_dados)
})