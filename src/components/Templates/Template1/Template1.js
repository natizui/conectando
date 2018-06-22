import React from 'react'
import './Template1.css'

import Name from '../../Content/Name/Name.js'
import JobTitle from '../../Content/Job/JobTitle.js'
import Contact from '../../Content/Contact/Contact.js'
import Education from '../../Content/Education/Education.js'
import Skills from '../../Content/Skills/Skills.js'
import Profile from '../../Content/Profile/Profile.js'
import Experience from '../../Content/Experience/Experience.js'



function Template1(props) {
  return (
    <div className="template1__geral">
      <div className="template1__name">
        <Name />
        <JobTitle />
      </div>
      <div className="template1__content">
        <div className="template1__left">
          <div className="template1__contact">
            <Contact />
          </div>
          <div className="template1__education">
            <Education />
          </div>
          <div className="template1__skills">
            <Skills />
          </div>
        </div>
        <div className="template1__right">
          <div className="template1__profile">
            <Profile />
          </div>
          <div className="template1__experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Template1;