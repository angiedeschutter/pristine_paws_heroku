
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CurrentUser } from '../contexts/CurrentUser'
import {useContext} from 'react'

//creates the navbar at the top of the page
export default function NavigationBar() {

    const { currentUser } = useContext(CurrentUser)

    //creates a login button that is appened when no current user is set
    let login = (
        <>
            <Nav.Link href="login">Login</Nav.Link>
        </>
    )

    //removes the token and logs out the current user when clicked
    const logout=()=>{
        localStorage.removeItem('token')
        window.location.href = "/"
    }

    //removes the token and logs out the user when the browser is closed if the user does not click the logout button
    window.onbeforeunload = function() {
        localStorage.clear();
     }

    //If there is a current user, there login in button will change to the user's name with a link to their account and a logout button will appear    
    if (currentUser) {
        login = (
            <>
                 <Nav.Link href="account">{currentUser.first_name} {currentUser.last_name}'s Account</Nav.Link>
                 <button className='logout-Button' onClick={logout}>Log Out</button>
            </>
        )
    }

    
let open='/puppy1.jpg'
let closed='/puppy2.jpg'
let puppyLogo = document.getElementById('logo')

//This will append an image to the image tag in the nav bar
function appendlogo(image){
    document.getElementById('logo').src=image
}

//This is a promise function that will delay the appending of each image 
function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

//This function will append an image and then append a different image after 2 second
async function puppy(){
    appendlogo(open)
    await wait(1000)
    appendlogo(closed)
}
//This function repeats the cycling of the 2 images every 2 seconds to create an animation of the dog blinking
setInterval(puppy,2000) 


    return (
        <>
            <Navbar>
                <Container>
                <img id='logo'height={100} src='/puppy1.jpg'/>
                    <Nav className="me-auto fs-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="services">Services</Nav.Link>
                        {login}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

