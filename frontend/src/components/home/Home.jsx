import Webcam from 'react-webcam'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Header />
            <Webcam mirrored={true}/>
        </div>
    )
}

function Header() {
    return (
        <Navbar>
            <Navbar.Brand className='ms-4'>Sera</Navbar.Brand>
            <Nav>
                <NavDropdown.Divider />
                <Nav.Link className='d-flex justify-content-end'>Log Out</Nav.Link>
            </Nav>
        </Navbar>
    )
}

function DataBox() {
    return (
        <div>
            
        </div>
    )
}