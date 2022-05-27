function solve(input) {
    let index = 0 
    let total = 0 
    let days =1
    let bitcoins = 0 
    let first = 0 
    while(days <= input.length) {
        gold=Number(input[index++])
    let price = gold * 67.51
    total+=price
    if (days % 3 == 0 ) {
        gold = gold * 0.3
        price = gold * 67.51
        total -= price
    }
     while (total >= 11949.16) {
        total= total - 11949.16
        bitcoins++
        if (bitcoins === 1) {
            first = days
             continue
            }
     } 
     days++
}

console.log(`Bought bitcoins: ${bitcoins}`)
if (bitcoins > 0 ) {
 console.log(`Day of the first purchased bitcoin: ${first}`)
}
console.log(`Left money: ${total.toFixed(2)} lv.`)
}
solve("1000")