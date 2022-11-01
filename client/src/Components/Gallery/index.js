// photo-port uses a gallery component 
import React from 'react';
import PhotoList from '../Photos';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentGroup } = props;
  return (
    <section>
      <h1 data-testid="h1tag">hello</h1>
      <p>It's a cookie</p>
      <PhotoList group={currentGroup} />
    </section>
  );
}
export default Gallery;