import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className='my-5'>
              <Image src='/TechSummit.png' fluid />
            </Col>
          </Row>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;
