import StarsReviewComponent from "./StarsReviewComponent";

export default function ReviewsCard ({review}) {
    return (
    <div className="col-3">
      <div className="review-card card my-2 h-100">
        <div className="card-header">{review.name}</div>
        <div className="card-body d-flex flex-column justify-content-between">  
          <div className="card-text">{review.text}</div>
          <div className="card-text">Voto: <StarsReviewComponent vote={review.vote} /></div>
        </div>
      </div>
    </div>
    );
}