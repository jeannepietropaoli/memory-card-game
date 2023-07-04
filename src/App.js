import React from 'react';
import './styles/App.css';
import Card from "./components/Card"
import { cardsData } from "./cardsData"
import Scoreboard from './components/Scoreboard';

function App() {
  React.useEffect(() => {
    if(areAllCardsHeld()) {
      console.log('you won')
      setGameOver(true)
    }
  })

  const [heldCards, setHeldCards] = React.useState([])
  const [gameOver, setGameOver] = React.useState(false)
  const [score, setScore] = React.useState(0)

  function areAllCardsHeld() {
    return heldCards.length === cardsData.length
  }

  function shuffleArray(array) {
    const arrayCopy = array
    const newArray = []
    while(arrayCopy.length>0) {
        let randomIndex = Math.floor(Math.random() * array.length)
        newArray.push(arrayCopy.splice(randomIndex, 1)[0])
    }
    return newArray
  }

  function isCardAlreadyHeld(cardId) {
    return heldCards.includes(cardId)
  }

  function selectCard(cardId) {
    if(isCardAlreadyHeld(cardId)) {
      setGameOver(true)
    }
    else {
      setHeldCards(prevHeldCards => {
        return ([...prevHeldCards, cardId])
      })
      setScore(prevScore => prevScore + 1)
    }
  }

  function playAgain() {
    setHeldCards([])
    setScore(0)
    setGameOver(false)
  }

  function isPerfectScore() {
    return score === cardsData.length
  }

  const cardsElements = cardsData.map(cardData => {
    return <Card name={cardData.name} url={cardData.url} isHeld={heldCards.includes(cardData.id)} key={cardData.id} selectCard={() => selectCard(cardData.id)}/>
  })

  return (
    <div className="app">
      <h1 className='app--title'>FALL GUYS' MEMORY !</h1>
      <h3 className='app--instructions'>- Pick a card but don't pick it twice or you loose ! -</h3>
      <div className='cardGrid'>{shuffleArray(cardsElements)}</div>
      {gameOver && <Scoreboard perfectScore={isPerfectScore()} score={score} playAgain={playAgain} maxScore={cardsData.length} />}
    </div>
  );
}

export default App;
