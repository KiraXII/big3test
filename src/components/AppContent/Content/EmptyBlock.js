import s from "./Content.module.scss";

const EmptyBlock = ({blockImg, title}) => {
    return (
        <div className={s.blockWrapper}>
            <div className={s.block}>
                <div>
                    <img src={blockImg}/>
                </div>
                <div>
                    <div className={s.title}>Empty here</div>
                    <div className={s.subTitle}>Add new {title} to continue</div>
                </div>
            </div>
        </div>
    )
}

export default EmptyBlock