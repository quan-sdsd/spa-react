import NavMenuItem from "./nav-menu-item";
import {NavigationItem} from "../model/navigation-item";
import {HiOutlineBars3} from "react-icons/hi2";
import "../css/navigation-bar-drawer-mode.css"
import {useEffect, useRef, useState} from "react";

export default function NavigationBarDrawerMode(props) {
    const {navigations} = props;
    const [isOpen, toggle] = useState(false);
    const insideDrawer = useRef(false);

    useEffect(() => {
        const closeDrawer = function(e) {
            if(!insideDrawer.current) {
                toggle(false);
            }
        }
        if(isOpen) {
            window.document.documentElement.addEventListener('click', closeDrawer);
        } else {
            window.document.documentElement.removeEventListener('click', closeDrawer);
        }
        return () => {
            window.document.documentElement.removeEventListener('click', closeDrawer);
        };
    }, [isOpen]);

    for (const i in navigations) {
        navigations[i]['items'] = undefined;
    }

    const openDrawer = function(e) {
        e.stopPropagation();
        toggle(!isOpen);
    }


    return (
        <div className="navigation-drawer-container top-navigation-menu">
            <HiOutlineBars3 className="navigation-drawer-icon" onClick={openDrawer}/>
            <div className={"navigation-drawer " + (isOpen ? "visible" : "hidden")}
                 onMouseEnter={()=> insideDrawer.current = true}
                 onMouseLeave={()=> insideDrawer.current = false}
            >
                {navigations.map((item, index) =>
                    <NavMenuItem {...item} />
                )}
            </div>
        </div>
    )
}

NavigationBarDrawerMode.defaultProps = {
    navigations: [
        new NavigationItem("Home", "/home"),
        new NavigationItem("Services", "/service"),
        new NavigationItem("Products", "/product"),
        new NavigationItem("About us", "/about"),
        new NavigationItem("Contact us", "/contact")
    ],
}