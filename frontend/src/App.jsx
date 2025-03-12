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
import { AuthProvider } from './providers/AuthProvider';
import Profile from './components/Profile/Profile';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import { OrdersProvider } from './providers/OrdersProvider';

function App() {
  return (
    <AuthProvider>
      <OrdersProvider>
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
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/orders" element={<Orders />} />
                  </Routes>
                </main>
              </div>
            </Router>
          </CartProvider>
        </PetProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}

export default App;
