


  

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