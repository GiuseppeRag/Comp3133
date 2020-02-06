class Car {
    model: String
    year: number

    constructor(model, year){
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car {
    balance: number

    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
}