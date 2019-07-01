const MovingField = require('./MovingField.js');

class MoveCommands {
    constructor(direction, move, positionX, positionY) {
        this.direction = direction;
        this.move = move;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    moveCommand(move, direction, positionX, positionY) {
        const movingField = new MovingField(positionX, positionY);
        if (move) {
            switch (direction) {
                case "N":

                    if (movingField.isRobotOutBorder(positionX, positionY + 1)) {
                        console.log("The Robot is out of border! ")
                        break;
                    }
                    else {
                        positionY = positionY + 1;

                        break;
                    }

                case "S":
                    if (movingField.isRobotOutBorder(positionX, positionY - 1)) {
                        console.log("The Robot is out of border! ");
                        break;
                    }
                    else {
                        positionY = positionY - 1;
                        break;
                    }



                case "E":
                    if (movingField.isRobotOutBorder(positionX + 1, positionY)) {
                        console.log("The Robot is out of border! ");
                        break;
                    }
                    else {
                        positionX = positionX + 1;
                        break;

                    }



                case "W":
                    console.log(movingField.isRobotOutBorder(positionX, positionY - 1));
                    if (movingField.isRobotOutBorder(positionX - 1, positionY)) {
                        console.log("The Robot is out of border! ");
                        break;
                    }

                    positionX = positionX - 1;
                    break;

            }

        }
        return {
            direction: direction,
            positionX: positionX,
            positionY: positionY
        }
    }
}

//const moveCommands = new MoveCommands();
//const move1 = moveCommands.moveCommand(true, "S", 0, 0);
//console.log(move1);
module.exports = MoveCommands;

