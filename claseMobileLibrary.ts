import { Mobile } from "./claseMobile";

export class MobileLibrary{
    //Atributos
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    //Constructor
    constructor (name: string, location: string, mobiles: Mobile[]){
        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }

    //Metodos Getter y Setter
    public getName():string{
        return this.name
    }

    public getLocation():string{
        return this.location
    }

    public getMobiles(): Mobile[]{
        return this.mobiles
    }

    public getTotalPrice(): number{
        return this.totalPrice
    }

    public setName(name:string){
        this.name = name
    }

    public setLocation(location: string){
        this.location = location
    }

    public setMobiles(mobiles: Mobile[]){
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }

    //Metodos públicos
    public printLibrary(){
        console.log(`"This are all my mobiles:"`);
        for (let i=0; i<this.mobiles.length;i++){
            console.log(this.mobiles[i].characteristics())
        }
        console.log(`"Price overall: ${this.totalPrice}"`)
    }

    //Metodos Privados
    private totalPriceCalculation():number{
        let totalPrice: number = 0
        for (let i=0; i<this.mobiles.length; i++){
            totalPrice += this.mobiles[i].getPrice()
        }
        return totalPrice
    }
}