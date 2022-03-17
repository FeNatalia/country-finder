import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Details } from './pages/Details';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} exact path="/" />
          <Route element={<Details/>} path="/details"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
