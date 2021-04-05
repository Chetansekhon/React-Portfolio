import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";
import Home from "./components/pages/home";
import{HashRouter as Router,Route}from "react-router-dom"
import Wrapper from "./components/Wrapper";
import About from "./components/pages/about";
import Profile from "./components/pages/profile";

function App() {

  
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
          </Wrapper>
        <Footer />
      </div> 
       </Router>
    );
    }

export default App;
