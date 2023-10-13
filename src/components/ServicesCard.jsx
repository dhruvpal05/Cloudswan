import React from 'react';

function ServicesCard(){
    return (
        <div className='card-outer'>
        <div className='card-inner'>
        <div className="card-container">
            <img src="/assets/Image40.png" alt="card image" className="card-img" />
            <h1 className="card-title">Software Development</h1>
            <p className="card-description">description</p>
            <a href="#" className="card-btn">
              Learn More
            </a>
        </div>
        <div className="card-container">
            <img src="/assets/Image41.png" alt="card image" className="card-img" />
            <h1 className="card-title">Software Testing</h1>
            <p className="card-description">description</p>
            <a href="#" className="card-btn">
              Learn More
            </a>
        </div>
        <div className="card-container">
            <img src="/assets/Image44.png" alt="card image" className="card-img" />
            <h1 className="card-title">Mobile Development</h1>
            <p className="card-description">description</p>
            <a href="#" className="card-btn">
              Learn More
            </a>
        </div>
        </div>
        <div className='card-inner'>
        <div className="card-container">
            <img src="/assets/Image 45.png" alt="card image" className="card-img" />
            <h1 className="card-title">Business Outsource</h1>
            <p className="card-description">description</p>
            <a href="#" className="card-btn">
              Learn More
            </a>
        </div>
        <div className="card-container">
            <img src="/assets/Image 46.png" alt="card image" className="card-img" />
            <h1 className="card-title">Business Promotion</h1>
            <p className="card-description">description</p>
            <a href="#" className="card-btn">
              Learn More
            </a>
        </div>
        <div className="card-container">
            <img src="/assets/Image 47.png" alt="card image" className="card-img" />
            <h1 className="card-title">Other Services</h1>
            <p className="card-description">description</p>
            <a href="#" className="card-btn">
              Learn More
            </a>
        </div>
        </div>
        </div>   
    )
}

export default ServicesCard