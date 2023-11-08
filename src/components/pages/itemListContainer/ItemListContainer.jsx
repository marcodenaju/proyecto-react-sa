import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
// import Skeleton from '@mui/material/Skeleton';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);



  return (
    <>
      {items.length === 0 ? (
        <PacmanLoader size={40} color="black" />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};



export default ItemListContainer;
