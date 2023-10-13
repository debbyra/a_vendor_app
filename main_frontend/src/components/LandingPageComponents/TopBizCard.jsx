const TopBizCard = (props) => {
    return (
        <div className="top-biz-card">
            <img src={props.image} alt="" />
            <p className="name">{props.name}</p>
        </div>
    )
}

export default TopBizCard;