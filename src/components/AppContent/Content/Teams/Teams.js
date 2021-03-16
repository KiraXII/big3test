import s from "../Content.module.scss"
import emptyTeam from "../../../../assets/images/image-empty-team.png";

const Teams = () => {
    return (
        <div className={s.content}>
            <div className={s.contentWrapper}>
                <div className={s.inputs}>
                    <div>
                        <input type="text" name="search" placeholder="Search..."/>
                    </div>
                    <div>
                        <button>Add +</button>
                    </div>
                </div>
                <div className={s.blockWrapper}>
                    <div className={s.block}>
                        <div>
                            <img src={emptyTeam}/>
                        </div>
                        <div>
                            <div className={s.title}>Empty here</div>
                            <div className={s.subTitle}>Add new teams to continue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams;