import React from 'react';

// items 
// import Image from '../../Assets/images/logo.jpg';
import CardModal from './cardModal';
import items from '../../Assets/files/items.json';
import MoviePoster from './moviePoster';

// build a card 

function CardsItem() {

  let itemsList = items.results.map((item) =>

    <div key={item.id} className="my-modal card mx-auto my-3" style={{ width: '250px' }} data-toggle="modal" data-target={'#' + item.title} data-keyboard="false" data-backdrop="static">
      <MoviePoster id={item.id} />

      <div data-keyboard="false" data-backdrop="static">
        <CardModal
          title={item.title}
          id={item.id}
          englishName={item.englishName}
          director={item.director}
          award={item.award}
          runtime={item.runtime}
          rating={item.rating}
          data-keyboard="false" data-backdrop="static" />
      </div>

    </div >

  )

  return (
    <div className="container cardbox ">


      {itemsList}

    </div>
  );
}

export default CardsItem;
