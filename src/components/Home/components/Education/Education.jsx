import React from 'react';
import './Education.scss';

const CSI_LINK = 'https://www.csi.cuny.edu/';

const EDUCATION = [
  {
    "degree": "Bachelor of Science - Computer Science",
    "grad_date": "June 2017",
    "class_names": [
      {
        "class_name": "CSC 382: Analysis of Algorithms",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-382"
      },
      {
        "class_name": "CSC 330: Object-Oriented Software Design",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-330"
      },
      {
        "class_name": "CSC 326: Data Structures",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-326"
      },
      {
        "class_name": "CSC 424: Databases",
        "url": "https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-424"
      },
      {
        "class_name": "CSC 430: Software Engineering",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-430"
      },
      {
        "class_name": "CSC 450: Honors Workshop",
        "url": "https://csicuny.smartcatalogiq.com/en/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-450"
      }
    ]
  },
  {
    "degree": "Minor - Mathematics",
    "grad_date": "June 2017",
    "class_names": [
      {
        "class_name": "MTH 349: Cryptology",
        "url": "https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-349"
      },
      {
        "class_name": "MTH 338: Linear Algebra",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-338"
      },
      {
        "class_name": "MTH 311: Probability and Statistics",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-311"
      },
      {
        "class_name": "MTH 233: Calculus III",
        "url": "https://csicuny.smartcatalogiq.com/2018-2019/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-233"
      }
    ]
  },
  {
    "degree": "Bachelor of Science - Psychology",
    "grad_date": "August 2014",
    "class_names": [
      {
        "class_name": "PSY 330: Cognitive Psychology Lab",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/300/PSY-330"
      },
      {
        "class_name": "PSY 288: Cognitive Psychology",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-288"
      },
      {
        "class_name": "PSY 242: Developmental Psychology",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-242"
      },
      {
        "class_name": "PSY 232: Cognitive and Behavioral Neuroscience",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-232"
      }
    ]
  }
];

function generateClassNames(class_names){
  return class_names.map(klass => 
    <React.Fragment key={klass.class_name}>
      <p><span className='edu-classes-arrow'>&#8605;</span>
        <a href={klass.url}
            target='blank' rel='noopener noreferrer'>
            {klass.class_name}
        </a>
      </p>
    </React.Fragment>
  );
}

function createEduComponent(degree, grad_date, class_names){
  return (
    <React.Fragment key={`${degree} ${grad_date}-${class_names.length}`}>
      <li>
        <div className='degree-heading'>
          {degree}<br></br>
          <span className='grad-date-label'>{grad_date}</span>
        </div>
        <div className='edu-class-list'>
          {generateClassNames(class_names)}
        </div>
      </li>
    </React.Fragment>
  );
}

function generateEduComponents(){
  return EDUCATION.map(edu => 
    createEduComponent(edu.degree, edu.grad_date, edu.class_names)
  );
}

export function Education(){
  return (
    <>
      <span className='anchor' id='Education'></span>
      <div className='home-item'>
        <h1>Education</h1>
        <div className='education-items'>
          <h4>The College of Staten Island - CUNY</h4>
          <a href={CSI_LINK}
             target='blank' rel='noopener noreferrer'>
             <img src={'college/cunycsi_college.jpg'}
                  className='college-photo-csi'
                  alt='CSI'
                  title='CSI' />
          </a>
          <ul>
            {generateEduComponents()}
          </ul>
        </div>
      </div>
    </>
  );
}
