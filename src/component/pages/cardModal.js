import React from 'react';

// 
import MoviePoster from './moviePoster';

function CardModal(props) {

  const { title, id, englishName, director, award, runtime, rating, } = props;

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRef.current);
  //   return () => observer.unobserve(domRef.current);
  // }, []);

  let awardList = []

  if (typeof (props.award) === "object") {
    awardList = props.award.map((awards) => <span className="mx-1 badge badge-warning">{awards}</span>)
  } else {
    awardList = <span className="mx-1 badge badge-warning">{props.award}</span>
  }

  function handleShowup() {
    setVisible(v => !v);
  }


  return (
    <div>
      <div className="modal fade" id={props.title} tabIndex="-1" >
        <div className="modal-dialog modal-dialog-scrollable" role="document" config="{backdrop: false, keyboard: false}">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title text-capitalize" id="">{props.title}</h5>

                <div className=" text-capitalize">{props.englishName}</div>

              </div>

              <button type="button" className="close" data-dismiss="modal" >
                <span aria-hidden="true">&times;</span>
              </button>

            </div>
            <div className="modal-body ">
              <div className="row">
                <div className="col-md-6"><MoviePoster id={props.id} /></div>
                <div className="col-md-6 ml-auto">
                  <h6>分類</h6>
                  <div>{props.rating}</div>
                  <hr />
                  <h6>導演</h6>
                  <div>{props.director}</div>
                  <hr />
                  <h6>片長</h6>
                  <div>{props.runtime} mins</div>
                  <hr />
                  <h6>得獎</h6>
                  <div>{awardList}</div>
                </div>
              </div>
              <hr />
              <div>
                <h6>簡介:</h6>
                <p>lorem123125klrsejglkrjgrlske</p>
              </div>
            </div>
          </div>

        </div>


      </div>



    </div>
  );
}

export default CardModal;
