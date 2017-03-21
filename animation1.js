//刷新,显示每一个方块
function showBlock(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(backGroundImg, 0, 0, canvas.width, canvas.height);
    for(var i = 0; i < 16 ; i++){
        for(var j = 0 ; j < 10 ; j++){
            if(gridArr[i][j]){

                ctx.drawImage(BlockColorArr[ gridArr[i][j].shape -1], j*108*scale + 4*scale , i*108*scale + 4*scale, 98*scale, 98*scale);
            }
        }
    }

}

//方块正常落下和接触后停止落下
function moveBlockDown( line, col ){
    if(line >= 15) return true;

    var stopVer = line - 3;
    var stopHor = col + 3;
    if(stopVer < 0) stopVer = 0;
    if(stopHor > 9) stopHor = 9;
    
    var fallingArr = [];//存储落下的方块的四个格子下移移前的坐标

    for(var i = line ; i >= stopVer ; i--){
        if(fallingArr.length === 4)    break;
        for(var j = col ; j <= stopHor ; j++){

            if(gridArr[i][j] && gridArr[i][j].falling){
               fallingArr.push([i,j]); 
               if(fallingArr.length === 4)    break;
            }        
        }      
    }   
    //检测触碰
    for(var i = 0 ; i < 4 ; i++){
        if(!fallingArr[i])  return;//这里只针对加速下落
        //下移之后的坐标
        var x = fallingArr[i][1];
        var y = fallingArr[i][0] + 1;
        //如果下移之后出界了或触碰到静止的方块,那么不下移
        if( gridArr[y][x] && (gridArr[y][x].id !== gridArr[y-1][x].id) ){
            return true;
        }

    }
    //没有触碰,继续下移
    for(var i = 0 ; i < 4 ; i++){
        var x = fallingArr[i][1];
        var y = fallingArr[i][0] + 1;
        //下移
        gridArr[y][x] = gridArr[y-1][x];
        gridArr[y-1][x] =  null;
        
    }  

    rotateCenter[0]++;
    FallingBlockBottom ++;
    showBlock();
}
//左移方块
function moveLeft(line, col){
    if(col <= 0 )   return;

    var stopVer = line - 3;
    var stopHor = col + 3;
    if(stopVer < 0) stopVer = 0;
    if(stopHor > 9) stopHor = 9;

    var fallingArr = [];//存储落下的方块的四个格子左移前的坐标

    for(var i = line ; i >= stopVer ; i--){
        if(fallingArr.length === 4)    break;
        for(var j = col ; j <= stopHor ; j++){

            if(gridArr[i][j] && gridArr[i][j].falling){
               fallingArr.push([i,j]); 
               if(fallingArr.length === 4)    break;
            }        
        }      
    }   
    //检测触碰
    for(var i = 0 ; i < 4 ; i++){
        if(!fallingArr[i])  return;
        //左移之后的坐标
        var x = fallingArr[i][1] - 1;
        var y = fallingArr[i][0];
        //如果左移之后触碰到静止的方块,那么不左移
        if( gridArr[y][x] && (gridArr[y][x].id !== gridArr[y][x+1].id) ){
            return;
        }

    }
    //没有触碰,继续左移
    for(var i = 0 ; i < 4 ; i++){
        var x = fallingArr[i][1] - 1;
        var y = fallingArr[i][0];
        //左移
        gridArr[y][x] = gridArr[y][x+1];
        gridArr[y][x+1] =  null;
        
    }  

    rotateCenter[1]--;
    FallingBlockLeft --;
    showBlock();
}
//右移方块
function moveRight(line, col){

    var stopVer = line - 3;
    var stopHor = col + 3;
    if(stopVer < 0) stopVer = 0;
    if(stopHor > 9) stopHor = 9;

    var fallingArr = [];//存储落下的方块的四个格子右移前的坐标

    for(var i = line ; i >= stopVer ; i--){
        if(fallingArr.length === 4)    break;
        for(var j = col ; j <= stopHor ; j++){

            if(gridArr[i][j] && gridArr[i][j].falling){
               fallingArr.push([i,j]); 
               if(fallingArr.length === 4)    break;
            }        
        }      
    }   
    //检测触碰
    for(var i = 3 ; i >= 0 ; i--){
        //右移之后的坐标
        if(!fallingArr[i])  return;
        var x = fallingArr[i][1] + 1;
        var y = fallingArr[i][0];
        //如果右移之后出界了或触碰到静止的方块,那么不右移
        if(x > 9)  return;
        if( gridArr[y][x] && (gridArr[y][x].id !== gridArr[y][x-1].id) ){
            return;
        }

    }
    //没有触碰,继续右移
    for(var i = 3 ; i >= 0 ; i--){
        var x = fallingArr[i][1] + 1;
        var y = fallingArr[i][0];
        //右移
        gridArr[y][x] = gridArr[y][x-1];
        gridArr[y][x-1] =  null;
        
    }  

    rotateCenter[1]++;
    FallingBlockLeft ++;
    showBlock();
}
//旋转方块
function rotateBlock(line, col, center, shape){
    //田字直接返回
    if(shape === 2) return;

    var stopVer = line - 3;
    var stopHor = col + 3;
    if(stopVer < 0) stopVer = 0;
    if(stopHor > 9) stopHor = 9;

    var flag = [];//存储被覆盖的格子,用于防止该格子被赋值null
    var fallingArr = [];//存储落下的方块的四个格子旋转前的坐标
    var calXY = {x:[],y:[]};//缓存计算结果,避免重复计算
    for(var i = line ; i >= stopVer ; i--){
        if(fallingArr.length === 4)    break;
        for(var j = col ; j <= stopHor ; j++){

            if(gridArr[i][j] && gridArr[i][j].falling){
               fallingArr.push([i,j]); 
               if(fallingArr.length === 4)    break;
            }        
        }      
    }

    for(var i = 0 ; i < 4 ; i++){
        var cur = fallingArr[i];

        if(!cur) return;
        //跳过旋转中心
        if(cur[0] === center[0] && cur[1] === center[1]) continue;

        var tempX = cur[1] - center[1];
        var tempY = cur[0] - center[0];
        //旋转后坐标
        var x = -tempY + center[1];
        var y = tempX + center[0];
        //如果旋转之后出界了或触碰到静止的方块,那么不旋转
        if(x<0 || x> 9 || y<0 || y>15)  return;
        if(gridArr[y] && gridArr[y][x] && (gridArr[y][x].id !== gridArr[cur[0]][cur[1]].id) ){
            return;
        }

        calXY.x.push(x);
        calXY.y.push(y); 
    }  

    for(var i = 0 ; i < 4 ; i++){
        //跳过旋转中心
        if(fallingArr[i][0] === center[0] && fallingArr[i][1] === center[1]) continue;

        var x = calXY.x.shift();
        var y = calXY.y.shift();

        //往flags中添加被覆盖的格子(如果有的话)
        if( gridArr[y][x] && (gridArr[y][x].id === gridArr[fallingArr[i][0]][fallingArr[i][1]].id)){
            flag.push(''+y+x);
        }
        //旋转
        gridArr[y][x] = gridArr[fallingArr[i][0]][fallingArr[i][1]];
        //flag 中存在被覆盖过的格子,那么跳过赋值null的这一步,否则赋值null
        var test = '' + fallingArr[i][0] + fallingArr[i][1];
        if(flag.indexOf(test) >= 0) continue;
        gridArr[fallingArr[i][0]][fallingArr[i][1]] =  null;
        
    }

    //重新调整 FallingBlockBottom, FallingBlockLeft
    FallingBlockBottom = findBottom();
    FallingBlockLeft = findLeft();

    showBlock();
}
//加速下落
function accelerate(line, col){
    if(line >= 15)  return;
    moveBlockDown(line, col);
}

