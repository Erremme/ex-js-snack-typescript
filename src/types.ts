export type Developer = Dipendente &{
    livelloDiEsperienza : "Junior"| "Mid" | "Senior",
    linguaggi? : string[],
    certificazioni : string[] 

}

export type ProjectManager = Dipendente &{
    teamSize : number | null,
    budgetGestito? : number,
    stakeholderPrincipali : string[] 
}


export type Dipendente = {
    nome : string, 
    cognome : string , 
    annoNascita : number ,
    sesso : "m" | "f" ,
    anniDiServizio : number[]
    readonly emailAziendale :string,
    contratto : "indeterminato" |"determinato" | "freelance" 
    ruolo : Developer| ProjectManager
}

export type Team = {
    nome : string
    progettoAttuale : string | null,
    budget : number ,
    membri : [ProjectManager , Developer , ...Developer[]]
}