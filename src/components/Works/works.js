import React from 'react'
import './works.css'
import Project1 from '../../assets/portfolio-1.jpg';
import Project2 from '../../assets/portfolio-2.jpg';

const works = () => {
  return (
    <section id='works'>
<h2 className="worksTitle">My Projects</h2>
<span className="worksDesc">I take pride in my work and strive to achieve the best outcome possible, i never fail to meet a deadline and everything is done to the best of my ability</span>
<div className="worksImgs">
<img src={Project1} alt="UIDesign" className="worksImg"/>
<img src={Project2} alt="UIDesign" className="worksImg"/>


</div>

    </section>
  )
}

export default works