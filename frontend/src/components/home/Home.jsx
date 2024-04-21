import Webcam from 'react-webcam'
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

import './Home.css'

import { useState } from 'react'

export default function Home() {
    const [running, setRunning] = useState(true)
    
    const toggleRunning = () => {
        setRunning(!running)
    }
    return (
        <div className='home-page'>
            <Header />
            <Webcam className='rounded-4 d-flex m-4' mirrored={true}/>
            <Button className='ms-4' style={{ backgroundColor: 'orange', borderColor: 'orange' }} onClick={toggleRunning}>{!running ? 'Start' : 'Stop'}</Button>
        </div>
    )
}

function Header() {
    return (
        <Navbar className='home-header'>
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