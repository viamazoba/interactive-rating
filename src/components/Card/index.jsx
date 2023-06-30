import './Card.scss'


export function Card() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="card">
           
            <div className="card-body">
                <span className='card__star-icon'></span>
                <h5 className="card-title">How did we do?</h5>
                <p className="card-text">Please let us know how we did with your support request. All feddback is appreciated to help us improve our offering! </p>
                <div className='card__container-election'>
                    <button className='card__election-button'>1</button>
                    <button className='card__election-button'>2</button>
                    <button className='card__election-button'>3</button>
                    <button className='card__election-button'>4</button>
                    <button className='card__election-button'>5</button>
                </div>
                <a href="#" className="btn btn-primary">SUBMIT</a>
            </div>

        </div>
      </>
    )
  }
  
export default Card