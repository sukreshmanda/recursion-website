import './App.css';
import logo from './assets/images/logo.svg'
import ai from './assets/images/ai.svg'
import train from './assets/images/train.svg'
import design from './assets/images/design.svg'
import React from "react"
import Header from './components/Header'
import Slideshow from './components/Slideshow'
import Services from './components/Services'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideshow: [
        {
          title: "Based on Neural Networks",
          description: "We use top level neural nets to perform better and make them the best",
          image: ai
        },
        {
          title: "We update them",
          description: "We train them and update the architecture so as to the current needs",
          image: train
        },
        {
          title: "Designed to Dominate",
          description: "We designed them to dominate the industry and make them the acheivers",
          image: design
        }
      ]
    }
  }
  render() {
    return (
      <Router>
        <div className="App bg-primary">
          <div className="header">
            <Header logo={logo} />
          </div>
          <div className="container bg-primary">
            <Switch>
              <Route exact path="/">
                <Slideshow data={this.state.slideshow} />
              </Route>
              <Route exact path="/home">
                <Slideshow data={this.state.slideshow} />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/portfolio">
                portfolio
              </Route>
              <Route exact path="/pricing">
                pricing
              </Route>
              <Route exact path="/about">
                about
              </Route>
              <Route exact path="/team">
                team
              </Route>
              <Route exact path="/contact">
                contact
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Footer logo={logo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
