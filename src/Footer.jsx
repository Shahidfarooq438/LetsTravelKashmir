import fb from './assets/fb.png'
import inst from './assets/inst.png'
import Tw from './assets/tw.png'

function Footer(){
    return (
        <div className='footer'>
        <h2>Contact Us</h2>
        <div className="contact-us" >
        
            <div className="contact-info" id='contact-us'>
                <p>Shalimar Srinagar, Jammu & Kashmir 190006</p>
                <p><a href="mailto:hashtagkashmir@gmail.com">hashtagkashmir@gmail.com</a></p>
                <p><a href='tel:9682658662'>+91 9682658662</a></p>
            </div>
            <div>
                <strong>Follow us on: </strong>
                <ul className="social-media">
                <li><a href="#" target="_blank" ><img src={fb} alt="" /></a></li>
                <li><a href="#" target="_blank" ><img src={inst} alt=""/></a></li>
                <li><a href="#" target="_blank" ><img src={Tw} alt="" /></a></li>
                </ul>
            </div>
        </div>
        <p>&copy;{new Date().getFullYear()} Let's Travel Kashmir Ltd. All rights reserved.</p>
        </div>
    );
}
export default Footer;