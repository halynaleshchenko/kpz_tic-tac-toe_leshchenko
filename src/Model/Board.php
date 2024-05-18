<?php
// The playing field in the form of a two-dimensional array

class Board {
    private $board;

    public function __construct() {
        $this->board = array_fill(0, 3, array_fill(0, 3, ' '));
    }

    public function display() {
        foreach ($this->board as $row) {
            echo implode('|', $row) . PHP_EOL;
            echo "-----" . PHP_EOL;
        }
    }

    public function mark($row, $col, $symbol) {
        if ($this->board[$row][$col] === ' ') {
            $this->board[$row][$col] = $symbol;
            return true;
        } else {
            return false;
        }
    }

    public function getSymbol($row, $col) {
        return $this->board[$row][$col];
    }

}
?>