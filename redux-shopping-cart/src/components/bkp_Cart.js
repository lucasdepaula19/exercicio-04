// import React, { lazy, Suspense } from "react";
// import '../App.css';
// import { connect } from "react-redux";
// import { removeProduct } from "../actions";
// import { LoadingProduct } from "./LoadingProduct";

// const ProductCartItem = lazy(() => import("../ProductCartItem"));

// const CartProducts = (props) => (
//     <>
//         <div className="App">
//             <ul>
//                 <Suspense fallback={<LoadingProduct />}>
//                     {props.products.map(product => (
//                         <ProductCartItem key={product.id} product={product} onRemove={props.removeProduct} />
//                     ))}
//                 </Suspense>
//             </ul>
//             <main className="App-header">
//                 <a href="/" className="btn btn-secondary btn1">Home</a>
//                 <h4>Carrinho de produtos </h4>
//                 <p>
//                     <b>Amount:</b> R$
//                         {props.products
//                         .reduce((acc, current) => acc + current.price, 0)
//                         .toFixed(2)}
//                 </p>
//             </main>
//         </div>
//     </>
// );

// const mapStateToProps = ({ CartProducts }) => {
//     return { products: CartProducts.products };
// };

// export default connect(
//     mapStateToProps,
//     { removeProduct }
// )(CartProducts);