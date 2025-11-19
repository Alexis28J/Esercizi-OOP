console.log("Esercizi OOP");
//scrivere nel terminale "node .\Main.js (nome del js presente)" per stamparlo nel terminale
//(scrivere node + spazio + iniziale del js e tab per autocompletarlo)


//Creare una classe Beverage con le seguenti proprietà:
//name, producer, yob (year of bottling), quantity, alcohol

//Creare una classe Beer che estende Beverage con le seguenti proprietà:
//type, color

const moretti = new Beer ('moretti ipa', 'moretti s.p.a', 2024, 66, 4, 'ipa', 'blonde');

//Creare una classe Wine che estende Beverage con le seguenti proprietà:
//vite, location

const dolcetto = new Wine ('dolcetto bella vita', 'cantine bella vita', 2020, 75, 11, 'dolcetto', 'alba')

//Creare una classe PremiumWine che estende Wine con le seguenti proprietà:
//certification

const barolo = new PremiumWine ('brunate barolo', 'cantine brugnate', 2021, 75, 14, 'nebbiolo da barolo', 'piemonte', 'D.O.C.G');


//Creare i toString di tutte le classi

console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());


//Aggiungere una proprietà chiamata bottleNumber a Beverage e un metodo chiamato sellBottles
//che prende come input le bottiglie da vendere e, se ci sono abbastanza bottiglie le rimuove dal numero totale,
//altrimenti non fa nulla e logga l'errore


//Aggiungere una proprietà non esposta (protetta) a Beverage chiamata _price
//_price è esposta in lettura tramite getter
//_price è esposta in scrittura tramite setter che controlla che il nuovo prezzo non sia negativo
//l'unica differenza sta nel PremiumWine che nel getter moltiplica il prezzo usando questa formula prezzoReale = prezzo + (prezzo / 10 * anniDiInvecchiamento) "anni di invecchiamento lo devi calcolare"
