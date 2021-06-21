import './App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col sm={12} className="text-center background-div">
              <Link to="/">
                <h1>Jobs Search Engine</h1>
              </Link>
            </Col>
          </Row>
          <hr />
          {/* <Route path="/" exact render={(routerProps) => <BookStore {...routerProps} addToCart={this.addToCart} />} /> */}
          {/* <Route path="/cart" exact render={(routerProps) => ( <Cart {...routerProps} cart={this.state.cart} removeFromCart={this.removeFromCart} /> )} /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
