import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import KnowMore from './pages/knowMore';


const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/knowMore" element={<KnowMore />}></Route>
  </Routes>
)

export default Rotas;
