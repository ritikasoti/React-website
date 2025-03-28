import React from 'react'
import './Title.css'

const Title = ({ subTitle, title }) => {
    // const Title = () => {
    return (

        <div className='title' >

            <p>{subTitle}</p>
            <h2>{title}</h2>

            {/* <p>Our Programs</p> */}
            {/* <h2>Tech-Driven Education for a Brighter Tomorrow</h2> */}

        </div>
    )
}

export default Title
