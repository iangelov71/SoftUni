function heartDelivery(input) {
    let index = 0 
    let data = [input[index]] 
    let jumps = []
    let jumplength = 0 
    let counter = 0
    let fails = 0 
    let houses = data[index++].split('@').map(Number);
    while( input[index] !== `Love!`) {    
        jumps = input[index++].split("Jump").map(Number);
        jumplength = jumps[1]
        for (j = 0 ; j< jumplength ;j++) {
            counter++
            if (counter > houses.length-1  ) {
            counter= 0  
            break
            }
            
        } 
        if (houses[counter]===0) {
            console.log("Place " + counter + " already had Valentine's day.")
        } else {
            houses[counter] -=2 
            if (houses[counter] === 0) {
                console.log("Place " + counter + " has Valentine's day.")
            }
        }  
    }
    console.log("Cupid's last position was "+ counter + ".")
        for( let i = 0;i < houses.length; i++) {
            if (houses[i]>0) {
                fails++
              }
        }
        if(fails>0) {
            console.log("Cupid has failed " + fails + " places.")
        } else {
            console.log("Mission was successful.")
        }   
}  
heartDelivery(["2@4@2","Jump 2","Jump 2","Jump 8","Jump 3","Jump 1","Love!"])
