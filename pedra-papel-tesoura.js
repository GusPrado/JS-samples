/*
Desenvolva um pequeno programa que consiga ao receber o resultado de um conjunto de disputas de "pedra, papel e tesoura" entre dois jogadores, saber qual deles venceu mais partidas.
Resolução #1 - Analisando um jogo de Pedra, papel e tesoura
Formato de entrada: "SRRSPSRPPRSSSR"             
Formato de saída:
“O jogador X ganhou a disputa por X a Y”
“O jogo empatou”

S = tesoura
R = pedra
P = papel
*/

//const games = 'SRRSPSRPPRSSSR'
const games = 'SSPPRRSS'
const vetGames = [...games]

const who_wins = (a, b) => {
    if (a == 'R' && b == 'P'){
        return 2
    } else if (a == 'R' && b == 'S') {
        return 1
    } else if (a == 'S' && b == 'R') {
        return 2
    } else if (a == 'S' && b == 'P') {
        return 1
    } else if (a == 'P' && b == 'S') {
        return 2
    } else if (a == 'P' && b == 'R') {
        return 1
    } else {
        return 0
    }
}

const games_match = () => {
    //Validação de jogadas em pares
    if (games.length % 2 !== 0) {
        return console.log('Jogadas devem ser em pares')
    }
    
    for (i of games){

        if ((i !== 'S') && (i !== 'P') && (i !== 'R')) {
            return console.log(`Jogada inválida como ${i} na opção ${games.indexOf(i) + 1}. Usar apenas S, P ou R`)
        }
    }

        let player1 = 0
        let player2 = 0
           
        for (i = 0 ; i < games.length ; i+=2){
            console.log(games[i], games[i + 1])
            const winner = who_wins(games[i], games[i + 1])
            if (winner == 1) {
                player1++
            } else if (winner == 2) {
                player2++
            }
        }
    
        if (player1 > player2) {
            console.log(`O jogador Player1 ganhou por ${player1} a ${player2}`)
        } else if (player1 < player2) {
            console.log(`O jogador Player2 ganhou por ${player2} a ${player1}`)
        } else {
            console.log(`O jogo empatou após ${games.length / 2} jogadas`)
        }
    }

    



games_match()