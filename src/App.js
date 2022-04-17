import logo from './logo.svg';
import './App.css';
import MostWantedList from './MostWantedList'

function App() {

  async function loadList() {

    const apiUrl = 'https://api.fbi.gov/wanted/v1/list';

    let result = await fetch(apiUrl);
    let list = await result.json();

    console.log(list);

  }


  return (
    <div className="App">
      <MostWantedList/>
      <button onClick={loadList}>Load bad guys</button>
    </div>
  );
}

export default App;
