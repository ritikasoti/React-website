import React from 'react'
import './About.css'
import about_img from '../../assets/5.png'
import icon from '../../assets/icon-5.png'

const About = () => {
    return (
        <div className='about'>

            <div className="about-left">
                <img src={about_img} alt='' className='about-img' />
                <img src={icon} alt='' className='icon' />

            </div>

            <div className="about-right">
                <h3>About us</h3>
                <h2>Revolutionizing Learning Through Technology</h2>
                <p>Technology in education refers to the integration of digital tools, platforms, and resources to enhance teaching and learning experiences. It empowers educators to deliver content more effectively, allows for personalized learning, and provides students with access to vast information and interactive experiences. From online courses to virtual classrooms and AI-driven learning tools, technology is reshaping the way we approach education, making it more accessible, engaging, and efficient.</p>
                <p>Technology in education refers to the integration of digital tools, platforms, and resources to enhance teaching and learning experiences. It empowers educators to deliver content more effectively, allows for personalized learning, and provides students with access to vast information and interactive experiences. From online courses to virtual classrooms and AI-driven learning tools, technology is reshaping the way we approach education, making it more accessible, engaging, and efficient.</p>
                <p>Technology: The Gateway to Endless Learning</p>
            </div>

        </div>
    )
}

export default About
