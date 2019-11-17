const resultado = [
    ['x', 'o', 'o'],
    ['o', 'x', 'x'],
    ['x', 'x', 'o']
]

function velha(result) {

    //checa linha
    for (i = 0; i < 3; i++) {
        let x = 0
        let o = 0
        for (j = 0; j < 3; j++) {
            if (result[i][j] == 'x') {
                x++
            } else o++
            if (x == 3) {
                return 'x'
            } else if (o == 3) {
                return 'o'
            }
        }
    }

    //checa coluna
    for (i = 0; i < 3; i++) {
        let x = 0
        let o = 0
        for (j = 0; j < 3; j++) {
            if (result[j][i] == 'x') {
                x++
            } else o++
            if (x == 3) {
                return 'x'
            } else if (o == 3) {
                return 'o'
            }
        }
    }

    //checa diagonal
    if (result[0][0] == result[1][1] && result[1][1] == result[2][2]) {
        return result[0][0]
    } else if (result[2][0] == result[1][1] && result[1][1] == result[0][2]) {
        return result[0][0]
    } else return false

}

let ganhador = velha(resultado)
if (ganhador) {
    console.log(`Jogador usando '${ganhador.toUpperCase()}' ganhou`)
} else console.log('Houve empate')