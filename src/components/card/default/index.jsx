import React from 'react';
import withSkeleton from '../../../hoc/withSkeleton';
import './style.css';

const Card = ({ data, name }) => {
  return (
    <div className='card'>
      <div>
        <img
          className='card-img'
          src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light'
        />
      </div>
      <div className='card-text'>
        <h2 className='card-title'>{data?.name} </h2>
        <p className='card-description'>
          <span>{data?.email}</span>

          <h1>{name}</h1>
        </p>
        <ul className='card-skills'>
          <li className='skill'>{data?.mobile}</li>
          <li className='skill'>UX Designer.</li>
          <li className='skill'>Web Developer.</li>
        </ul>
        <a href='#' className='card-link'>
          Read More
        </a>
      </div>
    </div>
  );
};

export default withSkeleton(Card, 'http://localhost:3004/users');
