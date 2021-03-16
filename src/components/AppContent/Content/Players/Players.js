import emptyPlayers from "../../../../assets/images/image-empty-players.png";
import ReactPaginate from 'react-paginate';
import s from "../Content.module.scss"

const Players = () => {
    return (
        <div className={s.content}>
            <div className={s.contentWrapper}>
                <div className={s.inputs}>
                    <div>
                        <input type="text" name="search" placeholder="Search..."/>
                        <input type="selector" name="selector" placeholder="Select..."/>
                    </div>
                    <div>
                        <button>Add +</button>
                    </div>
                </div>


                <div className={s.blockWrapper}>
                    <div className={s.block}>
                        <div className={s.imgWrapper}>
                            <img src={emptyPlayers}/>
                        </div>
                        <div>
                            <div className={s.title}>Empty here</div>
                            <div className={s.subTitle}>Add new players to continue</div>
                        </div>
                    </div>
                    <div>Pagination</div>
                </div>
            </div>
        </div>
    )
}

export default Players;