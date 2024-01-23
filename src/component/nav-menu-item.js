import React, {useState} from 'react'
export default function NavMenuItem(props) {
    const {name, url, items} = props;
    const [isShowPopup, showPopup] = useState(false);
    const popupMenu = function (){
        if(!items){
            return <></>
        }
        return (
            <div className={"sub-navigation-menu-item " + (isShowPopup ? "visible" : "hidden")}>
                {items.map(item =>
                    <div className="navigation-group-item">
                        <span className="group-header">{item.groupName}</span>
                        {item.items.map(subItem =>
                            <NavMenuItem {...subItem}/>
                        )}
                    </div>
                )}
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className="navigation-item-container"
                 onMouseEnter={
                     ()=> {
                         showPopup(true)
                     }}
                 onMouseLeave={
                     ()=> {
                         showPopup(false)
                     }}
            >
                <a className="navigation-path" href={url}>
                    <span className="navigation-header">{name}</span>
                </a>
                {popupMenu()}
            </div>
        </React.Fragment>
    )
}