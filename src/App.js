import './styles/App.css';
import Card from "./components/Card"
import { cardsData } from "./cardsData"

function App() {
  const cardElements = cardsData.map(cardData => {
    return <Card name={cardData.name} url={cardData.url} />
  })

  return (
    <div className="app">
      <h1 className='app--title'>FALL GUYS' MEMORY !</h1>
      <h3 className='app--instructions'>- Pick a card but don't pick it twice or you loose ! -</h3>
      <div className='cardGrid'>{cardElements}</div>
    </div>
  );
}

export default App;
