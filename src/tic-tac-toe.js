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
        var winner = null;
        if (this.field[0][0] === null && this.field[1][1] === null && this.field[2][2] === null) return null;

        else if (!this.field[0][0]) {
            winner = this.field[0][0];
            if (this.field[0][2] == winner) {
                if(this.field[0][1] == winner) return winner;
            }
            else if (this.field[2][0] == winner) {
                if (this.field[1][0] == winner) return winner;
            }
        }

        else if(!this.field[1][1]) {
            winner = this.field[1][1];
            if (this.field[0][0] == winner) {
                if(this.field[2][2] == winner) return winner;
            }
            else if (this.field[0][2] == winner) {
                if (this.field[2][0] == winner) return winner;
            }
            else if (this.field[0][1] == winner) {
                if (this.field[2][1] == winner) return winner;
            }
            else if (this.field[1][0] == winner) {
                if (this.field[1][2] == winner) return winner;
            }
        }

        else if(!this.field[2][2]) {
            winner = this.field[2][2];
            if (this.field[0][2] == winner) {
                if(this.field[1][2] == winner) return winner;
            }
            else if (this.field[2][0] == winner) {
                if (this.field[2][1] == winner) return winner;
            }
        }

        else return null;

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
