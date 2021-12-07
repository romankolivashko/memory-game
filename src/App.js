import { useState } from 'react'
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

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns);

  return (
    <div className="App">
      <h2>Memory Game</h2>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
