let squadre = [
    {
        name: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    }
]
//generare numeri random al posto degli 0 nelle pripietà: punti fatti e falli subiti

// Math.floor(Math.random() * (max - min + 1)) + min;

for (i = 0; i < squadre.length; i++) {
    let squadra = squadre[i]

    squadra[i.puntiFatti].push = Math.floor(Math.random() * 100) + 1;
    squadra[i.falliSubiti].push = Math.floor(Math.random() * 100) + 1;

    console.log(squadra)
}
