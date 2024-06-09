import video from './assets/video.mp4'
import Typewriter from 'typewriter-effect';

function Video(){
    return(
        <div className="video-container">
             <video autoPlay loop muted className="bg-vid"><source src={video} type="video/mp4" /> </video>
             <h1 className='name'>
                <Typewriter
                    options={
                        {
                            strings: ["Let's Travel Kashmir"],
                            autoStart: true,
                            loop: true,
                            delay: 30,
                        }
                    }
                />
            </h1>
        </div>
    );
}

export default Video;