import Home from "./components/Home";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { Route, Routes} from 'react-router-dom';
import Search from "./components/Search";
import SongDetail from "./components/SongDetail";



function App() {
  return (
    <div>
      <Header /> 

      <Routes>
          <Route path="/songdetail/:id" element={<SongDetail />} />
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
               
      </Routes>

    </div>
  );
}

export default App;
