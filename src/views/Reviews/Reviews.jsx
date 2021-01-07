import s from "./Reviews.module.css";
import { useState, useEffect } from "react";
import * as API from "../../services/tmdbApi";
import PropTypes from "prop-types";

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.getReviews(id).then((res) => setReviews(res.results));
  }, [id]);

  return reviews.length > 0 ? (
    <ul className={s.reviewsList}>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>
            <b>From:</b> {review.author}
          </p>
          <p>
            <b>Review:</b> {review.content}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={s.noReviews}>No reviews found for this movie</p>
  );
}

Reviews.propTypes = {
  id: PropTypes.string,
};
