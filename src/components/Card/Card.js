import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, removeProduct } from "../../redux/reducers/receipt";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.receipt);
  return (
    <div className="products__card">
      <img src={item.image} alt="" className="products__card-img" />
      <h3 className="products__card-title">{item.name}</h3>
      <p className="products__card-price">${item.price}</p>
      <div className="products__card-bottom">
        <button
          onClick={() => dispatch(removeProduct(item))}
          disabled={!data.some((el) => el.id === item.id)}
          className="btn products__card-sale"
        >
          Продавать
        </button>
        <input
          readOnly
          type="number"
          className="products__card-input"
          placeholder={
            data.some((el) => el.id === item.id)
              ? data.find((el) => el.id === item.id).count
              : 0
          }
        />
        <button
          onClick={() => dispatch(addProducts(item))}
          className="btn products__card-buy"
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default Card;
