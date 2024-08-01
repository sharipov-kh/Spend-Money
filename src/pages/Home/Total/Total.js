import { useSelector } from "react-redux";

const Total = () => {
  const { total, data } = useSelector((store) => store.receipt);
  return (
    <div
      className="Total"
      style={{ display: data.length > 0 ? "block" : "none" }}
    >
      <div className="title">
        <h1>Your Receipt</h1>
      </div>
      <ul>
        {data.map((item) => (
          <li>
            <p>{item.name}</p>
            <p>x{item.count}</p>
            <p className="Total-price-item">${item.count * item.price}</p>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <h3>TOTAL</h3>
        <p>${total}</p>
      </div>
    </div>
  );
};

export default Total;
