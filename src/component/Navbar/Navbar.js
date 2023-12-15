import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faLinkedinIn,
    faYoutube
}
    from '@fortawesome/free-brands-svg-icons'
import '../Navbar/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import menu from '../json.api/menu.json'

const Menu = ({item}) =>{
    return(
        <NavLink to={item.link} className={( {isActive} ) => `${isActive ? 'active' : ''}`}>
            {item.label}
        </NavLink>
    )    
}



const Navbar = () =>{
    
    const [subMenuStatus, setSubMenuStatus] = useState(false)
    const subMenuToggle = () => {
        setSubMenuStatus(!subMenuStatus)
    }
    return(
        <>
            <div className="custom-header-wrapper">
                <div className="custom-header-top">
                    <div className="custom-contact-details">
                    <ul>
                        <li>Location: 76/A, Kings road, NY</li>
                        <li>Mail Us: lawyer76@gmail.com</li>

                    </ul>
                    </div>
                    <div className="custom-social-media">
                    <ul>
                        <li>
                            <Link to="#">
                            <FontAwesomeIcon icon={faFacebook}/>
                          </Link>
                        </li>
                        <li>
                            <Link to="#">
                            <FontAwesomeIcon icon={faTwitter}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                            <FontAwesomeIcon icon={faYoutube}/>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="custom-header-bottom">
                <div className="custom-header-left">
                    <div className="custom-header-logo">
                        <Link to="#">
                            <img src="images/Header-logo.webp" alt="Header Logo" />
                        </Link>
                    </div>
                    <div className="custom-header-menu">
                    <ul>  {
                        menu.map((item,index)=>{
                            if(item.isDropDown === true){
                                return(
                                    <li key={index}>
                                        <Menu item={item} />
                                        <span className='child' onClick={subMenuToggle}></span>
                                        {subMenuStatus &&
                                            <ul>
                                                {
                                                    item.dropDownMenu.map((dropdownItem,dropdownIndex)=>{
                                                        return <li key={dropdownIndex}><Menu item={dropdownItem}/></li>
                                                    })
                                                }
                                            </ul>
                                        }
                                    </li>
                                    
                                )

                            }
                            else {
                                return <li key={index}><Menu item={item}/></li>
                            }
                     })
                    }
                    </ul>

                    </div>
                </div>
                    <div className="custom-right-btn">
                    <Link to="#">
                    Make An Appointment
                        </Link>
                        <Link to="#">
                        Call Us: <span> +1 (78) 673 3567</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar