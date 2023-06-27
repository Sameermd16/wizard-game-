import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"


// const hero = {
//    elementId: 'hero',
//    name: 'Wizard',
//    avatar: "images/wizard.png",
//    health: 60,
//    diceCount: 3
// }
// const monster = {
//    elementId: 'monster',
//    name: 'Orc',
//    avatar: "images/orc.png",
//    health: 10,
//    diceCount: 1
// }
function Character(data) {
    // this.elementId = data.elementId
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
    Object.assign(this, data)
 
    this.getCharacterHtml = function () {
       const {elementId, name, avatar, health, diceCount, diceArray, getDiceHtml} = this
       const diceHtml = getDiceHtml(diceCount)
 
       return `
       <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b> </p>
          <div class="dice-container">
             ${diceArray} 
          </div>
       </div>  
    `
    }
 
    this.getDiceHtml = function(diceCount) {
       return getDiceRollArray(diceCount).map((eachNum) => {
          return `<div class="dice"> ${eachNum} </div>`
       }).join('')
    }

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
 }

 export { Character }