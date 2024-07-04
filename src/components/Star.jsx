import { Rating } from "react-simple-star-rating";


function Star({ handleRating, rating }) {
 
  
  return (
    <>
      <div className="anton-regular starComponent" >
        <Rating 
          onClick={handleRating} 
          size={26}
        />
      </div>
      <p className="starText anton-regular fs-6 mb-3 mt-3"> Movies rated {rating} stars or higher...  </p>
    </>
  );
}

export default Star;
