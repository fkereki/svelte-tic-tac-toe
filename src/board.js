export class TicTacToe {
    constructor() {
        this.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    }

    click(rowIndex, columnIndex, turn) {
        if (!this.board[rowIndex][columnIndex]) {
            this.board[rowIndex][columnIndex] = turn;
        }
    }

    getwhoWins() {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
                return this.board[i][1];
            }
            if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
                return this.board[1][i];
            }
        }

        if (
            (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] == this.board[2][2]) ||
            (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] == this.board[2][0])
        ) {
            return this.board[1][1];
        }

        return null;
    }

    isBoardFull() {
        return this.board.every(row => row.every(Boolean));
    }
}
