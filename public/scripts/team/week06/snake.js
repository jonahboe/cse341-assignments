window.onload = function() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game, 1000 / 10);
};

xPos = 1;
yPos = 1;
xDir = 1;
yDir = 0;
blockDim = 20;
height = 20;
width = 40;
xFood = Math.floor(Math.random() * width);
yFood = Math.floor(Math.random() * height);
body = [];
size = 5;
function game() {
    // Simulate movement
    body.push({x:xPos, y:yPos});
    while(body.length > size) {
        body.shift();
    }

    // Advance the head
    xPos += xDir;
    yPos += yDir;

    // Draw the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // Draw the snake
    ctx.fillStyle = "green";
    for(var i = 0; i < body.length; i++) {
        ctx.fillRect(body[i].x * blockDim, body[i].y * blockDim, blockDim - 2, blockDim - 2);
        if(body[i].x == xPos && body[i].y == yPos) {
            die()
        }
    }

    // If we are eating
    if(xFood == xPos && yFood == yPos) {
        size++;
        xFood = Math.floor(Math.random() * width);
        yFood = Math.floor(Math.random() * height);
    }
    ctx.fillStyle = "purple";
    ctx.fillRect(xFood * blockDim, yFood * blockDim, blockDim - 2, blockDim - 2 );

    // If we died
    if (xPos == -1 || xPos == width ||
        yPos == -1 || yPos == height)
        die();
}

// If we die we need to save our high score
function die() {
    var cookies = document.cookie.split("; ");
    var highScore = 0;
    cookies.forEach(cookie => {
        if (cookie.search("highScore") > -1) {
            highScore = Math.round(cookie.split("=")[1]);
        }
    });
    alert("You Died!!!");
    if (size > highScore)
        document.cookie = "highScore=" + size;
    location.reload();
}

// Use arrow keys to control
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            if (xDir != 1) {
                xDir = -1;
                yDir = 0;
            }
            break;
        case 38:
            if (yDir != 1) {
                xDir = 0;
                yDir = -1;
            }
            break;
        case 39:
            if (xDir != -1) {
                xDir = 1;
                yDir = 0;
            }
            break;
        case 40:
            if (yDir != -1) {
                xDir = 0;
                yDir = 1;
            }
            break;
    }
}
