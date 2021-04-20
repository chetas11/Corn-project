import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Product from "./Components/Product";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
            <Gallery />
            <Product />
            <About />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
