import React from 'react';
import Hero from '../components/Hero';
import breakingBadImage from '../assets/breakingBad.png';

function BreakingBad() {
  return (
    <Hero
      color="white"
      title="Breaking Bad"
      img={breakingBadImage}
      description="Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse."
    />
  );
}

export default BreakingBad;
