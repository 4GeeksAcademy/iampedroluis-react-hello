import React from "react";
import rigo from '../../img/rigo-baby.jpg'

const Card = ()=>{
    return (

<div class="card m-4" style={{width: '15rem'}}>
  <img src={rigo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>




    )
}

export default Card;