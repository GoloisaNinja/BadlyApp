import React from 'react'

export default class BadIdea extends React.Component {

    render() {

        return (
            <div className="container__badDiv">
                    <h2 className="container__idea">BAD <span className="text-transform">Business Idea</span><span className="text-transform__idea"> by BADLY</span></h2>
                    <h5>{this.props.title}</h5>
                    <p className="text-transform-margin__idea">{this.props.idea}</p>
                    <h6 className="text-transform_tags">Idea Tags (possible matches)</h6>
                    <p className="text-transform-margin__tags">{this.props.tags}</p>
                    <button 
                        className="idea__button"
                        onClick={this.props.removeIdea}
                        >Clear Idea</button>
            </div>
            )

    }
    

}
