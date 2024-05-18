<?php
require_once 'src/Model/Player.php';
require_once 'src/Model/Board.php';

$playerX = new Player('X');
$playerO = new Player('O');
$board = new Board();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">

    <title>Tic Tac Toe</title>
</head>
<body>
<h1>Tic Tac Toe</h1>

<form id="symbolForm">
    <label for="symbolX">Гравець Х:</label>
    <input type="radio" id="symbolX" name="symbol" value="X" checked>
    <label for="symbolO">Гравець O:</label>
    <input type="radio" id="symbolO" name="symbol" value="O">
    <input type="submit" value="Почати гру">
</form>

<table id="board">
    <?php for ($i = 0; $i < 3; $i++): ?>
        <tr>
            <?php for ($j = 0; $j < 3; $j++): ?>
                <td id="<?= $i ?><?= $j ?>"></td>
            <?php endfor; ?>
        </tr>
    <?php endfor; ?>
</table>

<span id="currentPlayer"></span>

<div id="gameOptions" style="display: none;">
    <button id="continueGame">Продовжити гру</button>
    <button id="restartGame">Повернутись до початкового екрану</button>
</div>

<script src="js/script.js"></script>
</body>
</html>
