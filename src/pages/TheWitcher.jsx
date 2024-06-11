import React from 'react';
import Hero from '../components/Hero';
import TheWitcherImage from '../assets/TheWitcherImage.png';

function TheWitcher() {
  return (
    <Hero
      color="white"
      title="The Witcher"
      img={TheWitcherImage}
      description="The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts."
    />
  );
}

export default TheWitcher;
