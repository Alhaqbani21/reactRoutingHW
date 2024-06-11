import React from 'react';
import ButtonChanger from './ButtonChanger';
import { Link } from 'react-router-dom';

function Hero(props) {
  return (
    <div
      className="hero min-h-screen flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex-grow flex flex-col justify-center items-center text-center text-neutral-content">
        <div className="max-w-md bg-gray-900 opacity-75 rounded p-4">
          <h1
            style={{ color: props.color }}
            className="mb-5 text-5xl font-bold"
          >
            {props.title}
          </h1>
          <p style={{ color: props.color }} className="mb-5 text-1xl">
            {props.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap mb-8 ">
        <Link to={'../breakingBad'}>
          <ButtonChanger title="Breaking Bad" />
        </Link>
        <Link to={'../GOT'}>
          <ButtonChanger title="Game of Thrones" />
        </Link>

        <Link to={'../TheWitcher'}>
          <ButtonChanger title="The Witcher" />{' '}
        </Link>
        <Link to={'../StrangerThings'}>
          <ButtonChanger title="Stranger Things" />{' '}
        </Link>
        <Link to={'../Kingdom'}>
          <ButtonChanger title="Kingdom" />{' '}
        </Link>
      </div>
    </div>
  );
}

export default Hero;
