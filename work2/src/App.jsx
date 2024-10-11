import './App.css'
import Card from "./components/card/card"
import { cards } from "./data"



function App() {
  
  const chessing = () => {
    const confirmation = confirm("Are you sure you want to proceed?");
  
    if (confirmation) {
      const round2 = confirm("Are you really sure?");
      
      if (round2) {
        window.open('https://www.chess.com', '_blank'); 
      }
  };
  }


  return (
   <div>
    <button onClick={chessing}>Wanna play chess?</button>
    {cards.map(el => (
      <Card
      imgsrc={el.img}
      key={el.id}
      age={el.age}
      name={el.name}
      bg={el.bg}/>
    ))}
   </div>
  )
}

export default App
