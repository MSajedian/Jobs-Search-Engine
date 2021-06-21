import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class CompanyDetail extends Component {
  state = {
    jobSelected: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.companySelected !== this.props.companySelected) {
      this.setState({
        company: this.props.companySelected,
      });
    }
  }

  render() {
    return (
      <div className="mt-3">
        {this.state.company ? (
          <>
            <Row>
              <Col sm={12}>
                <h1>{this.state.company.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4}>
                <div className="mt-3">
                  <img
                    className="company-cover"
                    src={this.state.company.imageUrl}
                    alt="company selected"
                  />
                </div>
              </Col>
              <Col sm={8}>
                <p>
                  <span className="font-weight-bold">Description:</span>
                  {this.state.company.description}
                </p>
                <p>
                  <span className="font-weight-bold">Price:</span>
                  {this.state.company.price}
                </p>
                <Button color="primary" onClick={() => {
                  // I need a way of adding this company to the cart
                  this.props.addToCart(this.state.company)
                }}>
                  ADD TO CART
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3>Search jobs!</h3>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default CompanyDetail;
