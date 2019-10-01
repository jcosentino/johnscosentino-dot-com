import React from 'react';
import './Technology.scss';

export class Technology extends React.Component {
  render(){
    return (
      <>
        <span className='anchor' id='Technology'></span>
        <div className='home-item'>
          <h1>
          Technology
          </h1>
          <div className='technology-items'>
            <ul>
              <li>Angular</li>
              <li>AWS</li>
              <li>Express JS</li>
              <li>Flask</li>
              <li>Node JS</li>
              <li>React JS<span role='img' aria-label="right pointer">👈</span></li>
              <li>Ruby On Rails</li>
              <li>Spring</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
