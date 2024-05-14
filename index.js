


  

    vt)=>{
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