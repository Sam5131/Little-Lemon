import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import OrderOnline from './components/pages/OrderOnline';
import Login from './components/pages/Login';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path={pages.get('home').path} element={<Home />} />
            <Route 
              path={pages.get('about').path} 
              element={<About />} 
            />
            <Route 
              path={pages.get('menu').path} 
              element={<Menu />} 
            />
            <Route path={pages.get('bookings').path} element={<Bookings />} />
            <Route 
              path={pages.get('confirmedBooking').path} 
              element={<ConfirmedBooking />} 
            />
            <Route 
              path={pages.get('orderOnline').path} 
              element={<OrderOnline />} 
            />
            <Route 
              path={pages.get('login').path} 
              element={<Login />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;