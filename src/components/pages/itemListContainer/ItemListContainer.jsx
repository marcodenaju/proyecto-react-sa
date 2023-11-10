import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import PacmanLoader from "react-spinners/PacmanLoader";
import Skeleton from "@mui/material/Skeleton";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";
import { Button } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // const rellenarDB = ()=>{

  //   const prodCollection = collection ( db, "products")

  //   products.forEach( (elemento)=>{
  //     addDoc(prodCollection, elemento)

  //   })

  // }

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

      let arrayfiltrado = newArray.filter((elemento) => elemento.stock > 0);

      setItems(arrayfiltrado);
    });
  }, [categoryName]);

  //   return (
  //     <>
  //       {items.length === 0 ? (
  //         <PacmanLoader size={40} color="black" />
  //       ) : (
  //         <ItemList items={items} />
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      {/* <Button variant="contained" onClick={rellenarDB}>Rellenar</Button> */}
      {items.length === 0 ? (
        <div
          style={{
            display: "flex",
            gap: 30,
            marginTop: "50px",
            marginLeft: "30px",
            marginRight: "50px",
          }}
        >
          <div>
            <Skeleton variant="rectangular" width={320} height={350} />
            <Skeleton variant="text" width={320} height={100} />
            <Skeleton variant="text" width={320} height={100} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={320} height={350} />
            <Skeleton variant="text" width={320} height={100} />
            <Skeleton variant="text" width={320} height={100} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={320} height={350} />
            <Skeleton variant="text" width={320} height={100} />
            <Skeleton variant="text" width={320} height={100} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={320} height={350} />
            <Skeleton variant="text" width={320} height={100} />
            <Skeleton variant="text" width={320} height={100} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
