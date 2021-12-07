import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
        <img className="front" src={card.src} alt="card front"  />
        <img 
          className="back" 
          src="/img/puzzle.png" 
          alt="card back" 
          onClick={handleClick}
        /> 
    </div>
  )
}
