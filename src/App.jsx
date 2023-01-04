import logo from './logo.svg';
import './App.css';
import ContactEstruct from './forms/contact_estruct';
import ContactComp from './component/contact_comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       

        <ContactComp></ContactComp>

      </header>
    </div>
  );
}

export default App;
