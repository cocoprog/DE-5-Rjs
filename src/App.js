import logo from './logo.svg';
import './App.css';
import { Header, ItemListContainer, Counters, Item, ItemList} from './components';

function App() {
  return (
    <div className="App">      
      <Header />
      <main>
      <section className="App-content">        
        <ItemListContainer greeting={'greeting'}/>
        {/* Contador */}
        <Counters />
        <img src={logo} className="App-logo" alt="logo" />
        </section>
      </main>
    </div>
  );
}

export default App;
