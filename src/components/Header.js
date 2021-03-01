import React from "react"
import { Link } from "react-router-dom"
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.navItemsIterate = this.navItemsIterate.bind(this)
        this.onHoverEnter = this.onHoverEnter.bind(this)
        this.onHoverLeave = this.onHoverLeave.bind(this)
        this.state = {
            headerItems: ["home", "services", "portfolio", "pricing", "about", "team", "contact"]
        }
    }
    componentDidMount() {
        var listUnderline = document.getElementsByClassName("underline")
        for (var i = 0; i < listUnderline.length; i++)
            listUnderline[i].style.visibility = "hidden"
    }
    render() {
        return (
            <div className="headpanel">
                <div className="navbar navbar-expand-md navbar-light container">
                    <img className="navbar-brand" src={this.props.logo} alt="logo" />
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {this.navItemsIterate()}
                    </div>
                </div>
            </div>
        )
    }
    onHoverEnter = (e) => {
        e.preventDefault()
        e.preventDefault()
        if (e.target.tagName === 'P') {
            console.log("Enter left " + e.target.innerHTML)
            return
        }

        else {
            if (e.target.childNodes[1])
                e.target.childNodes[1].style.visibility = "visible"
        }
    }
    onHoverLeave = (e) => {
        e.preventDefault()
        if (e.target.tagName === 'P') {
            console.log("Mouse left " + e.target.innerHTML)
            return
        }

        else {
            if (e.target.childNodes[1])
                e.target.childNodes[1].style.visibility = "hidden"
        }
    }
    navItemsIterate = () => {
        var headerItems = this.state.headerItems
        var headerUI = headerItems.map((value, index) => {
            return (
                <li className="nav-item active px-2"
                    onMouseEnter={this.onHoverEnter}
                    onMouseLeave={this.onHoverLeave}
                    key={index}
                >

                    <Link to={value} className="nav-item navbar-brand">
                        {value}
                    </Link>
                    <p className="underline" style={{ visibility: "hidden" }}></p>
                </li>
            )
        })
        return (
            <ul className="navbar-nav mx-md-auto">
                {headerUI}
            </ul>
        )
    }
}
export default Header;