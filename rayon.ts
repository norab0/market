import { Article } from "./article";

export class Rayon {
  //attibuts privés
  private id: number;
  private name: string;
  private articles: Article[];

  //constructeur
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.articles = [];
  }
  //getter
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getArticles(): Article[] {
    return this.articles;
  }
  //setter
  public setName(newName: string): void {
    this.name = newName;
  }
  public setArticles(newArticle: Article[]): void {
    this.articles = newArticle;
  }
  //methodes
  //methode qui donne combien d'éléments on a dans le tableau
  public count(): number {
    return this.articles.length;
  }
  //methode qui ajoute un article dans le tableau
  public addArticle(article: Article): void {
    //si article existe deja, on ajoute pas
    let article_existant = false;
    try {
      for (let i = 0; i < this.count(); i++) {
        if (this.articles[i].getName() === article.getName()) {
          article_existant = true;
        }
      }
      if (!article_existant) {
        this.articles.push(article);
      }
      else{
        throw new Error(
            "Erreur: L'article n'a pas été trouvé !"
        );
      }
    } catch (e) {
      console.error(e.message);
    }
  }
  //methode qui supprime un article du tableau à partir de son nom
  public removeArticleByName(name: string): void {
    let nomtrouve = false;
    //savoir si name est dans l'array article
    try {
      if (this.count() != 0) {
        try {
          for (let i = 0; i < this.count(); i++) {
            //si name est dans l'array article alors on
            if (this.articles[i].getName() === name) {
              //supprime la valeur name du array article
              this.articles.splice(i, 1);
              nomtrouve = true;
            }
          }
          if (!nomtrouve) {
            throw new Error(
              "Erreur: L'article " + name + " n'a pas été trouvé !"
            );
          }
        } catch (e) {
          console.error(e.message);
        }
      } else {
        throw new Error("Erreur: Il n'y a aucun article dans le rayon !");
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
