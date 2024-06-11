import React from 'react';
import Hero from '../components/Hero';
import KingdomImage from '../assets/KingdomImage.png';

function Kingdom() {
  return (
    <Hero
      color="white"
      title="Kingdom"
      img={KingdomImage}
      description="In ancient China, a young boy dreams of becoming the greatest general of the Qin Kingdom.

"
    />
  );
}

export default Kingdom;
