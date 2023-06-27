import { getDiceRollArray } from "./utils.js"

function Character(data) {
    // this.elementId = data.elementId,
    // this.name = data.name,
    // this.avatar = data.avatar,
    // this.health = data.health,
    // this.diceCount = data.diceCount
    Object.assign(this, data)
 
    this.getCharacterHtml = function () {
       const {elementId, name, avatar, health, diceCount} = data
       const diceHtml = this.getDiceHtml(diceCount)
 
       return `
       <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b> </p>
          <div class="dice-container">
             ${diceHtml} 
          </div>
       </div>  
    `
    }
 
    this.getDiceHtml = function(diceCount) {
       return getDiceRollArray(diceCount).map((eachNum) => {
          return `<div class="dice"> ${eachNum} </div>`
       }).join('')
    }
 }

 export { Character }