import React from 'react';
import "./landing_page.css"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Liver Diseases</h1>
                <p>Exploring Mortality and Classification of various liver diseases</p>
            </header>
            <main>
                <section className="about-section">
                    <h2>About</h2>
                    <p>Welcome to our website dedicated to understanding liver diseases. We provide valuable insights into the mortality rates and classification of various liver conditions.</p>
                </section>
                <section className="features-section">
                    <h2>What this website do?</h2>
                    <p>As a part of MCA Final year project from Tripura University under the supervision of Dr. Swarup Nandi, This website have been 
                    developed to predict the mortality and classification of various liver diseases user need to sign up before using this feature and
                    has been currently limited to certain user for testing purpose. If you are also eager to test out this model please drop me a mail 
                    at rishav83@pm.me .</p>
                </section>
            </main>
            
        </div>
    );
};

export default LandingPage;
