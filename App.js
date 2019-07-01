const Robot = require('./Robot.js');
const robot = new Robot();

class APP {
    constructor(commands, move, direction, positionX, positionY, turn) {
        this.commands = commands;
        this.move = move;
        this.direction = direction;
        this.positionX = positionX;
        this.positionY = positionY;
        this.turn = turn;
    }

    excute() {

        const move1 = robot.RobotExcuteCommand("move", true, "N", 0, 0, false);

        console.log(move1);
        const turnleft1 = robot.RobotExcuteCommand("left", false, move1.direction, move1.positionX, move1.positionY, "L");

        console.log(turnleft1);
        const move2 = robot.RobotExcuteCommand("move", true, turnleft1.direction, move1.positionX, move1.positionY, false);

        console.log(move2);
        const turnright1 = robot.RobotExcuteCommand("right", false, move2.direction, move2.positionX, move2.positionY, "R");

        console.log(turnright1);
        const move3 = robot.RobotExcuteCommand("move", true, turnright1.direction, move2.positionX, move2.positionY, false);

        console.log(move3);
    }
}
const app = new APP();
app.excute();

