import React from "react"
import s from "./Team.module.scss"
import {Link} from "react-router-dom"
import teamLogo from "../../../../assets/images/portland-1.png"

const TeamCard = () => {
    return (
        //
                <div className={s.wrapper}>
                    <div className={s.imgWrapper}>
                        <img src={teamLogo} className={s.image}/>
                    </div>
                    <div className={s.cardInfo}>
                        <Link to={"/teams/portland-trail-blazers"} className={s.link}>
                            <h2>Portland trail blazers</h2>
                        </Link>
                        <span>Year of foundation: 1970</span>
                    </div>
                </div>
    )
}

export default TeamCard