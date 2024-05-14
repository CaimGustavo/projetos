


  
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