import { Article } from "./article";

class Rayon{
    private id: number;
    private name: string;
    private articles : Article[];

    constructor( id: number, name: string){
        this.id = id;
        this.name = name;
    }

}