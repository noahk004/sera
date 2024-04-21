import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SignIn.css'

export default function SignIn() {
    return (
        <div className='sign-in-container'>
            <Form className='sign-in-form'>
                <h1 className='mb-4'>Sign In</h1>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='mb-3' type="email" placeholder="user@example.com" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='mb-3' type="password" placeholder="cats12345" />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Link to='/create-account'>Don't have an account?</Link>
                </Form.Group>

                <Button type="submit" style={{ backgroundColor: 'orange', borderColor: 'orange' }}>
                    Sign In
                </Button>
            </Form>
        </div>
    )
}