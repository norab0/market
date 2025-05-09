import { Article } from "./article";

class Rayon{
    private id: number;
    private name: string;
    private articles : Article[];

    constructor( id: number, name: string){
        this.id = id;
        this.name = name;
        this.articles = [];
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getArticles() : Article[] {
        return this.articles;
    }
    setName(newName : string): void{
        this.name = newName;
    }
    setArticles(newArticle : Article[]): void{
        this.articles = newArticle ; 
    }
    count() : number {
        return this.articles.length;
    }
    addArticle(article : Article): void {
        this.articles.push(article);
    }
    removeArticleByName(name : string): void {
        //savoir si name est dans l'array article
        for(let i = 0; i < this.count(); i++ ){
            //si name est dans l'array article alors on
            if (this.articles[i].getName() === name){
                //supprime la valeur name du array article
                this.articles.splice(i,1);
            } 
        }
    }
}