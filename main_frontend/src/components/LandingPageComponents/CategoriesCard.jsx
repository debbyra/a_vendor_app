import "../../styles/CategoriesCard.css";

const CategoriesCard = (props) => {
    return (
      <div className="categories-card">
        <a href="#">
          <img src={props.src} alt="" />
          <p>{props.name}</p>
        </a>
      </div>
    );
}

export default CategoriesCard;