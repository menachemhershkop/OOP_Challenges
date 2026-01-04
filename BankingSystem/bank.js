import { accounts } from "./accounts.js"
import BankAccount from "./BankAccount.js";

export default class Bank{
    addAccount(account){
        accounts.push(account);
    };
    transfer(fromName, toName, amount){
        const from = accounts.filter(from => from.owner = fromName);
        const to =accounts.filter(to=> to.owner = toName);
        
    };
    showBalances(){
        accounts.forEach(account => console.log(account));
    };
};


const bank =new Bank();
bank.addAccount(new BankAccount('Alice', 1000))
bank.addAccount(new BankAccount('Bob', 1000))
bank.showBalances();
bank.transfer('Alice', 'Bob', 1000)
bank.showBalances();