import './App.css';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'
import CompanyDetail from './components/CompanyDetail'
import JobsList from './components/JobsList'

class App extends Component {
  state = {
    company: "",
    queryTitle: "",
    queryCompany: "",
    searchButtonClicked: false
  }
  seachQueryTitle = (e) => this.setState({ queryTitle: e.target.value });
  seachQueryCompany = (e) => this.setState({ queryCompany: e.target.value });
  searchButton = () => this.setState({ searchButtonClicked: true });
  render() {
    return (
      <Router>
        <Container>
          {/* ******************* */}


          {/* ******************* */}
          <Row>
            <Col sm={12} className="text-center background-div">
              <Link to="/">
                <h1>Jobs Search Engine</h1>
              </Link>
            </Col>
          </Row>
          <Form inline className="text-center">
            <Row className="justify-content-md-center">
              {/* <Col sm={6} className="text-center background-div">
                <FormControl onChange={this.seachQuery} type="text" placeholder="Search" className="mr-2" />
              </Col> */}
              <Col className="text-center background-div">
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridtitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control onChange={this.seachQueryTitle} type="text" placeholder="Enter Title" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridcompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control onChange={this.seachQueryCompany} type="text" placeholder="Enter Company name" />
                    </Form.Group>
                  </Form.Row>
                  <Button onClick={this.searchButton} variant="outline-success">Search</Button>

                </Form>
              </Col>
              {/* <Col sm={2} className="text-center background-div" md="auto">
                <Button onClick={this.searchButton} variant="outline-success">Search</Button>
              </Col> */}
            </Row>
          </Form>
          <hr />
          {this.state.queryTitle.length >= 3 && this.state.searchButtonClicked &&
            <Route path="/" exact render={(routerProps) => (<JobsList {...routerProps} queryTitle={this.state.queryTitle} queryCompany={this.state.queryCompany}/>)} />
          }
          <Route path="/company-detail" exact render={(routerProps) => (<CompanyDetail {...routerProps} company={this.state.company} />)} />
        </Container>
      </Router>
    );
  }
}

export default App;
