import defaultProps from 'prop-types'
import aharbal from './assets/aharbal.jpg'

function Card(props){
    return(
        <div className="card">
            <img className='card-image' src={props.image} alt=""/>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>{props.text}</p>
        </div>
    );
}

Card.defaultProps={
    image:{aharbal},
    name:"Kashmir",
    text:"Enjoy the natural and scenic beauty of Kashmir by visiting this spectacular place."
}

export default Card;