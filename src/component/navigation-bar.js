import NavMenuItem from "./nav-menu-item";
import {NavigationItem} from "../model/navigation-item";
export default function NavigationBar(props) {
    const {navigations} = props;
    return (
        <div className="navigation-bar-container">
            <div className="navigation-bar">
                {navigations.map((item, index) =>
                    <NavMenuItem {...item} />
                )}
            </div>
        </div>
    )
}


NavigationBar.defaultProps = {
    navigations: [
        new NavigationItem("Home", "/home"),
        new NavigationItem("Services", "/service", getServiceItem()),
        new NavigationItem("Products", "/product", getProductItem()),
        new NavigationItem("About us", "/about"),
        new NavigationItem("Contact us", "/contact")
    ],
}

function getServiceItem(){
    return [
        {
            groupName: "group1",
            items:[
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
            ],
        },
        {
            groupName: "group2",
            items:[
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
                new NavigationItem("service1", "/service-detail/1"),
            ],
        },
    ]
}

function getProductItem(){
    return [
        {
            groupName: "group1",
            items:[
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
            ],
        },
        {
            groupName: "group2",
            items:[
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
            ],
        },
        {
            groupName: "group3",
            items:[
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
                new NavigationItem("product1", "/product-detail/1"),
            ],
        },
    ]
}


function initData(navigations) {

}