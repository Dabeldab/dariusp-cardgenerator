import "bootstrap";
import "./style.css";
import { Button } from "bootstrap";
//const dataElement = document.querySelector(cardnumber);
const cardnumber = [1,2,3,4,5,6,7,8,9,10,'A','J','Q','K']
const faces = ['♦', '♥', '♠', '♣']


window.onload = function () {
  shuffle()
}

function shuffle() {
  const randomCardIndex = Math.floor(Math.random() * cardnumber.length)
  const randomFaceIndex = Math.floor(Math.random() * faces.length)

  const selectedCard = cardnumber[randomCardIndex]
  const selectedFace = faces[randomFaceIndex]

  const numberCard = document.getElementById("cardnumber")
  numberCard.innerHTML = `${selectedCard}`
  
  const suitTop = document.querySelector(".suit-top p")
  suitTop.innerHTML = `${selectedFace}`

  const suitBottom = document.querySelector(".suit-bottom p")
  suitBottom.innerHTML = `${selectedFace}`

  if (selectedFace === faces[0] || selectedFace === faces[1]) {(suitTop.style.color = 'red', suitBottom.style.color   = 'red', numberCard.style.color = 'red')}
  else suitTop.style.color = 'black',suitBottom.style.color   = 'black', numberCard.style.color = 'black';
};


document.addEventListener("DOMContentLoaded", function() {
  const push = document.getElementById("refreshbutton");
  if (push) { push.addEventListener("click", shuffle)    
  }
})
