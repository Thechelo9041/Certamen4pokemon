import Card from '../src/componentes/Card'

function App() {
  const pokemonNumbers = [12, 248, 123, 100, 147, 148, 149, 150, 23, 87];

  
  return (
    <div className="App">
      {pokemonNumbers.map((number) => (
        <Card key={number} pokemonNumber={number} />
      ))}
    </div>
  );
}

export default App;
