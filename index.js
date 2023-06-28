//object destructuring, .map() running a function on each element -> gives new array of new elements
//.join()
//constructor function 
//new array constructor method .fill() 
//Object.assign(target, source)
//.reduce()

import  { characterData }  from "./data.js"
import { Character } from "./Character.js"
import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"



// function getDiceHtml(diceCount) {
//    return getDiceRollArray(diceCount).map((eachNum) => {
//       return `<div class="dice"> ${eachNum} </div>`
//    }).join('')
// }

// function renderCharacter(data) {
   
//    const {elementId, name, avatar, health, diceCount} = data
//    const diceHtml = getDiceHtml(diceCount)
   
//    // diceRoll.map((eachNum) => {
//    //    return `<div class="dice"> ${eachNum} </div>`
//    // }).join('') //gives array like [div1, div2, div3] -> convert into string 'div1 div2 div3'

//    // for(i = 0; i < diceRoll.length; i++) {
//    //    diceHtml += `<div class="dice"> ${diceRoll[i]} </div>`
//    // }

//    document.getElementById(`${elementId}`).innerHTML += `
//       <div class="character-card">
//          <h4 class="name"> ${name} </h4>
//          <img class="avatar" src="${avatar}"/>
//          <p class="health">health: <b> ${health} </b> </p>
//          <div class="dice-container">
//             ${diceHtml} 
//          </div>
//       </div>  
//    `
// }


const wizard = new Character(characterData.hero)
console.log(wizard)
wizard.getCharacterHtml()
// console.log(wizard.getCharacterHtml)

const orc = new Character(characterData.monster)
console.log(orc)
orc.getCharacterHtml()

function render() {
   document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
   document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

function attack() {
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   render()
   if(wizard.dead || orc.dead) {
      endGame()
   }
}

function endGame() {
   const endMessage = wizard.health === 0 && orc.health === 0 ? 'No victors- both are dead'
      : wizard.health > 0 ? 'The Wizard wins'
      : 'The Orc is victorious'
   // console.log(endMessage)
   const endEmoji = wizard.health === 0 && orc.health === 0 ? '☠️'
      : wizard.health > 0 ? "🔮"
      : '☠️'
      // console.log(endEmoji)
   document.body.innerHTML = `
      <div class="end-game">
         <h2>Game Over</h2>
         <h3>${endMessage}</h3>
         <p class="end-emoji">${endEmoji}</p>
      </div>
   `
}

document.getElementById('attack-button').addEventListener('click', attack)

render()