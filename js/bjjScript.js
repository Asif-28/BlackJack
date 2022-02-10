
let cards=[]
let sum =0
let hasBlackJack= false
let isAlive= false
let message =""
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.getElementById("card-el")


function getRandomcard()
{
  let randomNumber=Math.floor(Math.random() * 13)+1
  if(randomNumber > 10)
  {
    return 10
  }
  else if(randomNumber ===1)
  {
    return 11
  }
  else
 { return randomNumber
}
}



function start()
{
  
 let firstCard=getRandomcard()
let secondCard=getRandomcard()
cards=[firstCard,secondCard]
sum=firstCard+ secondCard
 isAlive = true
  renderGame()
}



function renderGame(){
  cardEl.textContent="Cards :"
  for(let i=0;i < cards.length;i++){
    cardEl.textContent +=cards[i] + " "
  }
  sumEl.textContent= "Sum : " + sum;
    if(sum <= 20){
        message=  "Do you Want To Draw A New Card ? "
        
      }
      else if(sum === 21)
      {
         message= "Woohoo !! You Have Won"
          hasBlackJack= true
        
      }
      else {
        message=  "You are out of the game! "
          isAlive= false
        
      }
     
      messageEl.textContent=message
}




  function newCard()
  {
    if(isAlive=== true && hasBlackJack=== false){
   // console.log("new card function")
    let card=getRandomcard()
    sum +=card
    cards.push(card)
    console.log(cards)
    renderGame()
  }}
  


// let myAge=21
// if(myAge<21)
// {
//     console.log("You Cannot enter the room"
//     )
// }
// else{
//     console.log("welcome")
// }