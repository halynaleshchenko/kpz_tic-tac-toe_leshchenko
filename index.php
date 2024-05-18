<?php
// index.php

require_once 'src/Model/Player.php';
require_once 'src/Model/Board.php';

// Створення гравців
$playerX = new Player('X');
$playerO = new Player('O');

// Створення дошки
$board = new Board();

// Поставимо символи гравців на дошку
$board->mark(0, 0, $playerX->getSymbol());
$board->mark(1, 1, $playerO->getSymbol());
$board->mark(2, 2, $playerX->getSymbol());
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
<table>
    <?php for ($i = 0; $i < 3; $i++): ?>
        <tr>
            <?php for ($j = 0; $j < 3; $j++): ?>
                <td><?= $board->getSymbol($i, $j) ?></td>
            <?php endfor; ?>
        </tr>
    <?php endfor; ?>
</table>
</body>
</html>
