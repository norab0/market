class Article{
    private id:number;
    private name:string;
    private desc:string;
    private price: number;

    constructor(id:number,name : string,desc : string, price:number){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
    public getDesc(){
        return this.desc;
    }
    public getPrice(){
        return this.price;
    }

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