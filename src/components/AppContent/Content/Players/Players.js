import emptyPlayers from "../../../../assets/images/image-empty-players.png";
import s from "../Content.module.scss"
import EmptyBlock from "../EmptyBlock";
import Search from "../../../../common/Search";

const Players = () => {
    return (
        <div className={s.content}>
            <div className={s.contentWrapper}>
                <div className={s.inputs}>
                    <div>
                        <Search/>
                        <input type="selector" name="selector" placeholder="Select..."/>
                    </div>
                    <div>
                        <button>Add +</button>
                    </div>
                </div>
                <EmptyBlock blockImg={emptyPlayers} title={"players"}/>
            </div>
        </div>
    )
}

export default Players;