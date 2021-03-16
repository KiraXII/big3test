import s from "./AppContent.module.scss"
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import React, {useState} from "react";



let AppContent = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className={s.container}>
            <Header sidebar={sidebar} showSidebar={showSidebar} id="header"/>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar} id="sidebar"/>
            <Content id="content"/>
        </div>
    )
}

export default AppContent;