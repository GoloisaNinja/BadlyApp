import React from 'react'

export default class Form extends React.Component {


    handleIdea = (e) => {
        e.preventDefault()
        const details = {
            passion: e.target.elements.passion.value.trim(),
            segment: e.target.elements.segment.value.trim(),
            attribute: e.target.elements.attribute.value.toLowerCase()
        }

        this.props.handleIdea(details)
        this.setState(() => ({ formSubmit: true }))
        e.target.elements.passion.value = ''
        e.target.elements.segment.value = ''
        e.target.elements.attribute.value = 'Immoral Company Profitability'
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleIdea}>
                    <label className="form__label">Enter something you're passionate about, e.g. Scooters</label>
                        <input className="form__input" type="text" name="passion" required />
                    <label className="form__label">Enter your desired business segment, e.g. Finance</label>
                        <input className="form__input" type="text" name="segment" required />
                    <label className="form__label">Finally, select the business attribute you desire most</label>
                        <select className="form__select" name="attribute" required >
                            <option className="form__option">Immoral Company Profitability</option>
                            <option className="form__option">Ill-gotten Financial Gain</option>
                            <option className="form__option">Innovation</option>
                            <option className="form__option">Widespread Panic</option>
                            <option className="form__option">Unhealthy Side-effects</option>
                            <option className="form__option">Making Friends</option>
                            <option className="form__option">Losing Friends</option>
                            <option className="form__option">Creating your own Religion</option>
                            <option className="form__option">Revenge</option>
                            <option className="form__option">Deliciousness</option>
                        </select>
                    <br />
                    <button className="form__button" disabled={this.props.disabled}>
                    Make It Rain
                    </button>
                </form>
                
            </div>
        )
    }
}