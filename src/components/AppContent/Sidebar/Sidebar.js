import s from "./Sidebar.module.scss";
import teamLogo from "../../../assets/images/team-logo.png";
import playerLogo from "../../../assets/images/player-logo.png";
import signLogo from "../../../assets/images/signout.png";
import defaultProfile from "../../../assets/images/default-profile.png";
import {NavLink} from "react-router-dom";


const Sidebar = ({isShowSidebar, toggleSidebar}) => {
    return (
        <nav className={isShowSidebar ? `${s.sidebarWrapper} ${s.active}` : `${s.sidebarWrapper}`}>
            <div className={s.userWrapper}>
                <div className={s.user}>
                    <img src={defaultProfile}/>
                    <span>User Name</span>
                </div>
            </div>
            <div className={s.nav}>
                <div>
                    <NavLink to="/teams" className={s.sidebarItem} onClick={toggleSidebar}><img src={teamLogo}/>Teams</NavLink>
                    <NavLink to="/players" className={s.sidebarItem} onClick={toggleSidebar}><img src={playerLogo}/>Players</NavLink>
                </div>
                <div className={s.sidebarItem}><img src={signLogo}/>Sign out</div>
            </div>
        </nav>
    )
}

export default Sidebar;