//消除已满行
function clearLine(line){

    for(var i = 0 ; i < 10 ; i++){
        for(var j = line-1 ; j >= 0 ; j--){
            gridArr[j+1][i] = gridArr[j][i];
        }
    }

}
//刷新分数, 开始暂停按钮, 预览
function showScore(score, which){
    ctxStatus.clearRect(0, 0, canvasStatus.width, canvasStatus.height);
    ctxStatus.drawImage(statusImg, 0, 0, canvasStatus.width, canvasStatus.height);
    if(which){
        (which === 1) ? ctxStatus.drawImage(pauseImg, 9*canvasStatus.width/10, canvasStatus.height/2, 0.5*(canvasStatus.width - canvas.width), 0.5*(canvasStatus.width - canvas.width)) : 
                        ctxStatus.drawImage(continueImg, 9*canvasStatus.width/10, canvasStatus.height/2, 0.5*(canvasStatus.width - canvas.width), 0.5*(canvasStatus.width - canvas.width));        
    }else{
        gameStatus === 1 ? ctxStatus.drawImage(pauseImg, 9*canvasStatus.width/10, canvasStatus.height/2, 0.5*(canvasStatus.width - canvas.width), 0.5*(canvasStatus.width - canvas.width)) : 
                           ctxStatus.drawImage(continueImg, 9*canvasStatus.width/10, canvasStatus.height/2, 0.5*(canvasStatus.width - canvas.width), 0.5*(canvasStatus.width - canvas.width));
    }
    
    ctxStatus.fillText(score, 37*canvasStatus.width/40, 3*canvasStatus.height/10, canvasStatus.width - canvas.width);
    ctxStatus.fillText(Math.floor(Math.abs(Math.pow((2*(score/1000)*100-(score/1000)*(score/1000)),1/2))), 37*canvasStatus.width/40, 8.5*canvasStatus.height/20, canvasStatus.width - canvas.width);
    showPreview(ranshape);
}
//刷新预览
function showPreview(ranshape){
    ctxStatus.clearRect(canvas.width, 0, canvasStatus.width - canvas.width, 1.9*(canvasStatus.width - canvas.width));
    ctxStatus.drawImage(previewArr[ranshape-1], canvas.width, 0, canvasStatus.width - canvas.width, 1.9*(canvasStatus.width - canvas.width))    
}

//游戏结束动画
function showGameOver(){
    if(confirm('分数: ' + score + '\n是否重新开始?')){
        clearInterval(gameLoopInterval);
        clearTimeout(touchInterval);
        gameStatus = 1;
        ranshape = Math.ceil(Math.random() * 7);
        FallingBlockBottom = 0;
        score = 0;
        newgame();
    }
}
