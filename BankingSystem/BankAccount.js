export default class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if ((this.balance - amount)>=0){
            this.balance -= amount;
        }
        else{
            throw new Error("Not enugh money");
            
        };
    };
};