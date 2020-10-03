import React from 'react'
import dogePic from '../../public/images/doge.png'

const PageNotFound = () => (
    <div className="container__flex-footer">
        <div className="container">
        <div>
        <p className="container__team--pic--text">Wow - much empty</p>
        </div>
            <div className="doge">
                <img className="img_doge" src={dogePic}></img>
            </div>
        
        <h2>
            404 <span className="text-transform">Badly Fren</span>
        </h2>
        <p className="container__ptext">
            You've discovered Doge.  Doge doin a surprise.  Doge is happy to see you.
            Doge is real Doge.  
            But Doge not a real page.
            Doge sugges stick to the rivers and lakes that you're used to...
        </p>
        </div>
    </div>
)

export default PageNotFound