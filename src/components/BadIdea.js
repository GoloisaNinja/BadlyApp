import React from 'react'

export default class BadIdea extends React.Component {

    render() {

        return (
            <div>
                <div className="container">
                    <h2 className="container__idea">BAD <span className="text-transform">Business Idea</span><span className="text-transform__idea"> by BADLY</span></h2>
                    <h5>{this.props.title}</h5>
                    <p className="text-transform-margin__idea">{this.props.idea}</p>
                    <button 
                        className="idea__button"
                        onClick={this.props.removeIdea}
                        >Clear Idea</button>
                </div>
            </div>
            )

    }
    

}
