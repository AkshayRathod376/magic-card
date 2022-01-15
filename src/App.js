import './App.css';
import { useState } from 'react';
import SingleCard from './components/SingleCard';



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
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

   //shuffel cards
   const shuffelCards= ()=>{
     const shuffelCards = [...cardImages, ...cardImages]
     .sort(()=> Math.random()-0.5)
     .map((card)=>({...card, id: Math.random() } ));

      setCards(shuffelCards);
      setTerns(0);
   }

//handleChoice function
   const handleChoice = (card)=>{
        console.log(card)
   }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffelCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card=>(
          <SingleCard cards ={card} key={card.id} handleChoice= {handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App