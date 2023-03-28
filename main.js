const nome = prompt("Inserisci il tuo nome");
const cognome = prompt("Inserisci il tuo cognome");
const colore = prompt("Inserisci il tuo colore preferito");
const numero1 = prompt("Scegli un numero");
const numero2 = prompt("Scegli un altro numero");
const numeropassword = numero1 / numero2



let passwordWannabeLog = `
---------- Password Generator ----------
>Informazioni Generiche
Nome: ${nome}
Cognome: ${cognome}

>Informazioni Secondarie
Colore preferito: ${colore}
Primo numero: ${numero1}
Secondo numero: ${numero2}

Password: ${nome + cognome + colore + numeropassword}

----------------------------------------
`

let passwordWannabe = `
${nome+cognome+colore+numeropassword}
`

console.log(passwordWannabeLog)

document.getElementById("password-generator").innerHTML = passwordWannabe;