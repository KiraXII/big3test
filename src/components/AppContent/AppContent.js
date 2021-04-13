import s from "./AppContent.module.scss"
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import React, {useState} from "react";



let AppContent = () => {

    const [isShowSidebar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!isShowSidebar)

    return (
        <div className={s.container}>
            <Header toggleSidebar={toggleSidebar} id="header"/>
            <Sidebar isShowSidebar={isShowSidebar} toggleSidebar={toggleSidebar} id="sidebar"/>
            <Content id="content"/>
        </div>
    )
}

export default AppContent;