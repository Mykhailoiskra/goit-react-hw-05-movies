import { useState, useEffect } from "react";
import * as API from "../services/tmdbApi";

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    API.getReviews(id).then((res) => setReviews(res.results));
  }, [id]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews found for this movie</p>
  );
}
