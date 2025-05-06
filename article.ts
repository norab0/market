export class Article{ 
    //attributs privées de la classe article
    private id: number;
    private name: string;
    private desc: string;
    private price: number;

    //constructeur 
    constructor(id: number, name: string, desc: string, price: number){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }

    //getter
    public getId(): number{
        return this.id;
    }
    
    public getName(): string{
        return this.name;
    }

    public getDesc(): string{
        return this.desc;
    }

    public getPrice(): number{
        return this.price;
    }

    //setter
    public setName(newName: string): void {
        this.name = newName;
    }
    
    public setDesc(newDesc: string): void {
        this.desc = newDesc;
    }
    
    public setPrice(newPrice: number): void {
        this.price = newPrice;
    }
}