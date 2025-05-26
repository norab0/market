"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_1 = require("./article");
var market_1 = require("./market");
var rayon_1 = require("./rayon");
// je veux 6 articles differents
// 2 dans un rayon et le reste dans un autre rayon
//et les 2 rayons sont dans un market
//boucle qui affichcz les noms des articles d'un rayon
//une boucle qui affiche le nom des rayons presents dans un market
//objects of the class article
var mixeur = new article_1.Article(1, "Mixeur", "Mixeur électrique 500W", 59.99);
var grille_pain = new article_1.Article(2, "Grille-pain", "Grille-pain inox 2 fentes", 34.90);
var bureau = new article_1.Article(3, "Bureau", "Bureau en bois clair 120cm", 149.00);
var chaise = new article_1.Article(4, "Chaise de bureau", "Chaise ergonomique avec roulettes", 89.99);
var lampe_led = new article_1.Article(5, "Lampe LED", "Lampe de chevet tactile", 25.50);
var horloge_murale = new article_1.Article(6, "Horloge murale", "Horloge silencieuse design", 19.99);
//object rayon_cuisine and rayon_maison 
var rayon_cuisine = new rayon_1.Rayon(1, "Rayon Cuisine");
var rayon_maison = new rayon_1.Rayon(2, "Rayon Maison");
//object superU
var superU = new market_1.Market(1, "Super U", "2 rue du super u", "Nantes");
//adding the articles to our rayons
rayon_cuisine.addArticle(mixeur);
rayon_cuisine.addArticle(grille_pain);
rayon_maison.addArticle(bureau);
rayon_maison.addArticle(chaise);
rayon_maison.addArticle(lampe_led);
rayon_maison.addArticle(horloge_murale);
//returns every article name of rayon cuisine
rayon_cuisine.getArticles().forEach(function (article) {
    console.log(article.getName());
});
//returns every article name of rayon maison
rayon_maison.getArticles().forEach(function (article) {
    console.log(article.getName());
});
//adding 2 rayons to our market superU
superU.addRayon(rayon_cuisine);
superU.addRayon(rayon_maison);
// returns every name of the rayons of superU
superU.getRayons().forEach(function (rayon) {
    console.log(rayon.getName());
});
