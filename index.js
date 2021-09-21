// Code your solution in this file!
function distanceFromHqInBlocks(x){
    if (x >= 42){
        return x - 42
    } else if (x < 42){
        return 42 - x
    }    
}

function distanceFromHqInFeet(x){
    let blocks = distanceFromHqInBlocks(x)
    return blocks * 264
}

function distanceTravelledInFeet(start, destination){
    let distance = distanceFromHqInFeet()
    if (destination > start){
         distance = destination - start 
    } else if (destination < start){
         distance = start - destination
    }
    return distance * 264
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    let money
    if (feet <= 400){
        money = 0
    } else if (feet >= 400 && feet <= 2000){
        money = ((feet - 400) * 2) / 100 
    } else if (feet < 2500 && feet > 2000){
        money = 25
    } else {
        money = `cannot travel that far`
    }
    return money
}