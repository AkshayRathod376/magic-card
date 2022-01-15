import './SingleCard.css'

export default function SingleCard({cards, handleChoice, flipped}) {


    const handleClick =()=>{
        handleChoice(cards)
    }


    return (
        <div className="card">
           <div className={flipped ? "flipped" : ""} >
              <img src={cards.src} className='front' alt='front-card' />
              <img src="img/cover.png" 
                alt='back-card'
                className='back'
                onClick={handleClick} 
               />
          </div>
        </div>
    )
}
