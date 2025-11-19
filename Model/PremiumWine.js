class PremiumWine extends Wine{
    constructor(name, producer, yob, quantity, alcohol, vite, location, certification){
        super(name, producer, yob, quantity, alcohol, vite, location);
        this.certification = certification;
    }

      toString(){
        return super.toString() + "certification: " + this.certification;
    }
}