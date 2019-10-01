import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Poster from '@boxoffice/shared-components/packages/Poster';
import Button from '@boxoffice/shared-components/packages/Button';

import './home.css';

const imageSources = [
  'https://cdn.collider.com/wp-content/uploads/2019/03/avengers-endgame-poster-768x1137.jpg',
  'https://www.boxofficepro.com/wp-content/uploads/2019/09/Abominable-movie-site-crop-600x751.jpg'
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showPoster: true,
      showToggleButton: true,
      imageSrcIndex: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  getNextImage() {
    return this.state.imageSrcIndex === 0 ? 1 : 0;
  }

  handleButtonClick() {
    this.setState({ showPoster: !this.state.showPoster, showToggleButton: !this.state.showToggleButton });
  }

  handleImageChange() {
    this.setState({ imageSrcIndex: this.getNextImage() });
  }

  render() {
    return (
      <div className='home'>
        <Row>
          <Col>
            {this.state.showPoster && (
              <Poster src={imageSources[this.state.imageSrcIndex]} className='poster1'>
                <div>hello</div>
              </Poster>
            )}
          </Col>
          <Col>
            <Button label={this.state.showPoster ? 'hide' : 'show'} onClick={this.handleButtonClick} className='btn1'></Button>
          </Col>
          <Col>{this.state.showToggleButton && <Button label='switch image' onClick={this.handleImageChange} className='btn2'></Button>}</Col>
        </Row>
      </div>
    );
  }
}

export default Home;
