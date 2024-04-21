import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SignUp.css'

export default function SignUp() {
    return (
        <div className='sign-up-container'>
            <Form className='sign-up-form'>
                <h1 className='mb-4'>Create Account</h1>

                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control className='mb-3' placeholder="John" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control className='mb-3' placeholder="Doe" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='mb-3' type="email" placeholder="user@example.com" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='mb-3' type="password" placeholder="cats12345" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control className='mb-3' type="password" placeholder="cats12345" />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Link to='/sign-in'>Already have an account?</Link>
                </Form.Group>

                <Button type="submit" style={{ backgroundColor: 'orange', borderColor: 'orange' }}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}