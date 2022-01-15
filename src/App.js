import './App.css';
import { useState } from 'react';



const cardImages = [
  {"src":"/img/helmet-1.png"},
  {"src":"/img/potion-1.png"},
  {"src":"/img/ring-1.png"},
  {"src":"/img/scroll-1.png"},
  {"src":"/img/shield-1.png"},
  {"src":"/img/sword-1.png"}
]

function App() {

  const [cards,setCards]  = useState([]);
  const [terns, setTerns] = useState(0);

   //shuffel cards
   const shuffelCards= ()=>{
     const shuffelCards = [...cardImages, ...cardImages]
     .sort(()=> Math.random()-0.5)
     .map((card)=>({...card, id: Math.random() } ));

      setCards(shuffelCards);
      setTerns(0);
   }

   console.log(cards,terns);



  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffelCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card=>(
          <div className='card' key={card.id}>
              <img src={card.src} className='front' alt='front-card' />
              <img src="img/cover.png" className='back' alt='back-card' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App