import MediaItem from "./mediaItem.js";

export default class Movie extends MediaItem{
    constructor(title, year, genre, diractor, durationMinutes){
        super(title, year, genre);
        this.diractor = diractor;
        this.durationMinutes = durationMinutes;
    };
    getSummary(){
        return `Movie: ${this.title} diracted by ${this.diractor}, ${this.durationMinutes} min`;
    };
};

// const movie = new Movie('Dune', 2023, 'MDB', 'Denis Villeneuve', 155)
// console.log(movie.getSummary());