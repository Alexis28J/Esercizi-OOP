console.log("Esercizi OOP");
//scrivere nel terminale "node .\Main.js (nome del js presente)" per stamparlo nel terminale
//(scrivere node + spazio + iniziale del js e tab per autocompletarlo)


//Creare una classe Beverage con le seguenti proprietà:
//name, producer, yob (year of bottling), quantity, alcohol

//Creare una classe Beer che estende Beverage con le seguenti proprietà:
//type, color

const moretti = new Beer ('Moretti IPA', 'Moretti S.P.A.', 2024, 66, 4, "bottleNumber (input)", "price (input)", 'IPA', 'blonde');  

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


console.log(document);  //document rappresenta l'intera pagina web caricata nel browser cioè l'HTML completo

//cambiare il titolo della pagina web
const h1Title = document.getElementById('main-title'); //prendo l'elemento che voglio cambiare
console.log(h1Title);

h1Title.innerText = "Enoteca Bartolletti S.P.A.";  //Ho cambiato il titolo del html  

//document.getElementById() serve per selezionare un singolo elemento HTML in una pagina web tramite il suo attributo id.

//La proprietà .innerText di JavaScript serve per ottenere o impostare il contenuto testuale visibile all'interno di un elemento HTML,
//ignorando il markup HTML e rispettando lo stile CSS (ad esempio, gli elementi nascosti sono esclusi).
//È utile per leggere o scrivere testo puro, comportandosi come se si copiasse e incollato il contenuto visibile. 


//creo un nuovo oggetto PremiumWine
//const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera", 2020, 75, 12.5, "Barbera", "Piemonte", "D.O.C.", 18);  
//Però devo rispettare l'ordine dei parametri in PremiumWine.js perché altrimenti non funziona.

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


//VOGLIO CREARE UNA NUOVA SCHEDA
const newCard = document.createElement('div');  //creo un elemento div  //'div' prende il nome del tag HTML che voglio creare
// Il metodo createElement() in JavaScript crea un nuovo elemento HTML e lo aggiunge alla pagina web.

newCard.className = 'card';  //assegno la classe 'card' al div creato
//La proprietà .className in JavaScript serve per leggere e manipolare l'attributo class di un elemento HTML. 

const main = document.getElementById('main-content'); //prendo l'elemento esistente 'main-content' dove voglio inserire la nuova scheda
main.appendChild(newCard); //inserisco 'newCard' dentro 'main-content'
//Il metodo .appendChild() in JavaScript serve a inserire un nuovo nodo (un elemento HTML) alla fine di un altro elemento esistente (come ultimo figlio di un genitore specificato).
//Dove main è l’elemento genitore e newCard è il nodo da inserire.

const cardImage = document.createElement('img');  //creo un elemento 'img'
cardImage.src = './Assets/Wine.svg';
cardImage.width = '100';
newCard.appendChild(cardImage);   //'cardImage' è un figlio di 'card' 


//creo un nuovo elemento nel div per il name
const nameContainer = document.createElement('div'); //nameContainer è un 'div' che conterrà il nome

//e questo 'div' devo metterlo alla 'newCard'
newCard.appendChild(nameContainer);  //ora 'nameContainer' è un figlio di 'newCard'

//ora creo il 'strong' e lo metto dentro il 'nameContainer'
const nameKey = document.createElement('strong');  //creo l'elemento 'strong' che conterrà la chiave 'Nome: '

//inserisco il testo dentro 'nameKey' 
nameKey.innerText = 'Nome: '; //ora 'nameKey' contiene il testo 'Nome: '

//ora devo mettere 'nameKey' dentro 'nameContainer'
nameContainer.appendChild(nameKey); //ora 'nameKey' è un figlio di 'nameContainer'

//ora creo lo span che conterrà il valore del name
const nameValue = document.createElement('span'); //creo l'elemento 'span' che conterrà il valore del name

//inserisco il testo dentro 'nameValue'
nameValue.innerText = champagne.name; //ora 'nameValue' contiene il valore del name preso dall'oggetto 'champagne'

//ora devo mettere 'nameValue' dentro 'nameContainer'
nameContainer.appendChild(nameValue); //ora 'nameValue' è un figlio di 'nameContainer'


//ora faccio lo stesso processo per il producer
const producerContainer = document.createElement('div');
newCard.appendChild(producerContainer)     //quindi si crea il div e lo si mette dentro newCard

const producerKey = document.createElement('strong');  //strong perché è la chiave che voglio evidenziare
producerKey.innerText = 'Produttore: '; //innerText per mettere il testo dentro
producerContainer.appendChild(producerKey); //si crea il strong, si mette il testo dentro e lo si mette dentro il div

const producerValue = document.createElement('span');  //span perché è il valore normale
producerValue.innerText = champagne.producer;
producerContainer.appendChild(producerValue); //si crea lo span, si mette il valore dentro e lo si mette dentro il div


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
newCard.appendChild(priceContainer);

const priceKey = document.createElement('strong');
priceKey.innerText = 'Prezzo: ';
priceContainer.appendChild(priceKey);

const priceValue = document.createElement('span');
priceValue.innerText = champagne.price;  //il prezzo calcolato con la formula del PremiumWine
priceContainer.appendChild(priceValue);


//vite
const viteContainer = document.createElement('div');
newCard.appendChild(viteContainer);

const viteKey = document.createElement('strong');
viteKey.innerText = 'Vitigno: ';
viteContainer.appendChild(viteKey);

