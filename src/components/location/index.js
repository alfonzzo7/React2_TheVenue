import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="Location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.3216534337066!2d-3.6739387851000824!3d40.423875979364226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a559a82bfd%3A0x824fe75010a905e3!2sWiZink+Center!5e0!3m2!1ses!2ses!4v1544780144858" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;