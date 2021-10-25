/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */


let listaBici = [
    {
        bikeName: 'cannondale',
        weigth: 10
    },
    {
        bikeName: 'bianchi',
        weigth: 11
    },
    {
        bikeName: 'ktm',
        weigth: 9
    }

]

let biciLeggera = listaBici[0]

for (let i = 0; i < listaBici.length; i++) {
    const bike = listaBici[i]
    if (bike.weigth < biciLeggera.weigth) {
        biciLeggera = bike
    }
}
console.log(biciLeggera)
document.querySelector(".snack1").innerHTML = `${biciLeggera.bikeName}, ${biciLeggera.weigth}`

/* console.log(listaBici)
for (let i = 0; i < listaBici.length; i++) {
    let bike = listaBici[i]
    console.log(bike)
} */

/*
    for (let i = 0; i < listabici.length; i++) {
        let confronto = listaBici[i]
        let confronto_2 = listaBici[i + 1]
        if (confronto.weigth < confronto_2.weigth) {
            console.log("test")
        }
    }
bikeWeight(listaBici) */