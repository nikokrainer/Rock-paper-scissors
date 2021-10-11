import rockImage from "../images/icon-rock.svg"
import paperImage from "../images/icon-paper.svg"
import scissorsImage from "../images/icon-scissors.svg"
// Declaration
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
let playerElement = document.querySelector(".gameResult__player")
let computerElement = document.querySelector(".gameResult__computer")
let gameOutcome = document.querySelector(".gameOutcomeText")

const game = document.querySelector(".game")
const gameResult = document.querySelector(".gameResult")
const playAgain = document.querySelector(".playAgain")

let scoreCount = document.querySelector(".scoreNumber")
let score = 0

const signs = ["rock", "paper", "scissors"]

//event listeners
rock.addEventListener("click", () => {
  gameStart("rock")
  startAnimation()
})
paper.addEventListener("click", () => {
  gameStart("paper")
  startAnimation()
})
scissors.addEventListener("click", () => {
  gameStart("scissors")
  startAnimation()
})

playAgain.addEventListener("click", () => {
  playItAgain()
})

//functions

function gameStart(choice) {
  let player = choice
  let computer = signs[Math.floor(Math.random() * 3)]

  computerElement.innerHTML = ""
  playerElement.innerHTML = ""
  createElementComputer(computer)
  createElementPlayer(player)

  let result = signs.indexOf(player) - signs.indexOf(computer)

  if ([-1, 2].includes(result)) {
    console.log("Computer Wins")
    gameOutcome.innerText = "You Lost!"
    updateScoreCount(-1)
  }
  if ([-2, 1].includes(result)) {
    console.log("Player Wins")
    gameOutcome.innerText = "You Won!"
    updateScoreCount(1)
  }
  if (result == 0) {
    console.log("It's a tie")
    gameOutcome.innerText = "Tie!"
  }
}

function updateScoreCount(number) {
  score += number
  scoreCount.innerText = score
}

//computer element creation
function createElementComputer(el) {
  //declaration
  let element = document.createElement("div")
  let elementBackground = document.createElement("div")
  let img = document.createElement("img")

  //adding classes and attributes
  const elementClasses = [`${el}Result`, "flex", "flex-ai-c", "flex-jc-c"]
  elementClasses.forEach((el) => {
    element.classList.add(el)
  })

  elementBackground.classList.add(`${el}Result__background`)
  img.classList.add(`${el}ImgTransform`)

  switch (el) {
    case "rock":
      img.src = rockImage
      break
    case "paper":
      img.src = paperImage
      break
    case "scissors":
      img.src = scissorsImage
      break
  }
  /* new URL(`../images/icon-${el}.svg`, import.meta.url) */

  //putting it alltogether
  element.appendChild(elementBackground)
  element.appendChild(img)

  computerElement.appendChild(element)
}
//player element creation
function createElementPlayer(el) {
  //declaration
  let element = document.createElement("div")
  let elementBackground = document.createElement("div")
  let img = document.createElement("img")

  //adding classes and attributes
  const elementClasses = [`${el}Result`, "flex", "flex-ai-c", "flex-jc-c"]
  elementClasses.forEach((el) => {
    element.classList.add(el)
  })

  elementBackground.classList.add(`${el}Result__background`)
  img.classList.add(`${el}ImgTransform`)

  switch (el) {
    case "rock":
      img.src = rockImage
      break
    case "paper":
      img.src = paperImage
      break
    case "scissors":
      img.src = scissorsImage
      break
  }
  /* new URL(`../images/icon-${el}.svg`, import.meta.url) */

  //putting it alltogether
  element.appendChild(elementBackground)
  element.appendChild(img)

  playerElement.appendChild(element)
}

//animation
function startAnimation() {
  game.classList.remove("scale-in")
  game.classList.add("scale-out")

  setTimeout(() => {
    gameResult.classList.remove("scale-out")
    gameResult.classList.add("scale-in")
  }, 200)
}

function playItAgain() {
  gameResult.classList.remove("scale-in")
  gameResult.classList.add("scale-out")
  setTimeout(() => {
    game.classList.remove("scale-out")
    game.classList.add("scale-in")
  }, 200)
}
