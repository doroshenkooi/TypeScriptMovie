class Movie {
    private year: number;
    private country: string;
    private slogan: string;
    private genre: string;
    private duration: number;
  
    constructor(year: number, country: string, slogan: string, genre: string, duration: number) {
      this.year = year;
      this.country = country;
      this.slogan = slogan;
      this.genre = genre;
      this.duration = duration;
    }
  
    getInfo(): string {
      return `${this.year}, ${this.country}, ${this.slogan}, ${this.genre}, ${this.duration} минут`;
    }
  }
  
  export default Movie;
 