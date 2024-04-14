
const palco = document.querySelector(".palco")

const num_objetos = document.querySelector("#num_objetos")
const txt_qtde = document.querySelector("#txt_qtde")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover")

let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas=[]
let numbolas=0


class Bola{
constructor(arrayBolas,palco){
  this.tam=Math.floor(Math.random()*15)+10
  this.r=Math.floor(Math.random()*255)
  this.g=Math.floor(Math.random()*255)
  this.b=Math.floor(Math.random()*255)
  this.pX=Math.floor(Math.random()*(larguraPalco-this.tam))
  this.pY=Math.floor(Math.random()*(alturaPalco-this.tam))
  this.velX=Math.floor(Math.random()*2)+0.5
  this.velY=Math.floor(Math.random()*2)+0.5
  this.dirX=(Math.random()*10)>5?1:-1
  this.dirY=(Math.random()*10)>5?1:-1
  this.palco=palco
  this.arrayBolas=arrayBolas
  this.id=Date.now()+"_"+Math.floor(Math. random()*1000000000)
  this.desenhar()
  this.controle=setInterval(this.controlar,10)
  this.eu=document.getElementById(this.id)
  numbolas++
  num_objetos.innerHTMl=numbolas
}
minhaPos(){
  return this.arrayBolas.indexOf(this)
  
}
remover(){
  clearInterval(this.controle)
  bolas=bolas.filter((b)=>{
    if(b.id!=this.id)
    return b
  })
  this.eu.remove()
  numbolas--
  num_objetos.innerHTML=numbolas
}
desenhar(){
  const div=document.createElement("div")
  div.setAttribute("id",this.id)
  div.setAttribute("class","bola")
  div.setAttribute("style",`left:${this.pX}px;top:${this.pY}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
  this.palco.appendChild(div)
}
colisao(){
  if(this.pX+this.tam >= larguraPalco){
    this.dirX=-1
    
  }else if(this.pX <= 0){
  this.dirX=1}
  
  if(this.pY+this.tam >= alturaPalcoPalco){
    this.dirY=-1
    
  }else if(this.pY <= 0){
  this.dirY=1}
}
controlar(){
this.colisao
this.pX+=this.dirX*this.velX
this.pY+=this.dirX*this.velY
this.eu.setAttribute("style",`left:${this.pX}px;top:${this.pY}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
if((this.pX > larguraPalco)||(this.pY > alturaPalco)){
  this.remover()
  
}

}
}



window.addEventListener("resize",(evt)=>{
 larguraPalco=palco.offsetWidth
 alturaPalco=palco.offsetHeight
  
  
})
btn_add.addEventListener("click",(evt)=>{
const qtde=txt_qtde.value
for(let i =0;i<qtde;i++){
 //instaciar novas bolinhas 
  bolas.push(new Bola(bolas,palco))
}
  
} )

btn_remover.addEventListener("click",()=>{
  bolas.map((b)=>{
    //remover bolinha
    b.remover()
  })
  
} )