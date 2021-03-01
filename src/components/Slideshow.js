import React from 'react'
import Slide from './Slide'
class Slideshow extends React.Component {
    constructor(props) {
        super(props)
        this.slideRender = this.slideRender.bind(this)
    }
    slideRender = () => {
        var slides = this.props.data.map((value, key) => {
            var active = "carousel-item"
            if (key === 0)
                active = "carousel-item active"
            return (
                <div className={active}>
                    <Slide img={value.image} title={value.title} desc={value.description} />
                </div>
            )
        })
        return (
            <div className="carousel-inner">
                {slides}
            </div>
        )
    }
    render() {
        return (
            <div className="bg-primary slideshow bt-5 mb-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    {this.slideRender()}
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default Slideshow