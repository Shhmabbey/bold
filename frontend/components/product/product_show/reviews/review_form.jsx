import React, {useEffect, useState} from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createReview, updateReview } from '../../../../actions/review_actions';
import { closeModal } from '../../../../actions/modal_actions';
import 'regenerator-runtime/runtime';
import { fetchProduct } from '../../../../actions/product_actions';

const ReviewForm = () => {

  const pathname = useLocation().pathname
  const id = +pathname.slice(10)
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [helpful, setHelpful] = useState(0);

  const [hover, setHover] = useState(0);

  const sessionUserId = useSelector(state => state.session.id);
  const product = useSelector(state => state.entities.products[id]);
  const errors = useSelector(state => state.errors.reviews);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      rating,
      title,
      body,
      reviewer_id: sessionUserId,
      product_id: id,
      helpful
    }
    await dispatch(createReview(review));
    await dispatch(closeModal());
  }

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  const renderErrors = () => {
    return (
      <ul>
        {errors?.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  };


  const getDate = () =>{
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  }

  return (
      <div className="Review_Form">
        <form onSubmit={handleSubmit} className="Review_Form_Box">
          <div role="button" tabIndex="0" className="Close_Button" onClick={() => closeModal()}>
            ×
          </div>
          <div className="Review_Form_Header">
            <div className="Review_Form_Header_Content">
              <h1>Leave a Review</h1>
            </div>
          </div>
          <div className="Review_Form_Body">
            <div className="Review_Form_Image">
              <img src={product.photoUrls[0]} />
            </div>
            <div className="Review_Form_Body_Right">
              <div className="Review_Form_Body_Right_Context">
                <h3>{ product.title }</h3>
                <p>
                  Purchased on {getDate()}
                </p>
              </div>
              <div className="quantity">
                <p>Rating: </p>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <div
                        key={index}
                        className={index <= (hover || rating) ? "selected" : "unselected"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <i className="fa fa-solid fa-star fa-2x"></i>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="Review_Form_Body_Discription">
            <p>Title</p>
            <label htmlFor="title"></label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="Review_Form_Input"
            />
            <p>Comment</p>
            <label htmlFor="Body"></label>
            <textarea
              cols="30"
              rows="7"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="Review_Form_Input"
            />
              {renderErrors()}
            <input
              id="Review_Submit"
              className="Review_Submit"
              type="submit"
              value="Submit Review"/>
          </div>
        </form>
      </div>
    );
}

export default ReviewForm;