const viteValue = document.createElement('span');
viteValue.innerText = champagne.vite;
viteContainer.appendChild(viteValue);


//location
const locationContainer = document.createElement('div');
newCard.appendChild(locationContainer);

const locationKey = document.createElement('strong');  
locationKey.innerText = 'Località: ';
locationContainer.appendChild(locationKey);

const locationValue = document.createElement('span');
locationValue.innerText = champagne.location;
locationContainer.appendChild(locationValue);


//certification
const certificationContainer = document.createElement('div');
newCard.appendChild(certificationContainer);

const certificationKey = document.createElement('strong');
certificationKey.innerText = 'Certificazione: ';
certificationContainer.appendChild(certificationKey);

const certificationValue = document.createElement('span');
certificationValue.innerText = champagne.certification;
certificationContainer.appendChild(certificationValue);



/// COMPITO FARE LA BIRRA SEGUENDO LI STESSI PASSI DI CHAMPAGNE

const beerCard = document.createElement('div');  //creo un elemento div che conterrà la scheda della birra
beerCard.className = 'card'; //assegno la classe 'card' al div creato

//non posso riutilizzare 'main' perché è già stato usato sopra per champagne 
// non posso avere due variabili con lo stesso nome nello stesso contesto 
// il contesto è tutto il file Main.js

const beerMain = document.getElementById('main-content');  //qui prendo l'elemento esistente 'main-content' in index.html dove voglio inserire la scheda della birra
beerMain.appendChild(beerCard);   //inserisco 'beerCard' dentro 'main-content'

//beerMain sarà il contenitore principale dove andrò a mettere la scheda della birra
//getElementById prende l'elemento esistente in index.html con id 'main-content'


//importo l'immagine (beerCardImage) dal pc e lo metto a beerCard
const beerCardImage = document.createElement('img'); 
beerCardImage.src = './Assets/Beer.svg';
beerCardImage.width = '100';
beerCard.appendChild(beerCardImage);  


//creo div per il name e poi lo metto nella beerCard
const nameBeerContainer = document.createElement('div');
beerCard.appendChild(nameBeerContainer);

const nameBeerKey = document.createElement('strong');
nameBeerKey.innerText = 'Nome: ';  //innerText serve per mettere il testo dentro l'elemento creato
nameBeerContainer.appendChild(nameBeerKey);

const nameBeerValue = document.createElement('span');
nameBeerValue.innerText = moretti.name; 
nameBeerContainer.appendChild(nameBeerValue);


//producer
const producerBeerContainer = document.createElement('div');
beerCard.appendChild(producerBeerContainer);

const producerbeerKey = document.createElement('strong');
producerKey.innerText = 'Produttore: ';
producerBeerContainer.appendChild(producerKey);

const producerBeerValue = document.createElement('span');
producerBeerValue.innerText = moretti.producer;
producerBeerContainer.appendChild(producerBeerValue);


//yob
const yobBeerContainer = document.createElement('div');
beerCard.appendChild(yobBeerContainer);

const yobBeerKey = document.createElement('strong');
yobBeerKey.innerText = 'Annata: ';
yobBeerContainer.appendChild(yobBeerKey);

const yobBeerValue = document.createElement('span');
yobBeerValue.innerText = moretti.yob;
yobBeerContainer.appendChild(yobBeerValue);


//quantity
const quantityBeerContainer = document.createElement('div');
beerCard.appendChild(quantityBeerContainer);

const quantityBeerKey = document.createElement('strong');
quantityBeerKey.innerText = 'CL: ';
quantityBeerContainer.appendChild(quantityBeerKey);

const quantityBeerValue = document.createElement('span');
quantityBeerValue.innerText = moretti.quantity;
quantityBeerContainer.appendChild(quantityBeerValue);


//alcohol
const alcoholBeerContainer = document.createElement('div');
beerCard.appendChild(alcoholBeerContainer);

const alcoholBeerKey = document.createElement('strong');
alcoholBeerKey.innerText = 'Gradi: ';
alcoholBeerContainer.appendChild(alcoholBeerKey);

const alcoholBeerValue = document.createElement('span');
alcoholBeerValue.innerText = moretti.alcohol;
alcoholBeerContainer.appendChild(alcoholBeerValue);


//price
const priceBeerContainer = document.createElement('div');
beerCard.appendChild(priceBeerContainer);

const priceBeerKey = document.createElement('strong');
priceBeerKey.innerText = 'Prezzo: ';
priceBeerContainer.appendChild(priceBeerKey);

const priceBeerValue = document.createElement('span');
priceBeerValue.innerText = moretti.price;
priceBeerContainer.appendChild(priceBeerValue);


//type
const typeBeerContainer = document.createElement('div');
beerCard.appendChild(typeBeerContainer);

const typeBeerKey = document.createElement('strong');
typeBeerKey.innerText = 'Tipo: ';
typeBeerContainer.appendChild(typeBeerKey);

const typeBeerValue = document.createElement('span');
typeBeerValue.innerText = moretti.type;
typeBeerContainer.appendChild(typeBeerValue);


//color

const colorBeerContainer = document.createElement('div');
beerCard.appendChild(colorBeerContainer);

const colorBeerKey = document.createElement('strong');
colorBeerKey.innerText = 'Colore: ';
colorBeerContainer.appendChild(colorBeerKey);

const colorBeerValue = document.createElement('span');
colorBeerValue.innerText = moretti.color;
colorBeerContainer.appendChild(colorBeerValue);











