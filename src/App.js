import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import Bread from './screens/bread'
import Profile from './screens/profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r" element={<Home />} />
        <Route path="/r/breaddit" element={<Bread />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
