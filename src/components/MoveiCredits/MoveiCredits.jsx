const MoveiCredits = ({ movieCredits }) => {
  return (
    <>
      <ul>
        {movieCredits &&
          movieCredits.map(credit => (
            <li className="" key={credit.cast_id}>
              <img
                src={
                  credit.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                    : 'https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg'
                }
                alt={credit.name}
                width="50"
                height="75"
              />
              <h4>{credit.name}</h4>
              <p>Character: {credit.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export { MoveiCredits };
