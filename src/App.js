
import './App.css';
import Header from "./component/Header";
import Event from "./component/Event";
import Footer from "./component/Footer";
import Card from "./component/Card";
function App() {
  return (
    <div className="App">
       <Header />
        <div className="App-header">
          
          <Event />
          <Card />
        </div>
        
      <Footer />
    </div>
  );
}

export default App;
