class TurnRightCommands {
    constructor(direction, turn) {
        this.direction = direction;
        this.turn = turn;
    }

    turnRightCommand(direction, turn) {
        if (turn == "R") {
            switch (direction) {
                case "N":
                    direction = "E";
                    break;

                case "S":
                    direction = "W";
                    break;

                case "E":
                    direction = "S";
                    break;

                case "W":
                    direction = "N";
                    break;

            }
        }
        return {
            direction: direction
        }
    }
}
// const turnRightCommands = new TurnRightCommands("N","right");
// console.log(turnRightCommands.turnRightCommand());

module.exports = TurnRightCommands;