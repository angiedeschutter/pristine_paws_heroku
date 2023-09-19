import { useContext } from "react"
import { CurrentUser } from '../contexts/CurrentUser'
function Footer() {
    const { currentUser } = useContext(CurrentUser)
    return (
        <>
            <div className='footer'>
                <div className="social">
                    <div className="info"><p><i className="fa-solid fa-location-dot"></i> Pristine Paws</p></div>
                    <div className="info"><i className="fa-solid fa-phone"></i> 555-555-5555</div>
                    <div className="info"><i className="fa-solid fa-envelope"></i> PristinePaws@mail.com</div>
                </div>
                <div className="social" >
                    <div className="social"><p>Connect with Us</p></div>
                    <div className="social"><i className="fa-brands fa-facebook"></i></div>
                    <div className="social"><i className="fa-brands fa-twitter"></i></div>
                    <div className="social"><i className="fa-brands fa-instagram"></i></div>
                    <div className="social"><i className="fa-brands fa-yelp"></i></div>
                </div>

            </div>
        </>
    );
}

export default Footer;