import { useState, useEffect } from "react"
import Counter from "./Counter";

const CounterContainer = ({stock}) => {
    const [ contador , setContador ] = useState(1);

    const sumar = () => {
    if (contador < stock) {
        setContador(contador + 1);
    } else {
        alert("cantidad máxima");
    };
};

const restar = () => {
if (contador > 1) {
    setContador(contador - 1);
}
};

console.log("Me monté o actualicé")

useEffect( ()=>{
    //petición a un servidor
    console.log("se realizó una petición")
} , [])



    return <Counter sumar={sumar} restar={restar} contador={contador} />
};

export default CounterContainer;