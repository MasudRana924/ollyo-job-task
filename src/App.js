import { useEffect, useState } from 'react';
import './App.css';
import Preloader from './loader/Preloader';
import Gallery from './components/Gallery';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
      {loading ? <div>
        <Preloader></Preloader>
      </div> : <div className="App">
             <Gallery></Gallery>
      </div>}
    </div>
  );
}

export default App;
