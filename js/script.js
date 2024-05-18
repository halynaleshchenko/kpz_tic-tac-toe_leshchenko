function makeMove(row, col) {
    var cell = document.getElementById(row.toString() + col.toString());
    if (cell.innerHTML === ' ') {
        cell.innerHTML = '<?= $playerX->getSymbol() ?>';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('symbolForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var playerXSymbol = document.getElementById('symbolX').checked ? 'X' : 'O';
        var playerOSymbol = playerXSymbol === 'X' ? 'O' : 'X';

        var board = document.getElementById('board');
        board.dataset.playerXSymbol = playerXSymbol;
        board.dataset.playerOSymbol = playerOSymbol;

        var cells = board.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].innerHTML = ''; // Очищаємо клітинки перед початком гри
            cells[i].addEventListener('click', function() {
                if (this.innerHTML === '') {
                    var currentPlayerSymbol = board.dataset.currentPlayerSymbol;

                    this.innerHTML = currentPlayerSymbol;

                    var currentPlayerDisplay = document.getElementById('currentPlayer');
                    currentPlayerDisplay.textContent = "Гравець " + (currentPlayerSymbol === 'X' ? 'O' : 'X') + " ходить";

                    board.dataset.currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X';
                }
            });
        }
        //load text
        var currentPlayerDisplay = document.getElementById('currentPlayer');
        currentPlayerDisplay.textContent = "Гравець " + (playerXSymbol === 'X' ? 'X' : 'O') + " ходить";

        board.dataset.currentPlayerSymbol = playerXSymbol;
    });
});

