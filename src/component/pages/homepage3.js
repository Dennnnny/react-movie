import React, { useState } from 'react';

// items 
import CardsItem from './cardsItem';
import ListsItem from './listsItem';
// build a cardBox

function HomePage3() {

  const [currentMode, setCurrentMode] = useState(CardsItem);

  return (

    <div className=" mt-5">
      <div className="container">
        <h1 className="text-center font-weight-bold"> The Oscars 2020 | Academy Award </h1>
        <div className="text-right m-3">

          <button className="btn btn-secondary mr-1" onClick={() => setCurrentMode(ListsItem)}><i className="fa fa-bars"></i></button>
          <button className="btn btn-secondary" onClick={() => setCurrentMode(CardsItem)}><i className="fa fa-th"></i></button>

        </div>
      </div>
      <div>
        {currentMode}
      </div>

    </div>

  );
}

export default HomePage3;
