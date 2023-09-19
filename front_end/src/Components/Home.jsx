import Carousel from 'react-bootstrap/Carousel';


function Home() {

    return (
        <>
            <h1>Pristine Paws Grooming Services</h1>
            <img id='homeImg' src='home.jpg' />
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className='review' src='blank.jpg'></img>
                        <Carousel.Caption>
                            <h3><i className="fa-solid fa-star fa-beat" ></i><i className="fa-solid fa-star fa-beat" ></i><i className="fa-solid fa-star fa-beat" ></i><i className="fa-solid fa-star fa-beat" ></i><i className="fa-solid fa-star fa-beat" ></i></h3>
                            <p>Owners are awesome and really care about your pet!</p>
                            <p>- Sarah B.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='review' src='blank.jpg'></img>
                        <Carousel.Caption>
                            <h3>Super Professional!</h3>
                            <p>My pups are always taken care of at Pristine Paws</p>
                            <p>- James P.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='review' src='blank.jpg'></img>
                        <Carousel.Caption>
                            <h3>Highly Recommend <i className="fa-regular fa-face-smile-beam fa-bounce"></i></h3>
                            <p> Wouldn't take my dogs anywhere else! </p>
                            <p>- Ellie F.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    );
}

export default Home;