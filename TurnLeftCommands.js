const MovingField = require('./MovingField.js');

class TurnLeftCommands {
    constructor(direction, turn) {
        this.direction = direction;
        this.turn = turn;
    }

    turnLeftCommand(direction, turn) {
        if (turn == "L") {
            switch (direction) {
                case 'N':
                    direction = 'W';
                    break;

                case 'S':
                    direction = 'E';
                    break;

                case 'E':
                    direction = "N";
                    break;

                case 'W':
                    direction = 'N';
                    break;

            }
        }
        return {
            direction: direction
        }
    }
}
// const turnLeftCommands = new TurnLeftCommands("N","left");
// console.log(turnLeftCommands.turnLeftCommand());

module.exports = TurnLeftCommands;