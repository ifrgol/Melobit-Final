import Home from "./components/Home";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { Route, Routes} from 'react-router-dom';
import Cartsearch from "./components/Cartsearch";



function App() {
  return (
    <div>
      <Header /> 

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Cartsearch/>} />
               
      </Routes>

    </div>
  );
}

export default App;
