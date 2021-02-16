import { Mobile } from "./claseMobile";
import { MobileLibrary } from "./claseMobileLibrary";

let nokia3210: Mobile = new Mobile("Nokia3210", "3210", "Nokia", 0, "grey", false, 1, 85);
let iphone3G: Mobile = new Mobile("iPhone3G", "3G", "Apple", 8, "white", false, 1, 200)
let samsung10: Mobile = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 512, "blue", true, 3, 500)
let honor9: Mobile = new Mobile("Honor 9", "9", "Huawei", 256, "blue", true, 3, 350)

let arrayMobiles: Mobile[] = [nokia3210, iphone3G, samsung10, honor9];

let tienda: MobileLibrary = new MobileLibrary("Codenoth Phone", "Calle de la Antena, 23", arrayMobiles)

//Prueba de metodos
console.log(tienda.getLocation());
tienda.setLocation("Calle falsa");
console.log(tienda.getLocation());
console.log("");
console.log(tienda.getName());
tienda.setName("Modificado");
console.log(tienda.getName());
console.log("");
console.log(tienda.getMobiles());
tienda.setMobiles([nokia3210, honor9]);
console.log(tienda.getMobiles());
console.log("");
console.log(tienda.getTotalPrice()); 
// console.log(tienda.totalPriceCalculation()); // Válido cuando el metodo era público
// console.log(tienda.getTotalPrice());
tienda.setMobiles(arrayMobiles) // reset de todos los mobiles
tienda.printLibrary()






