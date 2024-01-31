import './App.css';
import Home from './views/Home'
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
