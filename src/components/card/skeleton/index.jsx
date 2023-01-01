import React from 'react';
import './style.css';

const Skeleton = () => {
  return (
    <div className='skeleton'>
      <div className='skeleton-img'></div>
      <div className='skeleton-text'>
        <h2 className='skeleton-title'></h2>
        <p className='skeleton-description'>
          <span></span>
          <span></span>
        </p>
        <ul className='skeleton-skills'>
          <li className='skill'></li>
          <li className='skill'></li>
          <li className='skill'></li>
        </ul>
        <a href='#' className='skeleton-link'></a>
      </div>
    </div>
  );
};

export default Skeleton;
