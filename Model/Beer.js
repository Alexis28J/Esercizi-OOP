class Beer extends Beverage {

constructor (name, producer, yob, quantity, alcohol, bottleNumber, price, type, color){  //qua l'ordine non è importante
    super(name, producer, yob, quantity, alcohol, bottleNumber, price);  //nel super è MEGLIO RISPETTARLA
    this.type = type;
    this.color = color;
}

toString(){

    return `Beer:
${super.toString()}   
type: ${this.type}
color: ${this.color}`
//ATTENZIONE ALLO SPAZIO INIZIALE. Lo svantaggio di usare l'interpolazione è che questo non gestitsce bene gli spazi.
}


}