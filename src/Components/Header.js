import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu from './svg/bars-solid.svg'
import close from './svg/close.svg'
import Cart from './svg/shopping-cart-solid.svg'
import './Css/Header.css'
export class Header extends Component {
    state = {
        toggle:false
    }
    menuToggle = () => {
    this.setState(
        {
            toggle : !this.state.toggle
        }
    )
    }
    render(){
        const {toggle} = this.state
        return(
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                        <h1>
                            <Link to="/">nike</Link>
                        </h1>
                </div>
                <nav>
                    <ul className = {toggle ? "toggle" :  ""}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Product">Product</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/login">Login / Regisger</Link>
                        </li>
                        <li className = "close"onClick={this.menuToggle}>
                        <img src={close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>0</span>
                        <Link to="/cart">
                        <img src={Cart} alt="" width="20"/>
                        </Link>
                        
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header