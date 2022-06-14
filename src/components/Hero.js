import React from "react";

export default function Hero(){
    return(
        <div className="hero">
            <img src="./images/image-hero-mobile.png" className="img--hero-mob" alt="Tech bro"/>
            <div className="details">
               <h1>Make<br></br>remote work</h1>
               <h1 className="make">Make remote work</h1>
               <p> Get your team in sync, no matter your location. 
                   Streamline processes, 
                   create team rituals, and watch productivity soar.
                </p>
                <button className="btn--learn">Learn more</button>

                <div className="watermarks">
                    <img src="./images/client-databiz.svg" alt="databiz"/>
                    <img src="./images/client-audiophile.svg" alt="audiophile"/>
                    <img src="./images/client-meet.svg" alt="meet"/>
                    <img src="./images/client-maker.svg" alt="maker"/>
                </div>
            </div>
            <img src="./images/image-hero-desktop.png" className="img--hero" alt="Tech bro"/>
        </div>
        
    )
}
