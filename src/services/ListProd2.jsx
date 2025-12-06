import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../util/funciones";
import CardProd2 from "./CardProd2";
const API='https://dummyjson.com/products/category/';

const ListProd2 = () => {
    const [datos, setDatos] = useState([])
    const {categoria,titulo} = useParams()
    const URI = API + categoria
           
          const getDatos = async () =>{
                try {
                  const response = await fetch(URI);
                  const data = await response.json();
                  //console.log(data)
                  setDatos(data.products);
                } catch (error) {
                  console.error(error)
                }
              };
              useEffect(()=>{
                getDatos();
              },[categoria]);

  return (
    <>
        <h4>{titulo}</h4>
        {datos.map((item, index)=>(
            <CardProd2 key={index} item={item} /> 
        ))}
    </>
  )
}

export default ListProd2