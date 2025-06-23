import React, { useEffect, useState } from 'react';
import "./Nav.scss"
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = (props) => {
    const [isShow, setIsShow] = useState(true);
    let localtion = useLocation();
    console.log(">>>check localtion: ", localtion)

    useEffect(() => {
        if (localtion.pathname === '/login') {
            setIsShow(false)
        }
    }, []);


    return (
        <>
            {isShow === true &&
                <div className="topnav">
                    <NavLink to="/" exact >Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/Projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            }

        </>
    );
}

export default Nav;