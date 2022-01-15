import './SingleCard.css'

export default function SingleCard({cards}) {
    return (
        <div>
           <div className="card" >
              <img src={cards.src} className='front' alt='front-card' />
              <img src="img/cover.png" className='back' alt='back-card' />
          </div>
        </div>
    )
}
