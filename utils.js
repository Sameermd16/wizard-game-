function getDiceRollArray(diceCount) {
    // let newDiceRolls = []
    // for (let i = 0; i < diceCount; i++) {
    //    newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
    // }
    // return newDiceRolls
    return new Array(diceCount).fill(0).map((num) => {
       return Math.floor(Math.random() * 6) + 1
    })
 }

 export {getDiceRollArray}