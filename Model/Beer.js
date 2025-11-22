class Beer extends Beverage {

constructor (name, producer, yob, quantity, alcohol, bottleNumber, type, color){
    super(name, producer, yob, quantity, alcohol, bottleNumber);
    this.type = type;
    this.color = color;
}


}