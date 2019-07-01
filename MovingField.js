//The movingField is 6*6
class MovingField {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
    }
    isXAxisOutBorder(positionX) {
        return (positionX < 0 || positionX > 6);

    }
    isYAxisOutBorder(positionY) {

        return (positionY < 0 || positionY > 6);
    }
    isRobotOutBorder(positionX, positionY) {
        return (positionX < 0 || positionX > 6) || (positionY < 0 || positionY > 6);
    }
}

// const instanceofMovingField = new MovingField();
// console.log(instanceofMovingField.isRobotOutBorder(7,2));
module.exports = MovingField;