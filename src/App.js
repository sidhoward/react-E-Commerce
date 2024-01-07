import Footer from "./components/Footer";
import React, { useState, useEffect } from "react"
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";


function App() { 
  const [cart, setCart] = useState([])  

  function addToCart(book) { 
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
        <div className="App">
          <Nav />  
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="books" exact render={() => <Books books={books} />} />
            <Route path="books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />} />
            <Route path="cart" render={() => <Cart books={books} cart={cart} />} />
            <Footer />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
 