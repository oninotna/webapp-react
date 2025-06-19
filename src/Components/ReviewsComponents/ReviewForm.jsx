import { useState, useEffect } from "react";
import axios from "axios";

const defaultReview = {
    userName: "",
    vote: 1,
    text: "",
};

const apiUrl = import.meta.env.VITE_API_MOVIES;

export default function ReviewForm ({movieId, onReviewSent}) {
    const [review, setReview] = useState(defaultReview);

    const sendForm = () => {
        axios.post(`${apiUrl}/${movieId}/reviews`, review)
        .then((res) => {
            if (res.status == 201) setReview(defaultReview);
            onReviewSent();
        })
        .catch((err) => console.error(err.message));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendForm();
    };

    const handleInputChange = (e) => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        });
        
    }


    return (
        <div className="container">
          <h1 className="my-5">Scrivi la tua recensione</h1>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-3">
                    <label htmlFor="userName">Nome</label>
                    <input className="form-control" 
                    type="text"
                    id="userName" 
                    name="userName"
                    value={review.userName}
                    onChange={handleInputChange}/>
                </div>
                <div className="col-3">
                    <label htmlFor="vote">Voto</label>
                    <input className="form-control" 
                    type="number"
                    id="vote"
                    min={1} max={5} 
                    name="vote"
                    value={review.vote}
                    onChange={handleInputChange}/>
                </div>
                <div className="col-6">
                    <label htmlFor="text">Scrivi cosa ne pensi</label>
                    <textarea 
                    className="form-control" 
                    rows={3}
                    id="text"
                    name="text"
                    value={review.text}
                    onChange={handleInputChange}></textarea>
                </div>
                <div className="col-3">
                    <button 
                    className="btn btn-secondary" 
                    type="submit"
                    >
                        Invia recensione
                    </button>
                </div>
            </form>
        </div>
    );
};