console.log("Esercizi OOP");
//scrivere nel terminale "node .\Main.js (nome del js presente)" per stamparlo nel terminale
//(scrivere node + spazio + iniziale del js e tab per autocompletarlo)


//Creare una classe Beverage con le seguenti proprietà:
//name, producer, yob (year of bottling), quantity, alcohol

//Creare una classe Beer che estende Beverage con le seguenti proprietà:
//type, color

const moretti = new Beer ('moretti ipa', 'moretti s.p.a', 2024, 66, 4, "bottleNumber (input)", "price (input)", 'ipa', 'blonde');  

//Creare una classe Wine che estende Beverage con le seguenti proprietà:
//vite, location

const dolcetto = new Wine ('dolcetto bella vita', 'cantine bella vita', 2020, 75, 11, "bottleNumber (input)", "price (input)", 'dolcetto', 'alba')

//Creare una classe PremiumWine che estende Wine con le seguenti proprietà:
//certification

const barolo = new PremiumWine ('brunate barolo', 'cantine brugnate', 2021, 75, 14, "bottleNumber (input)", "price (input)", 'nebbiolo da barolo', 'piemonte', 'D.O.C.G');


//Creare i toString di tutte le classi

console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());


//Aggiungere una proprietà chiamata bottleNumber a Beverage e un metodo chiamato sellBottles
//che prende come input le bottiglie da vendere e, se ci sono abbastanza bottiglie le rimuove dal numero totale,
//altrimenti non fa nulla e logga l'errore

// moretti.sellBottles(10);
// dolcetto.sellBottles(25);
// barolo.sellBottles(44);



//Aggiungere una proprietà non esposta (protetta) a Beverage chiamata _price
//_price è esposta in lettura tramite getter
//_price è esposta in scrittura tramite setter che controlla che il nuovo prezzo non sia negativo
//l'unica differenza sta nel PremiumWine che nel getter moltiplica il prezzo usando questa formula prezzoReale = prezzo + (prezzo / 10 * anniDiInvecchiamento) "anni di invecchiamento lo devi calcolare"

console.log(moretti.price);

//se cerco di mettere un nuovo valore a price
//moretti.price = 50;
//console.log(moretti.price);   //infatti cambia grazie al setter 

//ora se cerco di dargli in valore negativo
//moretti.price = -2;
//console.log(moretti.price);   //la condizione che ho mezzo nel setter funziona e quindi non sono ammessi valori negativi come input


console.log(dolcetto.price);

//testo se il getter e il setter funzionano bene anche qua:

// dolcetto.price = 60;
// console.log(dolcetto.price);   //funziona 

// dolcetto.price = - 12;
// console.log(dolcetto.price);   //si rispetta la condizione



//testo se il getter che ho fatto in PremiumWine.js funziona correttamente:


console.log(barolo.price); //devo vedere il prezzo calcolato con la formula del PremiumWine

//il prezzo originale di barolo è 80 e l'anno di imbottigliamento è 2021 allora il prezzo calcolato sarà:
// anni di invecchiamento = 2025 - 2021 = 4
// prezzo reale = 80 + (80/10 * 4) = 80 + 32 = 112

//quindi il valore stampato da console.log(barolo.price); deve essere 112   --->   FUNZIONA



//provo con un valore negativo per vedere se il setter funziona senza problemi:

//barolo.price = -40;    //funziona correttamente







