import './App.css';
import './components/style.css';
import AppRoute from "./components/appRoute";
import API from "./components/API";
import Footer from "./components/Footer"; 


function App() {
  return (
    <div className="App">

      
      <AppRoute/>
      {/* <API/>
       */}
       <Footer/>
    
    </div>
  );
}

export default App;
