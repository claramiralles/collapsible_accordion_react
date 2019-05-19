import React, {Component} from 'react';

class Collapsible extends Component {
    render() {
        const {id, cidState, action, name, tv} = this.props
        return (
            <section className={`collapsible ${cidState === id ?'collapsible--open':''}`} id={id}>
                <div className="collapsible__trigger" onClick={action} data-id={id}>
                    <h2 className="collapsible__title"> {name}</h2>
                </div>
                <div className="collapsible__panel">
                    <p> {tv}</p>
                </div>
            </section>
        )
    }
}

export default Collapsible;
