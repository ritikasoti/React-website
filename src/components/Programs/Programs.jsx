import React from 'react'
import './Programs.css'
import program_1 from '../../assets/2.png'
import program_2 from '../../assets/3.png'
import program_3 from '../../assets/4.png'
import program_icon_1 from '../../assets/icon1.png'
import program_icon_2 from '../../assets/icon2.png'
import program_icon_3 from '../../assets/icon3.png'

const programs = () => {
    return (
        <div className='programs' >

            <div className="program">
                <img src={program_1} alt='' />
                <div className="caption">
                    <img src={program_icon_1} alt='' />
                    <p>Innovation</p>
                </div>
            </div>

            <div className="program">
                <img src={program_2} alt='' />
                <div className="caption">
                    <img src={program_icon_2} alt='' />
                    <p>Technology</p>
                </div>
            </div >
            <div className="program">
                <img src={program_3} alt='' />
                <div className="caption">
                    <img src={program_icon_3} alt='' />
                    <p>Education</p>
                </div>
            </div >
        </div>
    )
}

export default programs
