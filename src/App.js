import { useState, useEffect } from 'react'
import SingleCard from './components/SingleCard'

import './App.css';

const cardImages = [
  { "src": "/img/barbeque.png"},
  { "src": "/img/cupcake.png"},
  { "src": "/img/hamburger.png"},
  { "src": "/img/hot-dog.png"},
  { "src": "/img/pizza-slice.png"},
  { "src": "/img/sandwich.png"},
  { "src": "/img/puzzle.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

//compare 2 selected cards
useEffect(() => {
  if (choiceOne && choiceTwo) {
    if (choiceOne.src === setChoiceTwo.src ) {
      console.log('those cards match');
      resetTurn()
    } else {
      console.log('those cards do not match');
      resetTurn()
    }
  }
}, [choiceOne, choiceTwo])

//reset choices & increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

  return (
    <div className="App">
      <h2>Memory Game</h2>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
