// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import { Card } from "./CompCard";
// import { Products } from "../api/Products";

// export function InitialPage() {
//     const [objProducts, setObjProducts] = useState([]);

//     useEffect(() => {
//         Products.getProducts().then(result => {
//             setObjProducts(result.items);
//         }, function (error) {
//             setObjProducts(error);
//         })
//     }, []);

//     return (
//         <>
//             <div className="App">
//                 <main className="App-header">
//                     <h4>Amazing redux store</h4>
//                     <div className="cardContainer">
//                         {objProducts.map(list => (
//                             // <p>{list.name}</p>
//                             <Card
//                                 id={list.id}
//                                 image={list.image}
//                                 name={list.name}
//                                 price={list.price}
//                             />
//                         ))}
//                     </div>
//                 </main>
//             </div>
//         </>
//     );
// }


/////////////////// Código original até aqui


// export function InitialPage() {
//     const [name, setName] = useState('');

//     useEffect(() => {
//         Products.getProductById(1).then(result => {
//             setName(result.name);
//         }, function (error) {
//             setName(error);
//         })
//       });

//     return (
//         <>
//             <div className="App">
//                 <main className="App-header">
//                     <h4>Amazing redux store</h4>
//                     <Card name={name} />
//                 </main>
//             </div>
//         </>
//     );
// }


// export class InitialPage extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'xpto',
//         };
//     }

//     //não faço ideia porque preciso usar o método componentWillMount para resolver essa promise 
//     componentWillMount() {
//         Products.getProductById(1).then(result => {
//             this.setState({ name: result.name });
//         }, function (error) {
//             this.setState({ name: error });
//         });
//     }

//     render() {
//         return (
//             <>
//                 <div className="App">
//                     <main className="App-header">
//                         <h4>Amazing redux store</h4>
//                         <Card name = {this.state.name} />
//                         {/* <Card name = "teste" /> */}
//                         {/* <p>{this.state.name}</p> */}

//                     </main>
//                 </div>
//             </>
//         )
//     }
// }






// Products.getProductById(2).then((obj) =>{
//     let objeto = obj.name;
//     alert("teste2: " + objeto);
// })

// export function InitialPage() {

//     return (
//         <>
//             <div className="App">
//                 <main className="App-header">
//                     <h4>Amazing redux store</h4>

//                     {/* <Card obj={objeto} /> */}

//                 </main>
//             </div>
//         </>
//     )
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

    // let objeto = await Products.getProductById(1);

    // alert(objeto.name);

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
// }