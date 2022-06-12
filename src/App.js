
import './App.css';
import PersonalCards from './components/PersonalCards';

function App() {
  return (
    <div className="App">
      <PersonalCards firstName='Jane' lastName='Doe' age={45} hairColor='Black'/>
      <PersonalCards firstName='Jhon' lastName='Smith' age={88} hairColor='Brown'/>
      <PersonalCards firstName='Milard' lastName='Fillmore' age={50} hairColor='Brown'/>
      <PersonalCards firstName='Maria' lastName='Smith' age={62} hairColor='Brown'/>
    </div>
  );
}

export default App;
