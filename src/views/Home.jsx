import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Row>
          <Col>
            <p>Hello from Home</p>
          </Col>
          <Col>
            <Link to='/about'>Go to about</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
