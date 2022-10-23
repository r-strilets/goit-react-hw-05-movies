const MovieReviews = ({ movieReviews }) => {
  return (
    <>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <h4>There are no reviews for this movie</h4>
        )}
      </ul>
    </>
  );
};

export { MovieReviews };
