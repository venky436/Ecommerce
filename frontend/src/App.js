import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container,Row,Col } from 'react-bootstrap'
import HomeScreen from "./Screens/HomeScreen";
import { Product } from "./components/Product";
import { ProductScreen } from "./Screens/ProductScreen";
import { Route,BrowserRouter } from 'react-router-dom'
import CartScreen from "./Screens/CartScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { RegisterScreen } from "./Screens/RegisterScreen";
import { UserDetailsScreen } from "./Screens/UserDetailsScreen";
import { ShippingScreen } from "./Screens/ShippingScreen";
import { PaymentScreen } from "./Screens/PaymentScreen";
import { PlaceOrderScreen } from "./Screens/PlaceOrderScreen";
import {IframePage} from "./Screens/VideoScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
     <main>
       <Container>

        <Route path="/"  exact component={HomeScreen} />
        <Route component={ProductScreen} path="/product/:id" />
        <Route component={LoginScreen} path="/login" />
        <Route component={RegisterScreen} path="/register" />
        <Route component={IframePage} path="/video" />


        <Route component={PaymentScreen} path="/payment" />
        <Route component={ PlaceOrderScreen } path="/placeOrder" />


        <Route component={ShippingScreen} path="/shipping" />

        <Route component={UserDetailsScreen} path="/profile" />



        <Route path='/cart/:id?' component={CartScreen} />
           
       </Container>
       
     </main>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
