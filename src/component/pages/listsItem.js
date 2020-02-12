import React from 'react';

// items 
// import Image from '../../Assets/images/logo.jpg';
import CardModal from './cardModal';
import items from '../../Assets/files/items.json';

// build a card 

function CardsItem() {

  let itemsList = items.results.map((item) =>
    <div key={item.id} className="list-group-item list-unstyled list-modal-hover" data-toggle="modal" data-target={'#' + item.title}>

      <li className="">{item.title}</li>

      <CardModal
        title={item.title}
        id={item.id}
        englishName={item.englishName}
        director={item.director}
        award={item.award}
        runtime={item.runtime}
        reating={item.rating} />

    </div>
  )

  return (
    <div className="container cardbox">
      <ul className="list-group w-100">
        {itemsList}
      </ul>


    </div>
  );
}

export default CardsItem;
