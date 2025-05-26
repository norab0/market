"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rayon = void 0;
var Rayon = /** @class */ (function () {
    //constructeur
    function Rayon(id, name) {
        this.id = id;
        this.name = name;
        this.articles = [];
    }
    //getter
    Rayon.prototype.getId = function () {
        return this.id;
    };
    Rayon.prototype.getName = function () {
        return this.name;
    };
    Rayon.prototype.getArticles = function () {
        return this.articles;
    };
    //setter
    Rayon.prototype.setName = function (newName) {
        this.name = newName;
    };
    Rayon.prototype.setArticles = function (newArticle) {
        this.articles = newArticle;
    };
    //methodes
    //methode qui donne combien d'éléments on a dans le tableau
    Rayon.prototype.count = function () {
        return this.articles.length;
    };
    //methode qui ajoute un article dans le tableau
    Rayon.prototype.addArticle = function (article) {
        //si article existe deja, on ajoute pas
        var article_existant = false;
        try {
            for (var i = 0; i < this.count(); i++) {
                if (this.articles[i].getName() === article.getName()) {
                    article_existant = true;
                }
            }
            if (!article_existant) {
                this.articles.push(article);
            }
            else {
                throw new Error("Erreur: L'article n'a pas été trouvé !");
            }
        }
        catch (e) {
            console.error(e.message);
        }
    };
    //methode qui supprime un article du tableau à partir de son nom
    Rayon.prototype.removeArticleByName = function (name) {
        var nomtrouve = false;
        //savoir si name est dans l'array article
        try {
            if (this.count() != 0) {
                try {
                    for (var i = 0; i < this.count(); i++) {
                        //si name est dans l'array article alors on
                        if (this.articles[i].getName() === name) {
                            //supprime la valeur name du array article
                            this.articles.splice(i, 1);
                            nomtrouve = true;
                        }
                    }
                    if (!nomtrouve) {
                        throw new Error("Erreur: L'article " + name + " n'a pas été trouvé !");
                    }
                }
                catch (e) {
                    console.error(e.message);
                }
            }
            else {
                throw new Error("Erreur: Il n'y a aucun article dans le rayon !");
            }
        }
        catch (e) {
            console.error(e.message);
        }
    };
    return Rayon;
}());
exports.Rayon = Rayon;
