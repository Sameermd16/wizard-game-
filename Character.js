import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"


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


class Character {
   constructor(data) {
      Object.assign(this, data)
      this.maxHealth = this.health
      this.diceArray = getDicePlaceholderHtml(this.diceCount)
   }
    // this.elementId = data.elementId
    // this.name = data.name
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount
 
    getCharacterHtml() {
      const {elementId, name, avatar, health, diceCount, diceArray, getDiceHtml, getHealthBarHtml} = this
      //  const diceHtml = getDiceHtml(diceCount)
      const healthBar = this.getHealthBarHtml()
 
       return `
       <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b> </p>
          ${healthBar}
          <div class="dice-container">
             ${diceArray} 
          </div>
       </div>  
    `
    }
 
    getDiceHtml(diceCount) {
       this.currentDiceScore = getDiceRollArray(this.diceCount)
       this.diceArray = this.currentDiceScore.map((eachNum) => {
         return `<div class="dice">${eachNum}</div>`
       }).join('')
    }

    takeDamage(attackScoreArray) {
      // console.log(`${this.name}: ${attackScoreArray}`)
      const totalAttackScore = attackScoreArray.reduce((total, currentNumber) => {
         return total + currentNumber
      })
      this.health = this.health - totalAttackScore
      if(this.health <= 0) {
         this.dead = true
         this.health = 0
         // console.log('dead character is present')
         // console.log("data", data)
         // console.log("this", this)
      }
      // console.log(getPercentage(this.health, this.maxHealth))
   }

   getHealthBarHtml() {
      const percent = getPercentage(this.health, this.maxHealth)
      return ` <div class="health-bar-outer">
                  <div class="health-bar-inner ${percent < 26 ? 'danger' : ''}" style="width:${percent}%;"></div>
               </div>`
            
   }
  
 }

 export { Character }