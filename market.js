"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
var Market = /** @class */ (function () {
    //constructeur
    function Market(id, name, address, city) {
        this.id = id;
        this.name = name;
        this.rayons = [];
        this.address = address;
        this.city = city;
    }
    //getter
    Market.prototype.getId = function () {
        return this.id;
    };
    Market.prototype.getName = function () {
        return this.name;
    };
    Market.prototype.getAddress = function () {
        return this.address;
    };
    Market.prototype.getCity = function () {
        return this.city;
    };
    Market.prototype.getRayons = function () {
        return this.rayons;
    };
    //setter
    Market.prototype.setName = function (newName) {
        this.name = newName;
    };
    Market.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    Market.prototype.setCity = function (newCity) {
        this.city = newCity;
    };
    Market.prototype.setRayon = function (newRayon) {
        this.rayons = newRayon;
    };
    //methods
    //methode qui donne combien d'éléments on a dans le tableau
    Market.prototype.count = function () {
        return this.rayons.length;
    };
    //methode qui ajoute un rayon dans le tableau
    Market.prototype.addRayon = function (rayon) {
        //si rayon existe deja, on ajoute pas
        var rayon_existant = false;
        try {
            for (var i = 0; i < this.count(); i++) {
                if (this.rayons[i].getName() === rayon.getName()) {
                    rayon_existant = true;
                }
            }
            if (!rayon_existant) {
                this.rayons.push(rayon);
            }
            else {
                throw new Error("Erreur: Le rayon n'a pas été trouvé !");
            }
        }
        catch (e) {
            console.error(e.message);
        }
    };
    //methode qui supprime un rayon du tableau à partir de son nom
    Market.prototype.removeRayonByName = function (name) {
        var nomtrouve = false;
        //savoir si name est dans l'array rayon
        try {
            if (this.count() != 0) {
                try {
                    for (var i = 0; i < this.count(); i++) {
                        //si name est dans l'array rayons alors on
                        if (this.rayons[i].getName() === name) {
                            //supprime la valeur name du array rayons
                            this.rayons.splice(i, 1);
                            nomtrouve = true;
                        }
                    }
                    if (!nomtrouve) {
                        throw new Error("Erreur: Le rayon " + name + " n'a pas été trouvé !");
                    }
                }
                catch (e) {
                    console.error(e.message);
                }
            }
            else {
                throw new Error("Erreur: Il n'y a aucun rayons dans le market !");
            }
        }
        catch (e) {
            console.error(e.message);
        }
    };
    return Market;
}());
exports.Market = Market;
