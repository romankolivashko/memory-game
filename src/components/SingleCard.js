import './SingleCard.css'

export default function SingleCard({ card }) {
  return (
    <div className="card">
        <img className="front" src={card.src} />
        <img className="back" src="/img/puzzle.png" alt="card back" /> 
    </div>
  )
}
