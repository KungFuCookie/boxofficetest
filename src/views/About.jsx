import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
class About extends Component {
  render() {
    return (
      <div className='about'>
        <Row>
          <Col>
            <p>Hello from About</p>
          </Col>
          <Col>
            <Link to='/'>go to Home</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
