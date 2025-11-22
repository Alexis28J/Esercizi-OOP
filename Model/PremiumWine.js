class PremiumWine extends Wine{
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, price, vite, location, certification){
        super(name, producer, yob, quantity, alcohol, bottleNumber, price, vite, location);
        this.certification = certification;
    }

     
    get price(){
 
    const currentYear = new Date().getFullYear();  // ottengo l'anno corrente 
    // new Date() crea un oggetto data con la data e l'ora correnti, getFullYear() estrae l'anno DA QUELL'OGGETTO cioè l'anno attuale

    const price = this._price;  // prendo il prezzo originale dalla proprietà protetta _price
    const yearsOfAging = currentYear - this.yob;  //per sapere gli anni fi invecchiamente resto l'anno di imbottigliamento da quello attuale

     const realPrice = price + (price/10 * yearsOfAging); // calcolo del prezzo reale considerando l'invecchiamento
     //10% del prezzo per ogni anno di invecchiamento
     // dove yearsOfAging = currentYear - this.yob
     
     return realPrice;

    }


    //devo mettere anche il setter per price perché altrimenti da errore se provo a settarlo in Main.js
    //anche se non lo userò mai perché il prezzo calcolato in PremiumWine dipende dall'anno di invecchiamento
    //ma per evitare errori lo metto comunque
    //sebbene ho già il setter in Beverage, qui lo riscrivo per evitare problemi di ereditarietà
     set price(newPrice){  

        if (newPrice < 0) {    //controllo che il nuovo prezzo non sia negativo
            console.log("Prezzo non valido");
        } else {
            this._price = newPrice;
        } 
    }


      toString(){
        return super.toString() + "certification: " + this.certification;
    }
}