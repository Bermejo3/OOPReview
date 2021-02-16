import { Mobile } from "./claseMobile"

let nokia3210: Mobile = new Mobile("Nokia3210", "3210", "Nokia", 0, "grey", false, 1, 85);
let iphone3G: Mobile = new Mobile("iPhone3G", "3G", "Apple", 8, "white", false, 1, 200)
let samsung10: Mobile = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 512, "blue", true, 3, 500)

// for (let i=0; i<Object.keys(nokia3210).length;i++){
//     console.log(`${Object.keys(nokia3210)[i]}: ${nokia3210[Object.keys(nokia3210)[i]]}`)
// }
// console.log("\n");

// for (let i=0; i<Object.keys(iphone3G).length;i++){
//     console.log(`${Object.keys(iphone3G)[i]}: ${iphone3G[Object.keys(nokia3210)[i]]}`)
// }
// console.log("\n");

// for (let i=0; i<Object.keys(samsung10).length;i++){
//     console.log(`${Object.keys(samsung10)[i]}: ${samsung10[Object.keys(nokia3210)[i]]}`)
// }
// console.log("\n");

// // Al cambiar de publico a privado ya no se puede solicitar
// // nokia3210.is5G = true
// // nokia3210.cameraNumber = 4

// for (let i=0; i<Object.keys(nokia3210).length;i++){
//     console.log(`${Object.keys(nokia3210)[i]}: ${nokia3210[Object.keys(nokia3210)[i]]}`)
// }

console.log(nokia3210.characteristics());
console.log(iphone3G.characteristics());
console.log(samsung10.characteristics());

nokia3210.setIs5G(true)
nokia3210.setCameraNumber(4)

console.log(nokia3210.characteristics());

console.log("Array con los tres moviles juntos\n");

let arrayMobiles: Mobile[] = [nokia3210, iphone3G, samsung10];

for (let i=0; i<arrayMobiles.length; i++){
    console.log(arrayMobiles[i].characteristics())
}


