import React from "react";
import '../App.css';
import { Card } from "./CompCard";
import { Products } from "../api/Products";

// Products.getProductById(2).then((obj) =>{
//     let objeto = obj.name;
//     alert("teste2: " + objeto);
// })


export function InitialPage() {
    let objeto = Products.getProductById(2).then((obj) => {
        // alert("teste2: " + obj.name);
        return obj;
    })

    return (
        <>
            <div className="App">
                <main className="App-header">
                    <h4>Amazing redux store</h4>
              

                        <Card objeto />
              
                    


                </main>
            </div>
        </>
    )
}