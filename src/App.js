import './App.css';
import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';



const cardImages = [
  {"src":"/img/helmet.png", matched:false},
  {"src":"/img/potion.png", matched:false},
  {"src":"/img/ring.png", matched:false},
  {"src":"/img/scroll.png", matched:false},
  {"src":"/img/shield.png", matched:false},
  {"src":"/img/sword.png", matched:false}
]

function App() {

  const [cards,setCards]  = useState([]);
  const [terns, setTerns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
const [disabled, setDisabled] = useState(false)
   //shuffel cards
   const shuffelCards= ()=>{
     const shuffelCards = [...cardImages, ...cardImages]
     .sort(()=> Math.random()-0.5)
     .map((card)=>({...card, id: Math.random() } ));

     setChoice1(null);
     setChoice2(null);
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
      setDisabled(true)
      if(choice1.src===choice2.src){
        setCards((prevCards)=>{
        return  prevCards.map(card=>{
            if(card.src === choice1.src){
              return {...card, matched:true};
            }else{
              return card;
            }
          })
        })
        resetTerns();
      }else{
        setTimeout(()=>{return resetTerns()},1000)
      }

    }
    
   }, [choice1,choice2])


   useEffect(() => {
    shuffelCards()
   }, [])

   console.log(cards);

   //Resetterms function and increase ter
   const resetTerns =()=>{
      setChoice1(null);
      setChoice2(null);
      setTerns((prevTerns)=>{
        return (prevTerns+1)
      })
      setDisabled(false);
   }


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffelCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card=>(
          <SingleCard 
          cards ={card} 
          key={card.id} 
          handleChoice= {handleChoice}
          flipped={ card === choice1 || card === choice2 || card.matched}
          disabled ={disabled}
          />
        ))}
      </div>

      <h1>{terns}</h1>
    </div>
  );
}

export default App