import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <h1>Boxoffice</h1>
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

export default Layout;
