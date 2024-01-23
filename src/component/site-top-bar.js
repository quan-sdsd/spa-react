import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function SiteTopBar(props) {
    const {phone, email} = props;
    return (
        <div className="site-top-bar-container" >
            <div className="site-top-bar">
                <img className="logo" src={require('../resource/logo.png')} alt="logo"/>
                <div className="contract-info">
                    <div className="contract-info-detail">
                        <BsFillTelephoneFill className="left-icon" />
                        <span>{phone}</span>
                    </div>
                    <div className="contract-info-detail">
                        <MdEmail className="left-icon" />
                        <span>{email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}