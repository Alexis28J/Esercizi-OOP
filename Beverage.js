class Beverage {

    constructor (name, producer, yob, quantity, alcohol, bottleNumber){
        this.name = name;   
        this.producer = producer;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
        this.bottleNumber = bottleNumber;
        
    }

  //metodo sellBottles che prende come input le bottiglie da vendere 
   sellBottles(bottlesToSell){   
        //controlla se ci sono abbastanza bottiglie da vendere. Se bottlesToSell è minore o uguale a bottleNumber permette la vendita 
        if(bottlesToSell <= this.bottleNumber){  //Minore o uguale perché se voglio vendere esattamente quante ne ho va bene lo stesso
            //rimuove le bottiglie vendute dal numero totale
            console.log(this.bottleNumber -= bottlesToSell); // è uguale a this.bottleNumber = this.bottleNumber - bottlesToSell                                
                                     
        } else {
            console.log("Errore: non ci sono abbastanza bottiglie da vendere.");
        }

   }


    toString(){    //metodo toString
        return "name: " + this.name + "\n" +
               "producer: " + this.producer + "\n" +
               "yob: " + this.yob + "\n" +
               "quantity: " + this.quantity + "\n" +
               "alcohol: " + this.alcohol + "\n" +
               "bottle number: " + this.bottleNumber + "\n";
    }
}