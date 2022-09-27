import './Card.scss'
import cars from '../data/carsContent.json'

function Card() {
    const listCars = cars.map((car) => {
        return (
        <div className={`card ${ car.color }`} key={ car.id }>
            <img src={ car.logo } alt="Car logo"  aria-hidden={true} />
            <h2>{ car.title }</h2>
            <p>{ car.text }</p>
            <button>Learn More</button>
            
        </div>
        )
    })

    return (
        listCars
    );
}

export default Card;
