import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { HashRouter as Router, Route, Routes, } from "react-router-dom";
import Pets from './components/Pets/Pets';
import PetDetail from './components/Pets/PetDetails/PetDetails';
import { CartProvider } from './providers/CartProvider';
import { PetProvider } from './providers/PetsProvider';
import PetForm from './components/Pets/PetForm/PetForm';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <PetProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <header>
              <nav>
                <Navbar />
              </nav>
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/pets/:id" element={<PetDetail />} />
                <Route path="/pets/petForm" element={<PetForm />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </PetProvider>
  );
}

export default App;
