 export type Dipendente = {nome : "string", 
    cognome : "string" , 
    annoNascita : number ,
    sesso : "m" | "f" ,
    anniDiServizio : number[]
    readonly emmailAziendale :"string",
    contratto : "indeterminato" |"determinato" | "freelance" 
}