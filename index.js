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

let monstersArray = ['monster', 'demon', 'goblin']

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   // console.log((monstersArray.shift()))
   // console.log(monstersArray)
   return nextMonsterData ? new Character(nextMonsterData) : {}

}

const wizard = new Character(characterData.hero)
// console.log(wizard)
// wizard.getCharacterHtml()
// console.log(wizard.getCharacterHtml)

// const orc = new Character(characterData.monster)
// // console.log(orc)
// orc.getCharacterHtml()
let monster = getNewMonster()

function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

function attack() {
   wizard.getDiceHtml()
   monster.getDiceHtml()
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render()
   if(wizard.dead) {
      endGame()
   }else if(monster.dead) {
      if(monstersArray.length > 0) {
         monster = getNewMonster()
         render()
      }else {
         endGame()
      }
   }
   
}

function endGame() {
   const endMessage = wizard.health === 0 && monster.health === 0 ? 'No victors- both are dead'
      : wizard.health > 0 ? 'The Wizard wins'
      : 'The monster is victorious'
   // console.log(endMessage)
   const endEmoji = wizard.health === 0 && monster.health === 0 ? '☠️'
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