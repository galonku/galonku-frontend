import React from 'react';
import Carousel from 'nuka-carousel';

export default class Review extends React.Component {
  render() {
    return (
      <Carousel>
        <img alt='review-1' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img alt='review-2' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img alt='review-3' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img alt='review-4' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img alt='review-5' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img alt='review-6' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    )
  }
}