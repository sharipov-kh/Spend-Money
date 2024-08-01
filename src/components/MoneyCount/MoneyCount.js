import React from "react";
import { useSelector } from "react-redux";

const MoneyCount = () => {
  const { total } = useSelector((store) => store.receipt);

  return (
    <div className="money__count">
      <p className="money__count-text">
        ${" "}
        {`${100000000000 - total}`.replace(
          /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
          ","
        )}
      </p>
    </div>
  );
};

export default MoneyCount;
