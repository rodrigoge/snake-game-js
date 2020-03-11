/* window.onload = function(){
    //visual 
    var field = document.getElementById('field');
    var context = field.getContext('2d');
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);
    
    const speed = 1;
    var speedX = 0
    var speedY = 0;
    //snake head position
    var pointX = 10;
    var pointY = 15;
    var lenght = 30;
    var quantity = 20;
    var fruitX = 15;
    var fruitY = 15;

    var trail = [];
    var snakebody = 5;


    function game(){
        pointX += speedX;
        pointY += speedY;

        //snake never leaves the field
        if(pointX < 0){
            pointX = quantity - 1;
        }

        if(pointX > quantity - 1){
            pointX = 0;
        }

        if(pointY < 0){
            pointY = quantity - 1;
        }

        if(pointY > quantity - 1){
            pointY = 0;
        }

        //color and position of field
        context.fillStyle = '#005500';
        context.fillRect(0, 0, field.width, field.height);
        
        //color and position of fruit
        context.fillStyle = "#990000";
        context.fillRect(fruitX * length, fruitY * length, lenght, lenght);
        
        //color and position of snake
        context.fillStyle = "black";
        for(var i = 0; i < trail.lenght; i++){
            context.fillRect(trail[i].x * length, trail[i].y * length, lenght - 1, lenght - 1);

            //when the snakes hits the body
            if(trail[i].x == pointX && trail[i].y == pointY){
                speedX = 0;
                speedY = 0;
                alert("Game over");
            }
        }
        
        
        trail.push({ 
            x:pointX, y:pointY
        })

        //decreasing snake size
        while(trail.length > snakebody){
            trail.shift();
        }

        //increasing snake size
        if(fruitX == pointX && fruitY == pointY){
            snakebody++;
            fruitX = Math.floor(Math.random() * lenght);
            fruitY = Math.floor(Math.random() * lenght);
        }

    }

    //move snake
    function keyPush(event){
        switch(event.keyCode) {
            //left
            case 37:
                speedX =- speed;
                speedY = 0;
            break;
            //up
            case 38:
                speedX = 0;
                speedY = -speed;
            break;
            //right
            case 39:
                speedX = speed;
                speedY = 0;
            break;
            //down
            case 40:
                speedX = 0;
                speedY = speed;
            break;

            default:
            break;
        }
    }

} */

