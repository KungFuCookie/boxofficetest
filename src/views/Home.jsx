import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Poster from '@boxoffice/shared-components/src/Poster';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Row>
          <Col>
            <Poster src='https://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster-768x1137.jpg' />
          </Col>
        </Row>
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
