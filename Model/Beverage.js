class Beverage {

    constructor (name, producer, yob, quantity, alcohol, bottleNumber, price){  //*non è detto che debba mettere tutte le proprietà ndel constructor
        this.name = name;   
        this.producer = producer;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
        this.bottleNumber = bottleNumber;  //* faccio "this.bottleNumber = 0" - se non voglio metterlo 
        this._price = price;   //proprietà non esposta (protetta). 
        // In questo modo si indica che è una proprietà "interna" e non dovrebbe essere modificata direttamente dall'esterno

        //this._price = 0;   -  price varrà 0
        //this.price = price;  -  se voglio proteggere il valore nella creazione, cioè di imperdire di mettere un numero negativo nell'array
    }

    //USO DEL GETTER PER ESPORRE IN LETTURA LA PROPRIETA' _price. 
    // In questo modo si può accedere al prezzo senza modificarlo direttamente.
    // per esempio: let currentPrice = beverage.price; accede al prezzo tramite il getter senza modificare _price direttamente
    get price(){    
        return this._price; 
    }


    //INVECE USO DEL SETTER PER ESPORRE IN SCRITTURA LA PROPRIETÀ _price
    // In questo modo si può modificare il prezzo in modo controllato.
    // per esempio: beverage.price = newPrice; modifica il prezzo tramite il setter che può includere logica di validazione
    set price(newPrice){

        if (newPrice < 0) {    //controllo che il nuovo prezzo non sia negativo
            console.log("Prezzo non valido");
        } else {
            this._price = newPrice;
        } 
    }

// addBottles(nbr){    //NON C'ERA NEL COMPITO - IL PROF. LO HA AGGIUNTO DOPO
//     if (nbr > 0) {
//         this.bottleNumber += nbr;
//     }
// }


  //metodo sellBottles che prende come input le bottiglie da vendere 
   sellBottles(bottlesToSell){   
        //controlla se ci sono abbastanza bottiglie da vendere. Se bottlesToSell è minore o uguale a bottleNumber permette la vendita 
        if(bottlesToSell <= this.bottleNumber){  //Minore o uguale perché se voglio vendere esattamente quante ne ho va bene lo stesso
            //rimuove le bottiglie vendute dal numero totale
            console.log(this.bottleNumber -= bottlesToSell); // è uguale a this.bottleNumber = this.bottleNumber - bottlesToSell                                
                                     
        } else {
            console.error("Errore: non ci sono abbastanza bottiglie da vendere.");
            //praticamente uguale a "console.log("Errore: non ci sono abbastanza bottiglie da vendere.")" ma credo sia più idoneo in questo caso
        }

   }


    toString(){    //metodo toString
        return "name: " + this.name + "\n" +
               "producer: " + this.producer + "\n" +
               "yob: " + this.yob + "\n" +
               "quantity: " + this.quantity + "\n" +
               "alcohol: " + this.alcohol + "\n" +
               "bottle number: " + this.bottleNumber + "\n" + 
               "price: " + this._price + "\n";

               // Usando la stringa interpolata si ha lo stesso risultato:
               // return `name: ${this.name}
               // producer: ${this.producer}  
               // yob: ${this.yob}
               // quantity: ${this.quantity}
               // alcohol: ${this.alcohol}
               // bottle number: ${this.bottleNumber}
               // price: ${this._price}`

               //Sintassi: `${ }`  // interpolazione di stringhe 
               //Alt + 96: `
    }
}