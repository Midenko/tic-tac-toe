class TicTacToe {
    constructor() {
        this.count = 0; 
        this.field = [ [null, null, null], [null, null, null], [null, null, null] ];
        }

    getCurrentPlayerSymbol() {
        if (this.count % 2 == 0) return 'x';
        else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;