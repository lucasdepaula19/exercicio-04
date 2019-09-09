import React, { useState, useEffect } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { addProduct } from "../actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ todoApp }) => ({ todos: todoApp })

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
                    <button className="btn btn-secondary btn1" onClick={(e) => prod.addProduct(obj)}>Add to cart</button>
                    <a href="/prod" className="btn btn-secondary btn1">Cart View ({prod.total})</a>
                    <a href="/" className="btn btn-secondary btn1">Home</a>
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

export const ProductsItem = connect(
    mapStateToProps,
    { addProduct }
)(ProductsItemComponent)