//object destructuring, .map() running a function on each element -> gives new array of new elements
//.join()

const hero = {
   elementId: 'hero',
   name: 'Wizard',
   avatar: "images/wizard.png",
   health: 60,
   diceCount: 3
}
const monster = {
   elementId: 'monster',
   name: 'Orc',
   avatar: "images/orc.png",
   health: 10,
   diceCount: 1
}

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
// console.log(getDiceRollArray(3))
function getDiceHtml(diceCount) {
   return getDiceRollArray(diceCount).map((eachNum) => {
      return `<div class="dice"> ${eachNum} </div>`
   }).join('')
}

function renderCharacter(data) {
   
   const {elementId, name, avatar, health, diceCount} = data

   const diceHtml = getDiceHtml(diceCount)
   
   // diceRoll.map((eachNum) => {
   //    return `<div class="dice"> ${eachNum} </div>`
   // }).join('') //gives array like [div1, div2, div3] -> convert into string 'div1 div2 div3'

   // for(i = 0; i < diceRoll.length; i++) {
   //    diceHtml += `<div class="dice"> ${diceRoll[i]} </div>`
   // }

   document.getElementById(`${elementId}`).innerHTML += `
      <div class="character-card">
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/>
         <p class="health">health: <b> ${health} </b></p>
         <div class="dice-container">
            ${diceHtml} 
         </div>
      </div>  
   `
}

renderCharacter(hero)
renderCharacter(monster)

