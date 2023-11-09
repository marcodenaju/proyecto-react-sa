import { useState, useEffect } from "react";
// import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
// import Skeleton from '@mui/material/Skeleton';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    // const productosFiltrados = products.filter(
    //   (product) => product.category === categoryName
    // );

    // const tarea = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(categoryName ? productosFiltrados : products);
    //   }, 1000);
    // });

    // tarea.then((res) => setItems(res)).catch((error) => console.log(error));

    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
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
