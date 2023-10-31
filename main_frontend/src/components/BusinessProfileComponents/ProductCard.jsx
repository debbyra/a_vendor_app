const ProductCard = (props) => {
  return (
    <div className="pdt-card top-biz-card">
      <img src={props.image} alt="" />
      <p className="name">{props.name}</p>
    </div>
  );
};

export default ProductCard;