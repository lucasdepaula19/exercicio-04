import React from "react";
import '../App.css';

export const Card = (obj) => (
    <>
        <div class="card cardConfig">
            <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{obj.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    </>
)