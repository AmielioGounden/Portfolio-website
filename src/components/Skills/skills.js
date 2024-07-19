import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id='skills'>
<span className="skillTitle">WHAT I DO</span>
<span className="skillDesc">I am a skilled and passionate graduate student that is determined to excel in any task given to me and i am always willing to learn new skills and improve myself in the working enviroment </span> 
<div className="skillBars">
<div className="skillBar">
    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
    <div className="skillBarText">
        <h2>UI/UX Design</h2>
        <p>* Conduct thorough user research to understand the target audience and their needs.</p>
        <p>* Include features for users to provide feedback, allowing for continuous improvement of the</p>
        <p>&nbsp;&nbsp;design.</p>
        <p>* Maintain consistency in design elements, such as colors, fonts, and button styles, to create </p>
        <p>&nbsp;&nbsp;a cohesive experience.</p>
    </div>
</div>
<div className="skillBar">
    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
    <div className="skillBarText">
        <h2>Website Design</h2>
        <p>* Utilize modern design principles to create visually appealing websites that capture the </p>
        <p>&nbsp;&nbsp;user's attention.</p>
        <p>* Design intuitive and straightforward navigation to help users find information easily.</p>
        <p>* Ensure the website is fully responsive and performs well on mobile devices.</p>

    </div>
</div>
<div className="skillBar">
    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
    <div className="skillBarText">
        <h2>App Design</h2>
        <p>*  Focus on creating intuitive and user-friendly interfaces that prioritize the user experience.</p>
        <p>*  Ensure the app functions seamlessly across various devices and screen sizes.</p>

    </div>
</div>
</div>

    </section>
  )
}

export default skills