import React from 'react'
import { Navbar,Button,Form,Nav,Container} from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'

const NavBarLogin = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                        />
                    </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/login'
                            className="nav-text d-flex mt-3 justify-content-center">
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>دخول</p>
                        </Nav.Link>
                        <Nav.Link href='/cart'
                            className="nav-text d-flex mt-3 justify-content-center">
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربة</p>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarLogin
