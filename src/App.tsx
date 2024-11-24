import { BrowserRouter } from 'react-router-dom';

import { GlobalCss } from './styles';
import Banner from './components/banner';

import Rotas from './routes';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Banner />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
