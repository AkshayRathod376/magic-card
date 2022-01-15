import './App.css';
import { useState, useEffect } from 'react';
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
     //choose which card is selected
     choice1 ? setChoice2(card) :setChoice1(card);

   }

   //compair two selected cards
   useEffect(() => {

    if(choice1 && choice2){

      if(choice1.src===choice2.src){
        console.log("cards are match");
        resetTerns();
      }else{
        console.log("cards so not match");
        resetTerns();
      }

    }
    
   }, [choice1,choice2])

   //Resetterms function and increase ter
   const resetTerns =()=>{
      setChoice1(null);
      setChoice2(null);
      setTerns((prevTerns)=>{
        return (prevTerns+1)
      })
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