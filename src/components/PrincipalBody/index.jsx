import './PrincipalBody.scss'


export function PrincipalBody(props) {
    const {onRatingHover, selectedRating, onRatingOver, onRatingChoose, onSubmit} = props
  
    return (
      <>
        <div className="card-body">
            <span className='card__star-icon'></span>
            <h5 className="card-title">How did we do?</h5>
            <p className="card-text">Please let us know how we did with your support request. All feddback is appreciated to help us improve our offering! </p>
            <div className='card__container-election'>
            <button className={selectedRating >= 1 ? 'card__election-button selected' : 'card__election-button'} onMouseEnter={() => onRatingHover(1)} onMouseLeave={onRatingOver} onClick={() =>onRatingChoose(1)}>1</button>
            <button className={selectedRating >= 2 ? 'card__election-button selected' : 'card__election-button'} onMouseEnter={() => onRatingHover(2)} onMouseLeave={onRatingOver} onClick={() =>onRatingChoose(2)}>2</button>
            <button className={selectedRating >= 3 ? 'card__election-button selected' : 'card__election-button'} onMouseEnter={() => onRatingHover(3)} onMouseLeave={onRatingOver} onClick={() =>onRatingChoose(3)}>3</button>
            <button className={selectedRating >= 4 ? 'card__election-button selected' : 'card__election-button'} onMouseEnter={() => onRatingHover(4)} onMouseLeave={onRatingOver} onClick={() =>onRatingChoose(4)}>4</button>
            <button className={selectedRating >= 5 ? 'card__election-button selected' : 'card__election-button'} onMouseEnter={() => onRatingHover(5)} onMouseLeave={onRatingOver} onClick={() =>onRatingChoose(5)}>5</button>

            </div>
            <a href="#" className="btn btn-primary" onClick={onSubmit}>SUBMIT</a>
        </div>
      </>
    )
}

export default PrincipalBody