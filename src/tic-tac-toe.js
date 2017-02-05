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
        if (this.isDraw() || this.getWinner()) return true;
        return false;
    }

    getWinner() {
        if (this.field[0][0] === null && this.field[1][1] === null && this.field[2][2] === null) return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.field[i][j] === null) return false;
            }
        }

        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;