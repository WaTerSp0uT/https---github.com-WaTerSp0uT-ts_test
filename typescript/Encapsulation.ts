class Item{
    private itemName!: string;
    private itemPrice!: number;

    //generate getters and setters
    public getItemName(): string{
        return this.itemName;
    }

    public setItemName(value: string){
        this.itemName = value;
    }

    public get ItemPrice(): number{
        return this.itemPrice;
    }

    public set ItemPrice(value: number){
        this.itemPrice = value;
    }

    constructor(name: string, price: number){
        this.setItemName(name);
        this.itemPrice = price; //calls without the parameter
    }
}


let item1 = new Item("PEn", 2)

console.log(item1);

item1.setItemName("Vasya");

console.log(item1);

console.log(item1.ItemPrice);

item1.ItemPrice = 4;

console.log(item1);