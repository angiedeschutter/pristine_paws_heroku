
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CurrentUser } from '../contexts/CurrentUser'
import {useContext} from 'react'

export default function NavigationBar() {

    const { currentUser } = useContext(CurrentUser)

    let login = (
        <>
            <Nav.Link href="login">Login</Nav.Link>
        </>
    )
    const logout=()=>{
        localStorage.removeItem('token')
        window.location.href = "/"
    }

    window.onbeforeunload = function() {
        localStorage.clear();
     }

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

function appendlogo(image){
    document.getElementById('logo').src=image
}

//This is a promise function that will delay the appending of each image to create a sequence of movement
function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function puppy(){
    appendlogo(open)
    await wait(2000)
    appendlogo(closed)
}
//This function repeats the animation function every second
setInterval(puppy,4000) 


    return (
        <>
            <Navbar>
                <Container>
                <img id='logo'height={100}/>
                    <Nav className="me-auto ">
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

