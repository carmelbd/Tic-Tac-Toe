var game;

function init() {
    game = {
        player0: 'X',
        player1: 'O',
        nowPlaying: 1, /// 1 or 0
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        finished: false
    };
    resetClientBoard()
}

function clickOnCell(row, col) {
    if (game.finished || game.board[row][col] != null) {
        return;
    }
    game.board[row][col] = game['player' + getPlayer()];
    game.nowPlaying++;
    cellNum = document.getElementById(row.toString() + col.toString())
    cellNum.innerText = game.board[row][col];
}

function getPlayer() {
    return game.nowPlaying % 2;
}


function whoWon(playerName) {
    console.log(`${playerName} Won!`)
}


function resetClientBoard() {
    game.board.forEach(function (item, index) {
        item.forEach(function (childItem, childIndex) {
            document.getElementById(index.toString() + childIndex.toString()).innerText = "";
        });
    })
}

init()


// function checkIfWin(PlayerX) {
//     if (box1 === 'X' && box2 === 'X' && box3 === 'X' || // '---'
//         box1 === 'X' && box5 === 'X' && box9 === 'X' || // '\'
//         box1 === 'X' && box4 === 'X' && box7 === 'X') { // '|'   
//         whoWon('Carmel')
//     } else if (box2 === 'X' && box5 === 'X' && box8 === 'X') { // '|'
//         whoWon('Carmel')
//     } else if (box3 === 'X' && box6 === 'X' && box9 === 'X' || // '|'
//         box3 === 'X' && box5 === 'X' && box7 === 'X') { // '/'
//         whoWon('Carmel')
//     } else if (box4 === 'X' && box5 === 'X' && box6 === 'X') { // '---'
//         whoWon('Carmel')
//     } else if (box3 === 'X' && box5 === 'X' && box8 === 'X' || // '|'
//         box7 === 'X' && box8 === 'X' && box9 === 'X') { // '/'
//         whoWon('Carmel')
//     }
// }


function clickedOnCell(row, col) {
    if (game.finished || game.board[row][col] != null) {
        return;
    }

    game.board[row][col] = game['player' + getPlayer()];
    game.nowPlaying++;

    document.getElementById(row.toString() + col.toString()).innerText = game.board[row][col];

    if (isWon(row, col)) {
        game.finished = true;
        console.log('You Won');
    }
}

function getPlayer() {
    return game.nowPlaying % 2;
}

function isWon(row, col) {
    return checkRowWinning(row) || checkColWinning(col) || checkRightSlantWinning(row, col) || checkLeftSlantWinning(row, col);
}

function checkRowWinning(row) {
    return ((game.board[row][0] == game.board[row][1]) && (game.board[row][1] == game.board[row][2]));
}

function checkColWinning(col) {
    return ((game.board[0][col] == game.board[1][col]) && (game.board[1][col] == game.board[2][col]));
}

function checkRightSlantWinning(row, col) {
    return ((game.board[0][0] == game.board[1][1]) && (game.board[1][1] == game.board[2][2]) && (row == col));
}

function checkLeftSlantWinning(row, col) {
    return ((game.board[0][2] == game.board[1][1]) && (game.board[1][1] == game.board[2][0]) && (col + row == 2));
}

// function resetClientBoard() {
//     game.board.forEach(function (rowItem, row) {
//         rowItem.forEach(function (colItem, col) {
//             document.getElementById(row.toString() + col.toString()).innerText = "";
//         });
//     })
// }

function resetClientBoard(row, col) {
    for (var i = 0; i < game.board.length; i++) {
        for (var j = 0; j < game.board[i].length; j++) {
            console.log(game.board[i][j]);
            document.getElementById(`${i.toString()}${j.toString()}`).innerText = ''
            console.log((`${i.toString()}${j.toString()}`))
        }
    }
    // let row = game.board[row]
    // let col = game.board[col]
    // for (let i = 0; i < row ; i++) {
    //     document.getElementById(row).innerText = ''
    // }
    // for(let rowIndex of game.board[row][col]){
    //     row = document.getElementById(rowIndex)
    //     row.innerText = "";
    // }
    // for ( let colIndex of col){
    //     col = document.getElementById(colIndex)
    //     col.innerText = "";
    // }
    // game.board.forEach(function (rowItem, row) {
    //     rowItem.forEach(function (colItem, col) {
    //         document.getElementById(row.toString() + col.toString()).innerText = "";
    //     });
    // })
}

init();