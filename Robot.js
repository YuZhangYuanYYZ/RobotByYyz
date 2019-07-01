const MoveCommands = require('./MoveCommands.js');
const TurnLeftCommands = require('./TurnLeftCommands.js');
const TurnRightCommands = require('./TurnRightCommands.js');
const moveCommands = new MoveCommands();
const turnLeftCommands = new TurnLeftCommands();
const turnRightCommands = new TurnRightCommands();

class Robot {
    constructor(commands, move, direction, positionX, positionY, turn) {
        this.commands = commands;
        this.move = move;
        this.direction = direction;
        this.positionX = positionX;
        this.positionY = positionY;
        this.turn = turn;
    }

    RobotExcuteCommand(commands, move, direction, positionX, positionY, turn) {
        switch (commands) {
            case "move":
                return moveCommands.moveCommand(move, direction, positionX, positionY);

                break;
            case "left":
                return turnLeftCommands.turnLeftCommand(direction, turn);

                break;
            case "right":
                return turnRightCommands.turnRightCommand(direction, turn);


                break;
        }
    }

    // Robotprint(direction,positionX,positionY){
    //     console.log("2");
    //     console.log(direction,positionX,positionY);
    //     console.log(`direction:${direction},positionX:${positionX},positionY:${positionY}`);
    // 
}

// const robot = new Robot();
// const command1 = robot.RobotExcuteCommand("move",true,"N",0,0,"L");
// console.log("command1");
// console.log(command1);
module.exports = Robot;