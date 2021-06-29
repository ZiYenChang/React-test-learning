import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <section className='subs'>
                <p className='subscription-heading'>Subscribe to receive the latest news.</p>
                <p className='subscription-text'>You can unsubscribe at any time.</p>
            </section>
            <small className='web-rights'>copyright © 2021</small>
        </div>
    )
}

export default Footer
