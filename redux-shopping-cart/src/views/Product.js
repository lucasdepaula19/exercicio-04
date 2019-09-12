import React, { useState, useEffect } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { addToCart } from "../actions";
import { connect } from 'react-redux';
import { CartCounter } from "../components/CartCounter"
import { Link } from "react-router-dom";

function ProductsItemComponent(prod) {
    const [obj, setObj] = useState({});

    useEffect(() => {
        Products.getProductById(prod.match.params.id).then(result => {
            setObj(result);
        }, function (error) {
            setObj(error);
        })
        // },[]);
    });

    return (
        <>
            <div className="App">
                <main className="App-header prod">
                    <button className="btn btn-secondary btn1" onClick={() => prod.addToCart(obj)}>Add to cart</button>
                    {/* <a href="/prod" className="btn btn-secondary btn1"> <CartCounter /> </a> */}
                    {/* <span className="btn btn-secondary btn1"> <Link to="/cart"> <CartCounter /> </Link> </span> */}
                    {/* <a href="/" className="btn btn-secondary btn1">Home</a> */}
                    {/* <span className="btn btn-secondary btn1"><Link to="/">Home</Link> </span> */}
                    <h1>Product details</h1>
                    <h3><img src={obj.image && require(`../assets/images/${obj.image}`)} className="card-img-top" alt="" /></h3>
                    <div id='desc'>
                        <h3> <strong>id:</strong> {prod.match.params.id}</h3>
                        <h3> <strong>name:</strong> {obj.name}</h3>
                        <h3> <strong>price:</strong> {obj.price}</h3>
                        <h3> <strong>description:</strong> {obj.description}</h3>
                    </div>
                </main>
            </div>
        </>
    )
}

export default connect(
    undefined,
    { addToCart }
)(ProductsItemComponent)