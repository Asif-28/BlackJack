let firstCard=0
let secondCard=21
let sum =firstCard + secondCard
let hasBlackJack=false
let isAlive=true
let message =""
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.getElementById("card-el")
function start(){
    if(sum <= 20){
        message=  "Do you Want To Draw A New Card ? "
        sumEl.textContent= "Sum : " + sum;
        cardEl.textContent="Cards : " +firstCard +" " + secondCard
      }
      else if(sum === 21)
      {
         message= "Woohoo !! You Have Won"
          hasBlackJack=true
          sumEl.textContent= "Sum : " + sum;
          cardEl.textContent="Cards : " +firstCard +" " + secondCard
      }
      else {
        message=  "You are out of the game! "
          isAlive=false
          sumEl.textContent= "Sum : " + sum;
          cardEl.textContent="Cards : " +firstCard +" " + secondCard
      }
      // console.log(hasBlackJack)
      messageEl.textContent=message
}


// let myAge=21
// if(myAge<21)
// {
//     console.log("You Cannot enter the room"
//     )
// }
// else{
//     console.log("welcome")
// }