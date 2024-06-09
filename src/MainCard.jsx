import image from './assets/sonamarg.jpg'


function MainCard(){

    function handleClick(event){
        
    }
    return (
        <div className="main-card">
            <img src={image} alt="image" className='main-image'/>
           <div className='text-container'>
           <h1 className="main-title">Travel Any Corner of Kashmir with us</h1>
            <p className="main-text">Would you explore natural paradise, Kashmir in the world, let’s find
                 the best destination in Kashmir with us.Explore all the destinations with us at affordable prices.
                 Travel with us once and you will feel th difference.</p>
            <button className='main-button' onClick={handleClick}>Contact Us</button>
           </div>
        </div>
    );
}

export default MainCard;