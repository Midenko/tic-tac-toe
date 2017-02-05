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
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.count++;
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (this.field[i][j] === null) return true;
            }
        }

        return false;
    }

    isDraw() {
        if (this.noMoreTurns && !this.getWinner) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;