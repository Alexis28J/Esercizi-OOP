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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM: DOCUMENT OBJECT MODEL
// Il Document Object Model (DOM) serve a rappresentare una pagina web (HTML/XML) come un albero di oggetti che JavaScript può manipolare. 
// Questo permette agli sviluppatori di modificare dinamicamente il contenuto, la struttura e lo stile di una pagina in tempo reale, rendendola interattiva senza dover ricaricare la pagina. 
// È come una mappa del documento che JavaScript può usare per interagire con i suoi elementi. 


console.log(document);    

const h1Title = document.getElementById('main-title'); //prendo l'elemento che voglio cambiare
console.log(h1Title);

h1Title.innerText = "Enoteca Bartolletti S.P.A.";  //Ho cambiato il titolo del html

//document.getElementById() serve per selezionare un singolo elemento HTML in una pagina web tramite il suo attributo id.

//La proprietà .innerText di JavaScript serve per ottenere o impostare il contenuto testuale visibile all'interno di un elemento HTML,
//ignorando il markup HTML e rispettando lo stile CSS (ad esempio, gli elementi nascosti sono esclusi).
//È utile per leggere o scrivere testo puro, comportandosi come se si copiasse e incollato il contenuto visibile. 


//creo un nuovo oggetto PremiumWine
//const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera", 2020, 75, 12.5, "Barbera", "Piemonte", "D.O.C.", 18);  //Devo rispettare
const barbera = new PremiumWine ("Barbera d'Asti", "Consorzio Barbera", 2020, 75, 12.5, 5, 18, "Barbera", "Piemonte", "D.O.C.");

const nameSpan = document.getElementById('card-name');
nameSpan.innerText = barbera.name;

const producerSpan = document.getElementById('card-producer');
producerSpan.innerText = barbera.producer;

// const yobSpan = document.getElementById('card-yob');
// yobSpan.innerText = barbera.yob;

//const quantitySpan = document.getElementById('card-quantity');
// quantitySpan.innerText = barbera.quantity;

// const alcoholSpan = document.getElementById('card-alcohol');
// alcoholSpan.innerText = barbera.alcohol;

// const bottleNumberSpan = document.getElementById('card-bottleNumber');
// bottleNumberSpan.innerText = barbera.bottleNumber;

// const priceSpan = document.getElementById('card-price');
// priceSpan.innerText = barbera.price;

// const viteSpan = document.getElementById('card-vite');
// viteSpan.innerText = barbera.vite;

// const locationSpan = document.getElementById('card-location');
// locationSpan.innerText = barbera.location;

// const certificationSpan = document.getElementById('card-certification');
// certificationSpan.innerText = barbera.certification;

document.getElementById('card-yob').innerText = barbera.yob;  // sono uguale a quello di prima, solo che più corti
document.getElementById('card-quantity').innerText = barbera.quantity;
document.getElementById('card-alcohol').innerText = barbera.alcohol;
document.getElementById('card-bottleNumber').innerText = barbera.bottleNumber; 
document.getElementById('card-price').innerText = barbera.price;
document.getElementById('card-vite').innerText = barbera.vite; 
document.getElementById('card-location').innerText = barbera.location;; 
document.getElementById('card-certification').innerText = barbera.certification;
document.getElementById('card-yob').innerText = barbera.yob;


//creo un'altro PremiumWine
const champagne = new PremiumWine("Champagne Brut", "Charles Vercy", 2020, 75, 12, "undefined", 19.20, "Chardonnay", "Francia", "D.O.C.");  //ho messo "undefined" in bottleNumber perchè non si sposti il valore a un'altra proprietà 


//voglio creare una nuova scheda
const newCard = document.createElement('div');  //creo un elemento div  //ho messo div perché l'elemento che ha la tag 'card'
// Il metodo createElement() in JavaScript crea un nuovo elemento HTML e lo aggiunge alla pagina web.
newCard.className = 'card';  
//La proprietà .className in JavaScript serve per leggere e manipolare l'attributo class di un elemento HTML. 

const main = document.getElementById('main-content');
main.appendChild(newCard);
//Il metodo .appendChild() in JavaScript serve a inserire un nuovo nodo (un elemento HTML) alla fine di un altro elemento esistente (come ultimo figlio di un genitore specificato).
//Dove main è l’elemento genitore e newCard è il nodo da inserire.

const cardImage = document.createElement('img');  //creo un elemento 'img'
cardImage.src = './Assets/Wine.svg';
cardImage.width = '100';

newCard.appendChild(cardImage);   //'cardImage' è un figlio di 'card' 


//creo un nuovo elemento nel div 
const nameContainer = document.createElement('div');

//e questo 'div' devo metterlo alla 'newCard'
newCard.appendChild(nameContainer);

const nameKey = document.createElement('strong');
nameKey.innerText = 'Nome: ';
nameContainer.appendChild(nameKey);

const nameValue = document.createElement('span');
nameValue.innerText = champagne.name;
nameContainer.appendChild(nameValue);


//ora faccio lo stesso processo per il producer

const producerContainer = document.createElement('div');
newCard.appendChild(producerContainer)

const producerKey = document.createElement('strong');
producerKey.innerText = 'Produttore: ';
producerContainer.appendChild(producerKey);

const producerValue = document.createElement('span');
producerValue.innerText = champagne.producer;
producerContainer.appendChild(producerValue);

//yob

const yobContainer = document.createElement('div');
newCard.appendChild(yobContainer)

const yobKey = document.createElement('strong');
yobKey.innerText = 'Annata: ';
yobContainer.appendChild(yobKey);

const yobValue = document.createElement('span');
yobValue.innerText = champagne.yob;
yobContainer.appendChild(yobValue);


//quantity

const quantityContainer = document.createElement('div');
newCard.appendChild(quantityContainer)

const quantityKey = document.createElement('strong');
quantityKey.innerText = 'CL: ';
quantityContainer.appendChild(quantityKey);

const quantityValue = document.createElement('span');
quantityValue.innerText = champagne.quantity;
quantityContainer.appendChild(quantityValue);

//alcohol

const alcoholContainer = document.createElement('div');
newCard.appendChild(alcoholContainer)

const alcoholKey = document.createElement('strong');
alcoholKey.innerText = 'Gradi: ';
alcoholContainer.appendChild(alcoholKey);

const alcoholValue = document.createElement('span');
alcoholValue.innerText = champagne.alcohol;
alcoholContainer.appendChild(alcoholValue);


//price

const priceContainer = document.createElement('div');
newCard.appendChild(priceContainer)

const priceKey = document.createElement('strong');
priceKey.innerText = 'Prezzo: ';
priceContainer.appendChild(priceKey);

const priceValue = document.createElement('span');
priceValue.innerText = champagne.price;
priceContainer.appendChild(priceValue);





/// COMPITO FARE LA BIRRA SEGUENDO LI STESSI PASSI DI CHAMPAGNE






