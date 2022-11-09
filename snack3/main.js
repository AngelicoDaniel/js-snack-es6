// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: 'Monociclo',
        peso: 1
    },

    {
        nome: 'Bicicletta',
        peso: 1.5
    },

    {
        nome: 'Triciclo',
        peso: 2
    }
]
console.table(bici)

//math.min
// let minWeight = Math.min(...bici.map( ( {peso} ) => peso ) )

// console.log(`peso minimo: ${minWeight}`)

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++) {
    let elementoCorrente = bici[i];
    let { peso } = elementoCorrente;

    if ( peso < biciLeggera.peso ) {
        biciLeggera = elementoCorrente;
    }
    
}

console.log ( biciLeggera )