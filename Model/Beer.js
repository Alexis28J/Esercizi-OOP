class Beer extends Beverage {

constructor (name, producer, yob, quantity, alcohol, bottleNumber, price, type, color){
    super(name, producer, yob, quantity, alcohol, bottleNumber, price);
    this.type = type;
    this.color = color;
}


}