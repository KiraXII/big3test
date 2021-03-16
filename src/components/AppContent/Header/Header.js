import logo from "../../../assets/images/logo.png";
import defaultProfile from "../../../assets/images/default-profile.png";
import s from "./Header.module.scss"
import menu from "../../../assets/images/burg-menu.png"


const Header = ({showSidebar}) => {
    return(
        <div className={s.headerWrapper}>
            <div className={s.headerShadow}>
                <div className={s.burgMenu}>
                    <img src={menu} onClick={showSidebar} />
                </div>
                <div className={s.logo}><img src={logo}/></div>
                <div className={s.user}>
                    <span>User Name</span>
                    <img src={defaultProfile}/>
                </div>
            </div>
        </div>
    )
}

export default Header;
