import React from 'react'
import {useEffect} from "react";
import SiteTopBar from "./site-top-bar";
import NavigationMenuBar from "./navigation-menu-bar";
import NavigationBarDrawerMode from "./navigation-bar-drawer-mode";

export default function NavigationBar() {
    useEffect(() => {
        window.document.documentElement.addEventListener("scroll", (e)=> {
            const pos =  window.scrollY;
            if(pos > 57) {

            }
        });
    }, []);

    return(
        <React.Fragment>
            <SiteTopBar phone="0923123123"/>
            <NavigationMenuBar/>
            <NavigationBarDrawerMode/>
        </React.Fragment>
    )
}