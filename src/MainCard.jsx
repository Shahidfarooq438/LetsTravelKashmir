import image from './assets/sonamarg.jpg'


function MainCard(){

    return (
        
        <div className="main-card" id='tour-packages'>
            <img src={image} alt="image" className='main-image'/>
           <div className='text-container'>
           <h1 className="main-title">Travel Any Corner of Kashmir with us</h1>
            <p className="main-text">Would you explore natural paradise, Kashmir in the world, let’s find
                 the best destination in Kashmir with us.Explore all the destinations with us at affordable prices.
                 Travel with us once and you will feel th difference.</p>
            <a href='#contact-us'><button className='main-button'>Contact Us</button></a>
           </div>
        </div>
    );
}

export default MainCard;