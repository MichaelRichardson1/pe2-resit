import React from "react";
import Logo from "../../images/logo.png";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Browse from "../../browse/Browse";
import Rts from "../../categories/Rts";
import Sandbox from "../../categories/Sandbox";
import Shooter from "../../categories/Shooter";
import Rpg from "../../categories/Rpg";
import Sports from "../../categories/Sports";
import Puzzle from "../../categories/Puzzle";
import Action from "../../categories/Action";
import Horror from "../../categories/Horror";

function NavHeader() {        

    return  (
    <>
        <AuthProvider>
            <header className="navigation">
                <Router> 

                        <Navbar bg="light" expand="lg">
                            <Container>
                                <Navbar.Brand as={Link} to="/browse"><Image src={Logo} alt="bits and bots logo"></Image></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="rts">RTS</Nav.Link>
                                        <Nav.Link as={Link} to="sandbox">Sandbox</Nav.Link>
                                        <Nav.Link as={Link} to="shooter">Shooter</Nav.Link>
                                        <Nav.Link as={Link} to="rpg">RPG</Nav.Link>
                                        <Nav.Link as={Link} to="sports">Sports</Nav.Link>
                                        <Nav.Link as={Link} to="puzzle">Puzzle</Nav.Link>
                                        <Nav.Link as={Link} to="action">Action</Nav.Link>
                                        <Nav.Link as={Link} to="horror">Horror</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                    <div className="container">
					<Routes>
						<Route path="/browse" element={<Browse />} />
						<Route path="/rts" element={<Rts />} />
						<Route path="/sandbox" element={<Sandbox />} />
						<Route path="/shooter" element={<Shooter />} />
						<Route path="/rpg" element={<Rpg />} />
						<Route path="/sports" element={<Sports />} />
						<Route path="/puzzle" element={<Puzzle />} />
						<Route path="/action" element={<Action />} />
						<Route path="/horror" element={<Horror />} />						
					</Routes>
				</div>
                </Router>
            </header>;

    </AuthProvider>
    </>
    )
}

export default NavHeader;
