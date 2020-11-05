
import './App.css';
import ProfilPhoto from './component/profile/ProfilPhoto';
import FullName from './component/profile/FullName';
import Adresse from './component/profile/Adresse';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FullName/>
        <Adresse/>
        <ProfilPhoto/>
      </header>
    </div>
  );
}

export default App;
