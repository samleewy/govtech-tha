import React from 'react'
import './WOGHeader.css'

const WOGHeader = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <img src="./images/singapore-lion.png" alt="WOG Logo" />
                <span>An Official Website of the <span className="strong">Singapore Government </span></span>
            </div>
        </div>
    )
}

export default WOGHeader