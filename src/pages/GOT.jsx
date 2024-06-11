import React from 'react';
import Hero from '../components/Hero';
import GOTImage from '../assets/GOT.png';

function GOT() {
  return (
    <Hero
      color="white"
      title="Game of thrones"
      img={GOTImage}
      description="Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men."
    />
  );
}

export default GOT;
