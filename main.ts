import { Article } from "./article";
import { Market } from "./market";
import { Rayon } from "./rayon";

// je veux 6 articles differents
// 2 dans un rayon et le reste dans un autre rayon
//et les 2 rayons sont dans un market
//boucle qui affichcz les noms des articles d'un rayon
//une boucle qui affiche le nom des rayons presents dans un market

//objects of the class article
const mixeur = new Article(1, "Mixeur", "Mixeur électrique 500W", 59.99);
const grille_pain = new Article(2, "Grille-pain", "Grille-pain inox 2 fentes", 34.90);
const bureau = new Article(3, "Bureau", "Bureau en bois clair 120cm", 149.00);
const chaise = new Article(4, "Chaise de bureau", "Chaise ergonomique avec roulettes", 89.99);
const lampe_led = new Article(5, "Lampe LED", "Lampe de chevet tactile", 25.50);
const horloge_murale = new Article(6, "Horloge murale", "Horloge silencieuse design", 19.99);
//object rayon_cuisine and rayon_maison 
const rayon_cuisine = new Rayon(1, "Rayon Cuisine");
const rayon_maison = new Rayon(2, "Rayon Maison");

//object superU
const superU = new Market(1, "Super U", "2 rue du super u", "Nantes");
//adding the articles to our rayons
rayon_cuisine.addArticle(mixeur);
rayon_cuisine.addArticle(grille_pain);

rayon_maison.addArticle(bureau);
rayon_maison.addArticle(chaise);
rayon_maison.addArticle(lampe_led);
rayon_maison.addArticle(horloge_murale);

//returns every article name of rayon cuisine
rayon_cuisine.getArticles().forEach(article =>{
     console.log(article.getName());
})

//returns every article name of rayon maison
rayon_maison.getArticles().forEach(article =>{
     console.log(article.getName());
})
//adding 2 rayons to our market superU
superU.addRayon(rayon_cuisine);
superU.addRayon(rayon_maison);

// returns every name of the rayons of superU
superU.getRayons().forEach(rayon =>{
    console.log(rayon.getName())
})