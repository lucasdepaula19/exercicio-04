import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

export const Card = (obj) => (
    <>
        <div className="card cardConfig">
            <img src={require(`../assets/images/${obj.image}`)} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{obj.name}</h5>
                <p className="card-text">Price: {obj.price}</p>
                {/* <a href={`/prod/${obj.id}`} className="btn btn-primary">View more...</a> */}
                <Link className="btn btn-primary" to={`/prod/${obj.id}`}>View more...</Link>
            </div>
        </div>
    </>
)

// export function Card(obj){
//     return(
//         <>
//         <div className="card cardConfig">
//             <img src="..." className="card-img-top" alt=""/>
//                 <div className="card-body">
//                     <h5 className="card-title">{obj.name}}</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//         </div>
//     </>
//     )
// }