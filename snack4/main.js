// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
     nome : 'Milan',
     punti : 0,
     falliSubiti : 0
    },

    {
     nome : 'Inter',
     punti : 0,
     falliSubiti : 0
    },

    {
     nome : 'Napoli',
     punti : 0,
     falliSubiti : 0
    },  
    
    {
     nome : 'Lazio',
     punti : 0,
     falliSubiti : 0
    }    
]

//punti e falli random
for (let i = 0; i < squadre.length; i++){
    squadre[i].punti = generateRandomIntegerInRange(1,100)
    squadre[i].falliSubiti = generateRandomIntegerInRange(1,100)
    console.log(squadre[i].punti)
    console.log(squadre[i].falliSubiti)
}
console.log(squadre)




// funzione numero random
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
