import { useState } from "react";
import MoviesList from "../MoviesList";
import Star from "../Star";
import Presentation from "./Presentation";

// npm i 
// npm run dev

function Home({ movie, pagina }) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <div>
        <div className="presentation">
          <Presentation />
        </div>
        <div>
          <div className="star">
            <Star
              setRating={setRating}
              rating={rating}
              handleRating={handleRating}
            />
          </div>
        </div>
        <div>
          <MoviesList
            rating={rating}
            setRating={setRating}
            movie={movie}
            pagina={pagina}
          />
        </div>
      </div>
    </>
  );
}

export default Home;