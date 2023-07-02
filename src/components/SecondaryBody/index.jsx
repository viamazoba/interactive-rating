import './SecondaryBody.scss'


export function SecondaryBody(props) {
    const {selectedRating} = props
  
    return (
      <>
        <div className="card__secondary-body">
            <span className='card__bill-icon'></span>
            <span className='card__message-rating'>You selected {selectedRating} out of 5</span>
            <h5 className="card__secondary-title">Thank you!</h5>
            <p className="card-secondary__text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
        </div>
      </>
    )
}

export default SecondaryBody