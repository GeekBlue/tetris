var canvas,
    ctx,
    canvasStatus,
    ctxStatus,
    backGroundImg = new Image(),
    statusImg = new Image(),
    pauseImg = new Image(),
    continueImg = new Image(),
    gameStatus = 1,
    gridArr = [],
    BlockColorArr = [],
    previewArr = [],
    ranshape = Math.ceil(Math.random() * 7),
    FallingBlockBottom = 0,
    FallingBlockLeft,
    FallingBlockShape,
    rotateCenter,
    score = 0,
    gameLoopInterval,
    touchInterval,
    gameAreaH = Math.round(window.screen.availHeight*0.78),
    scale = +((gameAreaH / 1726).toFixed(4));

window.onload = function(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); 
    canvasStatus = document.getElementById('statusBar');
    ctxStatus = canvasStatus.getContext('2d');

    canvasStatus.height = Math.round(window.screen.availHeight*0.89);
    canvasStatus.width = Math.round(0.632 * canvasStatus.height);

    ctxStatus.textAlign = 'center';
    ctxStatus.font = "italic small-caps bold " + (canvasStatus.width/20) +  "px arial";
    
    canvas.height = gameAreaH;
    canvas.width = Math.round(0.625 * gameAreaH);

    statusImg.src = 'status.jpg';
    statusImg.onload = function(){
       ctxStatus.drawImage(statusImg, 0, 0, canvasStatus.width, canvasStatus.height); 
    }
    
    backGroundImg.src = 'bgcut2.png';
    backGroundImg.onload = newgame;  
    pauseImg.src = 'pause.png';
    continueImg.src = 'continue.png';

    document.addEventListener('keydown',operation);
    document.addEventListener('click',function(event){
        event.preventDefault();
        clearInterval(touchInterval);
        var x = event.pageX;
        var y = event.pageY;
        if(x > canvas.width && x < canvasStatus.width && y > 0.5*canvasStatus.height && y < 0.6 * canvasStatus.height){
            showScore(score, -gameStatus);
            gameStatus *= -1;
            return;
        }
    });
    document.addEventListener('touchstart',touchOperation);
    document.addEventListener('touchend',cancelTouch);
    document.addEventListener('touchmove',function(event){
        event.preventDefault();
    });
}
//开始游戏
function newgame(){
    init();
    showScore(score, gameStatus);
    gameLoopInterval = setInterval(function() {
        gameLoop();
    }, 500); 
}
//初始化
function init(){
    //初始化每个格子,赋值null
    for(var i = 0 ; i < 16 ; i++){
        gridArr[i] = [];
        for( var j = 0 ; j < 10 ; j++){
            gridArr[i][j] = null;
        }
    }
    //初始化 7 张图片,代表 7 种方块
    for(var i = 0 ; i < 7 ; i++){
        var previewImg = new Image();
        var BlockColor = new Image();
        previewImg.src = 'pv' + i + '.jpg';
        BlockColor.src =  i + '.png';
        BlockColorArr.push(BlockColor);
        previewArr.push(previewImg);

        //对最后一张图图片设置事件句柄
        if(i === 6) {
            BlockColor.onload = showBlock;
            previewImg.onload = function(){
                generateOneBlock(Math.ceil(Math.random() * 7));
            };
        }
    }
}
//主循环
function gameLoop(){
    if(gameStatus === 1){
            //如果能移动,方块向下移动一格
        var hasTouch =  moveBlockDown( FallingBlockBottom, FallingBlockLeft ); 
        
        if(FallingBlockBottom >= 15 || hasTouch){

            clearInterval(gameLoopInterval);
            freez(FallingBlockBottom, FallingBlockLeft);

                findTheFullLine(FallingBlockBottom);
                
                setTimeout(function() {
                    if(!generateOneBlock(ranshape)){
                    gameLoopInterval = setInterval(function() {gameLoop();},500); 
                    }        
                }, 250);               
        }        
    }
}