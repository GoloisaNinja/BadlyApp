import React from 'react'

export default class Testimonials extends React.Component {
    state = {
        testimonials: []
    }

    testArr = [
        '"Badly ruined my life, my marriage and my dog walks funny for no reason. I love you Badly!" - Spoony Fairfax, VA',
        '"I reported Badly to the Better Business Bureau, but the BBB said Badly does not even qualify as better business. That is how bad they are!" - Greg Battle Creek, MI',
        '"I heard about Badly on a podcast dedicated to the worst things ever created. It ranked 5th after the Friday song, which seems appropriate." - Tam Sterling, ID',
        '"Initially my family had high hopes for the business we started using Badly. Those hopes were utterly dashed after massive failure and catastrophic money loss." - Beth Gary, IN',
        '"No words. You just have to try it. To understand how bad Badly is, you have to experience it first hand." - Albert Carthage, PA',
        '"If it sounds too good to be bad, it is probably not Badly." - Badly CEO',
        '"Look, if you want it done badly, there is no one better than Badly." - Anonymous',
        '"I always wanted to start my own business and be successful. Badly helped me do precisely none of that." - Sara Oakland, CA',
        '"Failure should not be an indicator of failing, but rather just being good at sucking." - Aristotle, Athens',
        '"Badly turned my life Upside Down." - Bob Hawkins, IN',
        '"2020 was shaping up to be the worst year for my legitmate business. Thankfully, Badly gave me a deplorable business idea, and now I\'m declaring bankruptcy and probably going to jail!" - Diane Cicero, NY',
        '"It was this or Doterra...should\'ve gone with Doterra" - Maggie Aspen, CO',
        '"Badly matched me with a perfect idea for me. The idea had real promise until the cops shut it all down. Appeal pending." - Gavin Arckham, TN',
        '"I can\'t say enough about Badly. I\'m serious. Like I\'m writing a book about my horrific experiences and a movie studio has already bought the rights. So I mean in a round-about way, Badly has been good for me. But only because it was so bad." - Terrance Gibson, KY'
    ]

    handleTestimonials() {
        let newTestArr = []
        do {
            let randNum = Math.floor(Math.random() * this.testArr.length)
            let test = this.testArr[randNum]
            if (!newTestArr.includes(test)) {
                newTestArr.push(test)
            }
        } while (newTestArr.length < 3);
        return newTestArr
    }

    componentDidMount() {
        const pageTests = this.handleTestimonials()
        this.setState(() => ({ testimonials: pageTests }))
    }

    render() {
        return (
            <div>
                <div className="container__testimonial">
                    <p className="container__testimonial-ptest1">{this.state.testimonials[0]}</p>
                </div>
                <div className="container__testimonial">
                    <p className="container__testimonial-ptest2">{this.state.testimonials[1]}</p>
                </div>
                <div className="container__testimonial">
                    <p className="container__testimonial-ptest3">{this.state.testimonials[2]}</p>
                </div>
            </div>
        )
    }
}