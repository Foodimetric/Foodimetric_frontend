import React from 'react';
import './component.css'


const Newsletter = () => {
    return (
        <section className="news">
            <div className="news-container">
                <div className="left">
                    <h3>Signup to our Newsletter</h3>
                    <p>Stay up to date to our latest news, announcement and articles</p>
                </div>
                <div className="right">
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" id="submit_button">Subscribe</button>
                </form>
                </div>
            </div>
        </section>
    );
}
 
export default Newsletter;