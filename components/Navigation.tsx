"use client"
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { useSession } from "next-auth/react"

const Navigation = () => {

    const { data: session, status } = useSession()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-transparent" style={{ color: 'white' }}>
                <Container className='nav-container'>
                    <Image src='/assets/idunn_logo.png' className='logo-nav' roundedCircle />
                    <Navbar.Brand href="/" className='navbrand-style'>Idunn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About Server</Nav.Link>
                            <Nav.Link href="/map">Server Map</Nav.Link>
                            <NavDropdown title="Guides" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/pyrofishing">Pyro Fishing</NavDropdown.Item>
                                <NavDropdown.Item href="/pyromining">Pyro Mining</NavDropdown.Item>
                                <NavDropdown.Item href="/slimefun">Slimefun4</NavDropdown.Item>
                                <NavDropdown.Item href="/lands">Lands</NavDropdown.Item>
                                <NavDropdown.Item href='/ecoenchants'>Eco Enchants</NavDropdown.Item>


                                {/* <NavDropdown.Item></NavDropdown.Item> */}

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {status === 'authenticated' ? (
                                <>
                                    {/* only visible when logged in  */}
                                    <Nav.Link href='/playersearch'>Player Search</Nav.Link>
                                    <Nav.Link href='/account'>Account</Nav.Link>
                                    <Nav.Link href='/api/auth/signout'>Sign Out</Nav.Link>
                                </>
                            ) : (
                                <>
                                    {/* only visible when not logged in */}
                                    {/* <Nav.Link href='/oauth2/start'>Sign Up</Nav.Link> */}
                                    <Nav.Link href='/api/auth/signin'>Login with Google</Nav.Link>
                                </>
                            )}
                            {/* Always visible */}
                            <Nav.Link href="https://discord.gg/xPafZ6KnS9"><Image src='/assets/discord-black.png' className='discord-img' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation