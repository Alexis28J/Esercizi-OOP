class Wine extends Beverage{
    constructor(name, producer, yob, quantity, alcohol, bottleNumber, price, vite, location){
        super(name, producer, yob, quantity, alcohol, bottleNumber, price);
        this.vite = vite;
        this.location = location;
    }

        toString(){
        return super.toString() +
               "vite: " + this.vite + "\n" +
               "location: " + this.location + "\n";
    }
}