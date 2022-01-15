import './SingleCard.css'

export default function SingleCard({cards, handleChoice}) {


    const handleClick =()=>{
        handleChoice(cards)
    }


    return (
        <div>
           <div className="card" >
              <img src={cards.src} className='front' alt='front-card' />
              <img src="img/cover.png" className='back'onClick={handleClick} alt='back-card' />
          </div>
        </div>
    )
}
