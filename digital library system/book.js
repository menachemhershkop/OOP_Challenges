import MediaItem from "./mediaItem.js";

export default class Book extends MediaItem{
    constructor(title, year, genre, author, pageCount){
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount;
    };
    getSummary(){
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`
    };
};



// const book = new Book('Dune', 1978, 'MDB', 'Frank Herbert', 412);
// console.log(book.getSummary())
