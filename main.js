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


const drawGame = () => {
    ctx.drawImage(bg, -50, 0, 400, 400);
    ctx.drawImage(mainCar, carsParam.x, carsParam.y, carsParam.width, carsParam.height);
    ctx.drawImage(anotherCar, 100, 15, carsParam.width, carsParam.height);

    if(rightPressed == true){
        carsParam.x += 3
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


setInterval(drawGame, 10);

