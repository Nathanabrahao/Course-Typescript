


let numbers: number[] = [3, 7, 9]

numbers.push(5)

console.log(numbers[0])


// interface 

interface Point {
    x: number
    y: number
    z: number
}


function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}


const coordObj:Point = {
    x: 10,
    y:  15,  
    z:  20
}

showCoords(coordObj)


