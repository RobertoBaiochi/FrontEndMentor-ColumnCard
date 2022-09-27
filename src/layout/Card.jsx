import './Card.scss'
import cars from '../data/carsContent.json';

function Card() {
    const listCars = cars.map((car) => {
        return (
        <div className={`card ${ car.color }`} key={ car.id }>
            <img src={ car.image } alt="Car logo" />
            <h1>{ car.title }</h1>
            <p>{ car.text }</p>
            <button>Learn More</button>
        </div>
        )
    })

    return (
        <>
        { listCars }
        </>
    );
}

export default Card;
