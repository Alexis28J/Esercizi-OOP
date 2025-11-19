class Beverage {

    constructor (name, producer, yob, quantity, alcohol){
        this.name = name;
        this.producer = producer;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
    }

    toString(){
        return "name: " + this.name + "\n" +
               "producer: " + this.producer + "\n" +
               "yob: " + this.yob + "\n" +
               "quantity: " + this.quantity + "\n" +
               "alcohol: " + this.alcohol + "\n";
    }
}