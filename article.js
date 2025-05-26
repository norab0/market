"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
var Article = /** @class */ (function () {
    //constructeur 
    function Article(id, name, desc, price) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
    //getter
    Article.prototype.getId = function () {
        return this.id;
    };
    Article.prototype.getName = function () {
        return this.name;
    };
    Article.prototype.getDesc = function () {
        return this.desc;
    };
    Article.prototype.getPrice = function () {
        return this.price;
    };
    //setter
    Article.prototype.setName = function (newName) {
        this.name = newName;
    };
    Article.prototype.setDesc = function (newDesc) {
        this.desc = newDesc;
    };
    Article.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    return Article;
}());
exports.Article = Article;
