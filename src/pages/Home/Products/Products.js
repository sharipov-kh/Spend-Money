import React, { useEffect } from "react";
import Card from "../../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fillThings } from "../../../redux/reducers/things";
const Products = () => {
  const { data } = useSelector((store) => store.things);

  const dispatch = useDispatch();

  useEffect(() => {
    axios("http://localhost:8080/things").then(({ data }) =>
      dispatch(fillThings(data))
    );
  }, []);

  return (
    <section className="products">
      <div className="container">
        <div className="products__row">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
