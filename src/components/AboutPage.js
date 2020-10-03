import React from 'react'
import EasterEggModal from './EasterEggModal'
import jarrettPic from '../../public/images/jarrett.png'
import marcPic from '../../public/images/marc.png'
import jackPic from '../../public/images/jack.png'

export default class AboutPage extends React.Component {
    
    state = {
        modalShow: false,
        modalBelongs: ''
    }
    onModalClose = () => {
        this.setState((prevState) => ({ prevState, modalShow: false, modalBelongs: '' }))
    }
    handleMarcModal = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({ prevState, modalShow: true, modalBelongs: 'marc' }))
    }
    handleJarrettModal = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({ prevState, modalShow: true, modalBelongs: 'jarrett' }))
    }

    render() {
        return (
            <div className="container">
            <h2>Who <span className="text-transform">are we?</span></h2>
            <p className="container__ptext">
            It's difficult to imagine a team more perfect to run Badly.  When we first set out to start Badly, we said to each other - 
            "Let's do this...Really, really, Badly." and here we are today.  We don't do anything without thinking of you, the customer, and
            just how Badly can affect your life.
            </p>
            <div className="flex_div">
            <h4 className="flex_img">The <span className="text-transform">Team</span></h4>
            </div>
            <div className="container__team">
                <div className="container__team--pic">
                    <p className="container__team--pic--text">Marc</p>
                    <div className="img_cont">
                    <a href="#" onClick={this.handleMarcModal}><img className="container__team--pic-pic" width="500px" height="500px" src="https://i.imgur.com/4S6Nnx0.png"></img></a>
                    </div>
                    <p className="container__team--pic--text">Leads Badly</p>
                </div>
                <div className="container__team--pic">
                    <p className="container__team--pic--text">Jarrett</p>
                    <div className="img_cont">
                    <a href="#" onClick={this.handleJarrettModal}><img className="container__team--pic-pic" width="500px" height="500px" src="https://i.imgur.com/XukuxtU.png"></img></a>
                    </div>
                    <p className="container__team--pic--text">Does Bad Badly</p>
                </div>
                <div className="container__team--pic">
                    <p className="container__team--pic--text">Jon</p>
                    <div className="img_cont">
                    <img className="container__team--pic-pic" width="500px" height="500px" src="https://i.imgur.com/IrKS8Hz.png"></img>
                    </div>
                    <p className="container__team--pic--text">Bad at Badly</p>
                </div>
            </div>
            <h2>Our <span className="text-transform">culture and story</span></h2>
            <p className="container__ptext">
            Badly was started with one goal.  Change the world, for the worse.  Why do good businesses thrive and bad businesses flounder?
              It's an unfair and heavy burden for bad businesses to bear.  Here at Badly, we are committed to making bad business - YOUR Business.
              It's time for bad business ideas to thrive and prosper.  Too long have the mighty and the intelligent ruled the competitive spaces of
              business!  At Badly - we take your passions and business motivations - and transform those twisted, awful things into a world class 
              bad idea that is sure to set the world on fire (possibly literally).  At Badly, we foster a culture of horrific failure and outrageous badness.  We don't shy
              away from the horrid and obtuse!  We embrace it!  
            </p>
            <h2>The <span className="text-transform">Process</span></h2>
            <p className="container__ptext">
            Here at Badly, we spend countless hours dedicated to cultivating and creating the worst business start-up ideas imaginable.  Nothing is out of bounds. 
            We proudly step to the precipice of stupid and jump headlong into the chasm of ludicrous.  Marc will often spend days on end in one of our many plush
            conference rooms eating fine cuts of beef and musing about just how badly a start-up focused on water de-purification could be.  Jarrett can often be
            found on an obstacle course, literally jumping through hoops to exorcise the mental backflip that is convincing people to build a business around throwing
            car batteries into the world's oceans.  And Jon.  Well, we really don't know what Jon has to offer.  As his bio states, he's bad at Badly.  
            </p>
            <EasterEggModal 
                showModal={this.state.modalShow}
                belongsModal={this.state.modalBelongs}
                modalClose={this.onModalClose}
            />
        </div>
        )
    }

}
