import React from 'react'
class Slide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }
    render() {
        return (
            <div className="slide row">
                <div className="slide-data col">
                    <p className="slide-title">{this.props.title}</p>
                    <p className="slide-desc">{this.props.desc}</p>
                </div>
                <img className="d-block col" style={{ width: this.state.width / 10 }} src={this.props.img} alt="First slide" />
            </div>
        )
    }
}
export default Slide