import React from 'react';
import bg from '../../assets/website photo.png';
import btnImg from '../../assets/download.png';
import './intro.css';



const Intro = () => {
  const resumeDownloadLink = "Amielio Gounden CV (2024-06-24).pdf";
  return (
    <section id="intro">
<div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Amielio Gounden</span> <br /> Computer Science Graduate </span>
<p className="introPara">I am a skilled graduate whome is keen to improve his skills and make a difference to your company</p>
<a  href={resumeDownloadLink} download className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Download My CV</a>
</div>
<img src={bg} alt="Profile" className="bg"/>


    </section>

  );
}

export default Intro;