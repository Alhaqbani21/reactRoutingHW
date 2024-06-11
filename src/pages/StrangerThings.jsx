import React from 'react';
import Hero from '../components/Hero';
import StrangerThingsImage from '../assets/StrangerThingsImage.png';

function StrangerThings() {
  return (
    <Hero
      color="white"
      title="Stranger Things"
      img={StrangerThingsImage}
      description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
    />
  );
}

export default StrangerThings;
