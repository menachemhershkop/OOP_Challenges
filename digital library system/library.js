import Book from "./book.js";
import { items } from "./items.js";
import Movie from "./move.js";


class Library{
    addItems(item){
        items.push(item)
    };
    search(item){
        const foundList = items.filter(obj => obj.title == item)
        
            
        return foundList;
        }
       listByGenre(genre){
        const foundList = items.filter(obj => obj.genre == genre)
        
            
        return foundList;
        }
    
}

const lib = new Library();
lib.addItems(new Book("Dune",1965, "Sci-Fi", "Frank Herbert", 412));
lib.addItems(new Movie("Dune",2021, "Sci-Fi", "Denis Villeneuve", 155));
console.log(lib.listByGenre("Sci-Fi"));