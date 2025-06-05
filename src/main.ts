
const  dati : unknown = []

if (typeof dati === "string"){
  console.log(dati.toLowerCase())
}else if (typeof dati === "number"){
  console.log(dati * 2)
    
}else if (typeof dati === "boolean" ){
    dati ===  true ? console.log("Si") : 
    console.log("No")
}else{
  console.log("Il tipo non supportato")
}