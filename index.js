const btn=document.querySelector("#enviar")
let banco_de_dados=[]
btn.addEventListener("submit",(evt)=>{
evt.preventDefault()
const nome=document.querySelector("#nome").value
const tel=document.querySelector("#telefone").value
const CPF=document.querySelector("#CPF").value
banco_de_dados.push(nome,tel,CPF)
console.log(banco_de_dados)
})