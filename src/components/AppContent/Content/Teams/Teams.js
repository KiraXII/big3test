import s from "../Content.module.scss"
import emptyTeam from "../../../../assets/images/image-empty-team.png";
import EmptyBlock from "../EmptyBlock";
import Team from "./Team";
import React from "react";
import Search from "../../../../common/Search";

const Teams = () => {
    const teams = new Array(11)
        .fill("")
        .map((_, i) => (i))
    return (
        <div className={s.content}>
            <div className={s.contentWrapper}>
                <div className={s.inputs}>
                    <Search/>
                    <div>
                        <button>Add +</button>
                    </div>
                </div>
                <div className={s.cardsContainer}>
                    {teams.map(team => (
                        <div className={s.card} key={team}>
                            <Team/>
                        </div>
                    ))}

                </div>
                {/*<EmptyBlock blockImg={emptyTeam} title={"teams"}/>*/}
            </div>
        </div>
    )
}

export default Teams;