import { MdSearch  } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function SiteTopBar(props) {
    const {phone} = props;
    return (
        <div className="site-top-bar-container" >
            <div className="site-top-bar">
                <img className="logo" src={require('../resource/logo.png')} alt="logo"/>
                <div className="top-bar-right-box">
                    <div className="search-box">
                        <input className="search-area" type="text" placeholder="Tìm kiếm"/>
                        <MdSearch className="right-icon" />
                    </div>
                    <div className="contract-info-detail">
                        <div>
                            <BsFillTelephoneFill className="left-icon" />
                            <span>Liên hệ để được tư vấn trực tiếp</span>
                        </div>
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}