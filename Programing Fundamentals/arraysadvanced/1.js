function search(arr1,arr2) {
    let needed = arr2[0] 
    let forDelete = arr2[1]
    let toFind = arr2[2] 
    let newarr = []
    let times = 0 
    for (let i=0; i < needed; i++) {
        newarr += arr1[i]
    }
    if(needed>0){
    newarr = newarr.split(``).map(Number)
    newarr.splice(0,forDelete)
  
   
}
for ( let i = 0; i < newarr.length;i++) {
    if(newarr[i] === toFind) {
        times++
    }
}
console.log(`Number ${toFind} occurs ${times} times.`)
}
search([1, 2, 3, 4, 3, 6],
[1, 0, 1])
