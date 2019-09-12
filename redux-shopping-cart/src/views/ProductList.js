import React, { useState, useEffect } from 'react';
import '../App.css';
import { Card } from "./CompCard";
import { Products } from "../api/Products";

export function InitialPage() {
    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {
        Products.getProducts().then(result => {
            setObjProducts(result.items);
        }, function (error) {
            setObjProducts(error);
        })
    }, []);

    return (
        <>
            <div className="App">
                <main className="App-header">
                    <h4>Amazing redux store</h4>
                    <div className="cardContainer">
                        {objProducts.map(list => (
                            // <p>{list.name}</p>
                            <Card
                                id={list.id}
                                image={list.image}
                                name={list.name}
                                price={list.price}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}