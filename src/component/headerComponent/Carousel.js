import React from 'react';


function Carousel() {
  return (
    <div>
      {/* start of carouselExample */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/810x410" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/820x420" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* end of carouselExample */}


    </div>
  );
}

export default Carousel;
