export function TicTacToe({ onWin, onTie }) {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];

    let turn = "X";
    let done = false;

    return {
        board,

        click(rowIndex, columnIndex) {
            if (!done && !board[rowIndex][columnIndex]) {
                board[rowIndex][columnIndex] = turn;
                turn = turn === "X" ? "O" : "X";

                const winner = getWinner(board);
                if (winner) {
                    onWin(winner);
                    done = true;
                } else if (isBoardFull(board)) {
                    onTie();
                    done = true;
                }
            }

            return this;
        }
    };
}

function getWinner(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][1];
        }
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[1][i];
        }
    }

    if (
        (board[0][0] && board[0][0] === board[1][1] && board[1][1] == board[2][2]) ||
        (board[0][2] && board[0][2] === board[1][1] && board[1][1] == board[2][0])
    ) {
        return board[1][1];
    }

    return null;
}

function isBoardFull(board) {
    return board.every(row => row.every(Boolean));
}
