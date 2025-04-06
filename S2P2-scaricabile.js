// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 345, 2]
const shippingCost = 50
let totCarrello
const sconto30 = 0.3
let utenti = []
utenti.push(marco, paul, amy)
console.log(utenti)
let contrUtenti = 0
let utenteRegistrato = false

function eseguiCodice() {
  let nome = document.getElementById('Nome').value;
  let cognome = document.getElementById('Cognome').value;
  let utenteCheEffettuaLAcquisto = {
    name: nome,
    lastName: cognome,
  }
  for (let utente of utenti) {
    if (utente.name == utenteCheEffettuaLAcquisto.name && utente.lastName == utenteCheEffettuaLAcquisto.lastName) {
      location.href = "index2.html"
      utenteRegistrato = true
      if (utente.isAmbassador) {
        console.log(`Ciao ${utente.name} ${utente.lastName}, sei un nostro Ambassador quindi hai diritto al 30% di sconto`)
        calcoloCarrello()
        totCarrello = totCarrello * sconto30
      } else {
        calcoloCarrello()
      }
      if (totCarrello > 100) {
        console.log(`Complimenti ${utente.name}, hai superato i 100 euro di spesa ed hai diritto alla spedizione gratuita`)
      } else {
        totCarrello += shippingCost
      }
      console.log(`${utente.name} ${utente.lastName}, il totale del tuo carrello è ${totCarrello}`)
    }
    contrUtenti++
  }
  if ((contrUtenti == utenti.length) && (utenteRegistrato == false)) {
    console.log("Utente non registrato")
  }
}

function calcoloCarrello() {
  totCarrello = 0
  for (let i = 0; i < prices.length; i++) {
    totCarrello += prices[i]
  }
}