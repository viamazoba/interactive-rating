import { useState } from 'react';
import './Card.scss'
import PrincipalBody from '../PrincipalBody'
import SecondaryBody from '../SecondaryBody'


export function Card() {
  
  const [selectedRating, setSelectedRating] = useState(0);
  const [boolRating, setboolRating] = useState(false);
  const [boolSubmit, setboolSubmit] = useState(false);
  var boolRatingAux = boolRating;

  const handleRatingHover = (rating) => {
    // !boolRating?setSelectedRating(rating):'';
    !boolRatingAux?setSelectedRating(rating):'';
  };

  const handleRatingOver = () => {
    !boolRatingAux?setSelectedRating(0):'';
  };

  const handleRatingChoose = (rating) => {
    setSelectedRating(rating);
    setboolRating(true);
    boolRatingAux = true;
  };

  const handleSubmit = () => {
    setboolSubmit(true)
  };
  
    return (
      <>
        <div className="card">
           
          {!boolSubmit && <PrincipalBody onRatingHover = {handleRatingHover} selectedRating = {selectedRating} onRatingOver = {handleRatingOver} onRatingChoose={handleRatingChoose} onSubmit = {handleSubmit}></PrincipalBody>}
            {boolSubmit && <SecondaryBody selectedRating = {selectedRating}></SecondaryBody>}
            

        </div>
      </>
    )
  }
  
export default Card