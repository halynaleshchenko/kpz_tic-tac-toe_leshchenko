function makeMove(row, col) {
    var cell = document.getElementById(row.toString() + col.toString());
    if (cell.innerHTML === ' ') {
        cell.innerHTML = '<?= $playerX->getSymbol() ?>';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('symbolForm');
    const board = document.getElementById('board');
    const currentPlayerDisplay = document.getElementById('currentPlayer');
    const gameOptions = document.getElementById('gameOptions');
    const continueGameBtn = document.getElementById('continueGame');
    const restartGameBtn = document.getElementById('restartGame');

    let currentPlayerSymbol;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const playerXSymbol = document.getElementById('symbolX').checked ? 'X' : 'O';
        const playerOSymbol = playerXSymbol === 'X' ? 'O' : 'X';

        board.dataset.playerXSymbol = playerXSymbol;
        board.dataset.playerOSymbol = playerOSymbol;

        startGame(playerXSymbol);
    });

    function startGame(startingPlayer) {
        currentPlayerSymbol = startingPlayer;
        currentPlayerDisplay.textContent = `Гравець ${currentPlayerSymbol} ходить`;
        board.dataset.currentPlayerSymbol = currentPlayerSymbol;

        const cells = board.getElementsByTagName('td');
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = ''; // Clear cells
            cells[i].classList.remove('highlight'); // Remove highlight
            cells[i].removeEventListener('click', handleCellClick); // Remove previous event listeners
            cells[i].addEventListener('click', handleCellClick);
        }

        gameOptions.style.display = 'none';
    }

    function handleCellClick(event) {
        const cell = event.target;
        if (cell.innerHTML !== '') {
            return;
        }

        cell.innerHTML = currentPlayerSymbol;

        const winningCells = checkWin(currentPlayerSymbol);
        if (winningCells) {
            currentPlayerDisplay.textContent = `Гравець ${currentPlayerSymbol} виграв!`;
            highlightWinningCells(winningCells);
            gameOptions.style.display = 'flex';
        } else if (isBoardFull()) {
            currentPlayerDisplay.textContent = 'Нічия!';
            gameOptions.style.display = 'flex';
        } else {
            currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X';
            currentPlayerDisplay.textContent = `Гравець ${currentPlayerSymbol} ходить`;
        }
    }

    function checkWin(symbol) {
        const winningCombinations = [
            ['00', '01', '02'],
            ['10', '11', '12'],
            ['20', '21', '22'],
            ['00', '10', '20'],
            ['01', '11', '21'],
            ['02', '12', '22'],
            ['00', '11', '22'],
            ['02', '11', '20']
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (document.getElementById(a).innerHTML === symbol &&
                document.getElementById(b).innerHTML === symbol &&
                document.getElementById(c).innerHTML === symbol) {
                return combination;
            }
        }

        return null;
    }

    function highlightWinningCells(cells) {
        for (const cell of cells) {
            document.getElementById(cell).classList.add('highlight');
        }
    }

    function isBoardFull() {
        const cells = board.getElementsByTagName('td');
        for (const cell of cells) {
            if (cell.innerHTML === '') {
                return false;
            }
        }
        return true;
    }

    continueGameBtn.addEventListener('click', function() {
        startGame(currentPlayerSymbol);
    });

    restartGameBtn.addEventListener('click', function() {
        gameOptions.style.display = 'none';
        currentPlayerDisplay.textContent = '';
    });
});



