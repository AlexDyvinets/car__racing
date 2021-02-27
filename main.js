canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let bg = new Image();
let mainCar = new Image();
let anotherCar = new Image();

bg.src = '/imgs/background.png';
mainCar.src = '/imgs/main-car.png';
anotherCar.src = '/imgs/another-cars.png';

let carsParam = {
    width: 50,
    height: 50,
    x: 130,
    y: 90,
}

let score = 0;

let carPos = [];
let backPos = [];


carPos[0] = {
    x: Math.floor(Math.random()),
    y: -60
};


const drawGame = () => {
    ctx.drawImage(bg, -50, 0, 400, 400);
    ctx.drawImage(mainCar, carsParam.x, carsParam.y, carsParam.width, carsParam.height);
    moveAnotherCars();
    ctx.fillStyle = "#000";
    ctx.font = "18px Verdana";
    ctx.fillText(`Счёт: ${score}`, 10, 20);



    if(rightPressed == true){
        
        carsParam.x += 3;
    }
    if(leftPressed == true){
        carsParam.x -= 3;
    }


}


const moveAnotherCars = () => {
    for(let i=0; i<carPos.length; i++){
        ctx.drawImage(anotherCar, carPos[i].x, carPos[i].y, carsParam.width, carsParam.height);
        carPos[i].y++;
        if(carPos[i].y == 100){
            carPos.push({
                x: Math.floor(Math.random() * Math.floor(200)),
                y: -60
            });
        if(carPos[i].y == 100){
            score++;
        }
        }
    }

}

const levelUp = () => {
    if(score <= 30){
        setInterval(drawGame, 10);
    }
    if(score > 30 && score <= 50){
        setInterval(drawGame, 2);
    }
    if(score > 50 && score <= 70){
        setInterval(drawGame, 5);
    }
    if(score > 70 && score <= 100){
        setInterval(drawGame, 3);
    }
}



let keyDownHandler = (e) => {
    if(e.key == 'Right' || e.key == 'ArrowRight'){
        rightPressed = true;
    } else if(e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = true;
    }
}

let keyUpHandler = (e) => {
    if(e.key == 'Right' || e.key == 'ArrowRight'){
        rightPressed = false;
    }else if(e.key == 'Left' || e.key == 'ArrowLeft'){
        leftPressed = false;
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

levelUp();
