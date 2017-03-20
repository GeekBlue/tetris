//随机生成一个方块
function generateOneBlock(ranShape){
    //形状,位置,旋转角度
    var ranPosition = (Math.random() * 10) >> 0;
    FallingBlockLeft = ranPosition;
    var ranAngle = [0,90,180,270][ (Math.random() * 4) >> 0 ];

    switch (ranAngle){
        case 0:
            switch (ranShape){
                case 1: if(ranPosition > 6) FallingBlockLeft = ranPosition = 6;
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[0][ranPosition+2] || gridArr[0][ranPosition+3]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[0][ranPosition+3] = {shape:1,id:Math.random(),falling:true};showBlock(); setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[0][ranPosition+3] = {shape:1,id:Math.random(),falling:true};
                        FallingBlockBottom = 0;
                        rotateCenter=[0,ranPosition+1]; 
                        FallingBlockShape = ranShape;
                        break;//横
                case 2: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true};
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//田
                case 3: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[1][ranPosition] || gridArr[1][ranPosition+1] || gridArr[1][ranPosition+2] || gridArr[0][ranPosition+1]){gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = gridArr[0][ranPosition+1] = {shape:3,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = gridArr[0][ranPosition+1] = {shape:3,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//土
                case 4: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition+2] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1] || gridArr[1][ranPosition+2]){gridArr[0][ranPosition+2] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:4,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition+2] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:4,id:Math.random(),falling:true};
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//L
                case 5: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1] || gridArr[2][ranPosition+1]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:5,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:5,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 2;
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//5
                case 6: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1] || gridArr[1][ranPosition+2]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:6,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:6,id:Math.random(),falling:true};
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//反L
                case 7: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1]){gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = {shape:7,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = {shape:7,id:Math.random(),falling:true};
                        FallingBlockBottom = 2;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//2
            } ;
            break;          

         case 90:
            switch (ranShape){
                case 1: if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[3][ranPosition]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[3][ranPosition] = {shape:1,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[3][ranPosition] = {shape:1,id:Math.random(),falling:true};
                        FallingBlockBottom = 3; 
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//竖
                case 2: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//田
                case 3: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[1][ranPosition+1]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[1][ranPosition+1] = {shape:3,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[1][ranPosition+1] = {shape:3,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 2; 
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//土
                case 4: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[2][ranPosition+1]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[2][ranPosition+1] = {shape:4,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[2][ranPosition+1] = {shape:4,id:Math.random(),falling:true};
                        FallingBlockBottom = 2; 
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//L
                case 5: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[1][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[0][ranPosition+2]){gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[0][ranPosition+2] = {shape:5,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[0][ranPosition+2] = {shape:5,id:Math.random(),falling:true};
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape; 
                        break;//5
                case 6: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[0][ranPosition+1]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = {shape:6,id:Math.random(),falling:true};showBlock(); setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = {shape:6,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 2; 
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//反L
                case 7: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[1][ranPosition+2]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:7,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:7,id:Math.random(),falling:true};
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape; 
                        break;//2
            } ;
            break; 

        case 180:
            switch (ranShape){
                case 1: if(ranPosition > 6) FallingBlockLeft = ranPosition = 6; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[0][ranPosition+2] || gridArr[0][ranPosition+3]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[0][ranPosition+3] = {shape:1,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[0][ranPosition+3] = {shape:1,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 0; 
                        rotateCenter=[0,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//横
                case 2: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1; 
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape;
                        break;//田
                case 3: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[0][ranPosition+2] || gridArr[1][ranPosition+1]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[1][ranPosition+1] = {shape:3,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[1][ranPosition+1] = {shape:3,id:Math.random(),falling:true};
                        FallingBlockBottom = 1; 
                        rotateCenter=[0,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//土
                case 4: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[0][ranPosition+1] || gridArr[0][ranPosition+2]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = {shape:4,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = {shape:4,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1;
                        rotateCenter=[0,ranPosition+1];
                        FallingBlockShape = ranShape; 
                        break;//L
                case 5: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1] || gridArr[2][ranPosition+1]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:5,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:5,id:Math.random(),falling:true};
                        FallingBlockBottom = 2;
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape; 
                        break;//5
                case 6: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[0][ranPosition+2] || gridArr[1][ranPosition+2]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[1][ranPosition+2] = {shape:6,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[0][ranPosition+2] = gridArr[1][ranPosition+2] = {shape:6,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1;
                        rotateCenter=[0,ranPosition+1]; 
                        FallingBlockShape = ranShape;
                        break;//反L
                case 7: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1]){gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = {shape:7,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = {shape:7,id:Math.random(),falling:true};
                        FallingBlockBottom = 2; 
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape;
                        break;//2
            } ;
            break; 

        case 270:
            switch (ranShape){
                case 1: if(gridArr[0][ranPosition] || gridArr[1][ranPosition] || gridArr[2][ranPosition] || gridArr[3][ranPosition]){gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[3][ranPosition] = {shape:1,id:Math.random(),falling:true}; showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[1][ranPosition] = gridArr[2][ranPosition] = gridArr[3][ranPosition] = {shape:1,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 3;
                        rotateCenter=[1,ranPosition];
                        FallingBlockShape = ranShape; 
                        break;//竖
                case 2: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition] || gridArr[1][ranPosition+1]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true};showBlock(); setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition] = gridArr[1][ranPosition+1] = {shape:2,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition]; 
                        FallingBlockShape = ranShape;
                        break;//田
                case 3: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[1][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[2][ranPosition+1]){gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:3,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:3,id:Math.random(),falling:true};
                        FallingBlockBottom = 2;
                        rotateCenter=[1,ranPosition+1]; 
                        FallingBlockShape = ranShape;
                        break;//土
                case 4: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[2][ranPosition+1]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:4,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:4,id:Math.random(),falling:true};
                        FallingBlockBottom = 2;
                        rotateCenter=[1,ranPosition+1]; 
                        FallingBlockShape = ranShape;
                        break;//L
                case 5: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[1][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[0][ranPosition+2]){gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[0][ranPosition+2] = {shape:5,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[1][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[0][ranPosition+2] = {shape:5,id:Math.random(),falling:true};
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1]; 
                        FallingBlockShape = ranShape;
                        break;//5
                case 6: if(ranPosition > 8) FallingBlockLeft = ranPosition = 8; 
                        if(gridArr[2][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[2][ranPosition+1]){gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:6,id:Math.random(),falling:true};showBlock(); setTimeout(showGameOver,400);return true;};
                        gridArr[2][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[2][ranPosition+1] = {shape:6,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 2;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape; 
                        break;//反L
                case 7: if(ranPosition > 7) FallingBlockLeft = ranPosition = 7; 
                        if(gridArr[0][ranPosition] || gridArr[0][ranPosition+1] || gridArr[1][ranPosition+1] || gridArr[1][ranPosition+2]){gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:7,id:Math.random(),falling:true};showBlock();setTimeout(showGameOver,400);return true;};
                        gridArr[0][ranPosition] = gridArr[0][ranPosition+1] = gridArr[1][ranPosition+1] = gridArr[1][ranPosition+2] = {shape:7,id:Math.random(),falling:true}; 
                        FallingBlockBottom = 1;
                        rotateCenter=[1,ranPosition+1];
                        FallingBlockShape = ranShape; 
                        break;//2
            } ;
            break; 
      
    }
    showBlock();
    generateOneShape();
}
//冻结已经落地方块
function freez(line, col){
    var stopVer = line - 3;
    var stopHor = col + 3;
    if(stopVer < 0) stopVer = 0;
    if(stopHor > 9) stopHor = 9;

    for(var i = line ; i >= stopVer ; i--){
        for(var j = col ; j <= stopHor ; j++){
            if(gridArr[i][j] && gridArr[i][j].falling)   gridArr[i][j].falling = false;
        }
    }
}

//键盘操作
function operation(event){
    switch(event.keyCode){
        //向左
        case 37:
            event.preventDefault();
            moveLeft(FallingBlockBottom, FallingBlockLeft);
            break;
        //向右
        case 39:
            event.preventDefault();
            moveRight(FallingBlockBottom, FallingBlockLeft);
            break;
        //旋转
        case 38:
            event.preventDefault();
            rotateBlock(FallingBlockBottom, FallingBlockLeft, rotateCenter, FallingBlockShape);
            break;
        //加速
        case 40:
            event.preventDefault();
            accelerate(FallingBlockBottom, FallingBlockLeft);
            break;

        default:break;
    }
}

//触屏操作 
function touchOperation(event){
    event.preventDefault();
    clearInterval(touchInterval);
    var x = event.touches[event.touches.length-1].pageX;
    var y = event.touches[event.touches.length-1].pageY;

    if(x < canvas.width/4 && y > gameAreaH && y < canvasStatus.height && gameStatus === 1){
        moveLeft(FallingBlockBottom, FallingBlockLeft);
    }else if(x > canvas.width/4 && x < canvas.width/2 && y > gameAreaH && y < canvasStatus.height && gameStatus === 1){
        accelerate(FallingBlockBottom, FallingBlockLeft);
    }else if(x > canvas.width/2 && x < 3*canvas.width/4 && y > gameAreaH && y < canvasStatus.height && gameStatus === 1){
        moveRight(FallingBlockBottom, FallingBlockLeft);
    }else if(x > 3*canvas.width/4 && x < canvas.width && y > gameAreaH && y < canvasStatus.height && gameStatus === 1){
        rotateBlock(FallingBlockBottom, FallingBlockLeft, rotateCenter, FallingBlockShape);
        return;
    }
    else if(x > canvas.width && x < canvasStatus.width && y > 0.5*canvasStatus.height && y < 0.6 * canvasStatus.height){
        showScore(score, -gameStatus);
        gameStatus *= -1;
        return;
    }
    touchInterval = setTimeout(touchMove, 260, x, y);
}
//
function touchMove(x, y){
    if(x < canvas.width/4 && y > gameAreaH && y < canvasStatus.height){
        moveLeft(FallingBlockBottom, FallingBlockLeft);
    }else if(x > canvas.width/4 && x < canvas.width/2 && y > gameAreaH && y < canvasStatus.height){
        accelerate(FallingBlockBottom, FallingBlockLeft);
    }else if(x > canvas.width/2 && x < 3*canvas.width/4 && y > gameAreaH && y < canvasStatus.height){
        moveRight(FallingBlockBottom, FallingBlockLeft);
    }
    touchInterval = setTimeout(touchMove, 50, x, y);
}
    
//
function cancelTouch(event){
    clearTimeout(touchInterval);
}


//重新调整 FallingBlockBottom
function findBottom(){
    for(var i = 15 ; i >= 0 ; i--){
        for(var j = 0 ; j < 10 ; j++){
            if(gridArr[i][j] && gridArr[i][j].falling){
                return i;
            }
        }
    }
}
//重新调整 FallingBlockLeft
function findLeft(){
    for(var j = 0 ; j < 10 ; j++){
        for(var i = 15 ; i >= 0 ; i--){
            if(gridArr[i][j] && gridArr[i][j].falling){
                return j;
            }
        }
    }    
}

//查找已满行
function findTheFullLine(line){
    var stop = line - 3;
    if(stop < 0)    stop = 0;

    for(var i = line ; i >= stop ; i--){

        while(true){
            //遇false即返回,全true最终返回true
            if(gridArr[i].every(function(val, index, arr){
                return val;
            })){
                score += 10; 
                clearLine(i);
            }else{
                break;
            }
        }

   }  
    showScore(score);
    showBlock();
}
//生成随即方块
function generateOneShape(){
    ranshape = Math.ceil(Math.random() * 7);
    showPreview(ranshape);
}

