// import React from "react";
import React, { useState, useEffect } from 'react';
import '../App.css';
import { Card } from "./CompCard";
import { Products } from "../api/Products";

// Products.getProductById(2).then((obj) =>{
//     let objeto = obj.name;
//     alert("teste2: " + objeto);
// })


export function InitialPage() {
    //let objeto = 'gggg';

    // function teste(valor1){
    //    return objeto = valor1;
    // }

    // Products.getProductById(2).then((obj) => {
    //     //  alert("teste2: " + obj.name);
    //     // objeto = obj.name;
    //     teste(obj);
    // })

    // alert("teste2: " + objeto);

    let objeto = await Products.getProductById(1);

    alert(objeto.name);

    return (
        <>
            <div className="App">
                <main className="App-header">
                    <h4>Amazing redux store</h4>


                    {/* <Card obj={objeto} /> */}



                </main>
            </div>
        </>
    )

    // const [data, setData] = useState({ items: [] });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await Products.getProducts();
    //     setData(result.data);
    //     };
    //     fetchData();
    // }, []);

    // return (
    //   <ul>
    //     {data.items.map(item => (
    //       <li key={item.name}>
    //         <a href={item.image}>{item.description}</a>
    //       </li>
    //     ))}
    //   </ul>
    // );
}