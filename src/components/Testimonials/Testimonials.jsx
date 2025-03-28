import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/arrow-right.png'
import back_icon from '../../assets/arrow-left.png'
import user_1 from '../../assets/T1.png'
import user_2 from '../../assets/T2.png'
import user_3 from '../../assets/T3.png'
import user_4 from '../../assets/T4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideforward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    const slidebackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

    return (
        <div className='testimonials' >
            <img src={next_icon} alt='' className='next-btn' onClick={slideforward}/>
            <img src={back_icon} alt='' className='back-btn' onClick={slidebackward} />
            <div className="slider">
                <ul ref={slider} >
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt='' />
                            <div>
                            <h3>William 1</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>The staff were courteous, knowledgeable, and easy to communicate with. The entire process was smooth, and the results were exactly what we wanted. A+!" </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt='' />
                            <div>
                            <h3>William 2</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>The staff were courteous, knowledgeable, and easy to communicate with. The entire process was smooth, and the results were exactly what we wanted. A+!" </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt='' />
                            <div>
                            <h3>William 3</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>The staff were courteous, knowledgeable, and easy to communicate with. The entire process was smooth, and the results were exactly what we wanted. A+!" </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt='' />
                            <div>
                            <h3>William 4</h3>
                            <span>USA</span>
                        </div>
                        </div>
                        <p>The staff were courteous, knowledgeable, and easy to communicate with. The entire process was smooth, and the results were exactly what we wanted. A+!" </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
