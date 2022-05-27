function detonation(sequance,specialnum) {
    let detnum = specialnum[0]
    let range = specialnum[1]
    let sum = 0 
    let end = 0 
    for (let i = 0; i < sequance.length;i++) {
        if (sequance[i]===detnum) {
            let start = Math.max(0,i-range)
            if (start > 0) {
             end = range*2+1
            sequance.splice(start,end)
            i = -10
            } else {
                end = i + range + 1
                sequance.splice(start,end)
             i = -10
            }
        }
    }
    console.log(sequance.reduce((a, b) => a + b, 0));
}
 detonation([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2])
    