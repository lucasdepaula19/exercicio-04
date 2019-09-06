import React, { useState, useEffect } from 'react';
import '../App.css';
import { Products } from "../api/Products";

export function ProductsItem(prod) {
    const [obj, setObj] = useState({});

    useEffect(() => {
        Products.getProductById(prod.match.params.id).then(result => {
            console.log(result);
            setObj(result);
        }, function (error) {
            setObj(error);
        })
    }, []);

    return (
        <>
            <div className="App">
                <main className="App-header prod">
                    <a href="" class="btn btn-secondary btn1">Add to cart</a>
                    <a href="/" class="btn btn-secondary btn1">Home</a>
                    <h1>Product details</h1>
                    <h3><img src={obj.image && require(`../assets/images/${obj.image}`)} class="card-img-top" alt="" /></h3>
                    <h3>id: {prod.match.params.id}</h3>
                    <h3>name: {obj.name}</h3>
                    <h3>price: {obj.price}</h3>
                    <h3>description: {obj.description}</h3>
                </main>
            </div>
        </>
    )
}