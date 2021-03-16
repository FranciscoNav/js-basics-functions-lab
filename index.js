// Code your solution in this file!

function distanceFromHqInBlocks(blocks){ 
    if  (blocks >= 42){
        return blocks - 42;}
    else { 
        return (blocks- 42)* -1;}
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}




function distanceTravelledInFeet(startBlock, endBlock){
    if (endBlock - startBlock > 0){
        return (endBlock - startBlock) * 264; }
    else{ 
        return (startBlock - endBlock) * 264; }         
}

function calculatesFarePrice(startBlock, endBlock){
    if (distanceTravelledInFeet(startBlock, endBlock) > 2500){
        return 'cannot travel that far';
    }
    else if (distanceTravelledInFeet(startBlock, endBlock) >= 2000){
        return 25;
    }
    else if (distanceTravelledInFeet(startBlock, endBlock) > 400){
        return (distanceTravelledInFeet(startBlock, endBlock) -400) * .02;
    }
    else {
        return 0;
    }
}