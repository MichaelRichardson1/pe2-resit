import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Browse from "../../browse/Browse";
import Cart from "../../cart/Cart";

import useBreadcrumbs from 'use-react-router-breadcrumbs';

function SubHeader() {    
    
    const breadcrumbs = useBreadcrumbs();

        return  (
        <>
            <AuthProvider>
                <div className="sub-navigation">
                    <Router>

                    {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}

                            <Navbar bg="light" expand="lg">
                                <Container>                                
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link as={Link} to="/">Logout</Nav.Link>
                                            <Nav.Link as={Link} to="cart">View Cart</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>

                        <div className="container">
                        <Routes>
                            <Route path="/browse" element={<Browse />} />
                            <Route path="/cart" element={<Cart />} />												
                        </Routes>
                    </div>
                    </Router>
                </div>;

        </AuthProvider>
        </>
        );
}

export default SubHeader;
