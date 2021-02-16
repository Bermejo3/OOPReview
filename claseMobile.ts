export class Mobile {
    //Atributos
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    //Constructor
    constructor (name: string, model: string, trademark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number){
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price
    }

    // Metodos Getter y Setter
    public getName(): string{
        return this.name
    }

    public getModel(): string{
        return this.model
    }

    public getTrademark(): string{
        return this.trademark
    }

    public getSDSize(): number{
        return this.sdSize
    }

    public getColor(): string{
        return this.color
    }

    public getIs5g(): boolean{
        return this.is5G
    }

    public getCameraNumber(): number{
        return this.cameraNumber
    }

    public getPrice(): number{
        return this.price
    }

    public setName(name:string){
        this.name = name
    }

    public setModel(model: string){
        this.model = model
    }
    
    public setTrademark(trademark: string){
        this.trademark = trademark
    }

    public setSDSize(sdSize: number){
        this.sdSize = sdSize
    }

    public setColor(color: string){
        this.color = color
    }

    public setIs5G(is5G: boolean){
        this.is5G = is5G
    }

    public setCameraNumber(cameraNumber: number){
        this.cameraNumber = cameraNumber
    }

    public setPrice(price: number){
        this.price = price
    }

    //Metodo publico
    public characteristics():string{
        return (`"The characteristics of the mobile ${this.name} are:"\n   · Name: ${this.name}\n   · Model: ${this.model}\n   · Trademark: ${this.trademark}\n   · SD Size (GB): ${this.sdSize}\n   · Color: ${this.color}\n   · Is 5g?: ${this.is5G}\n   · Number of Cameras: ${this.cameraNumber}\n`)
    }
}