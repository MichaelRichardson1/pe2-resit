import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SportsPage from "./components/categories/SportsPage";
import Footer from "./components/layout/Footer";
import Cart from "../cart/Cart";
import SandboxPage from "../components/lists/SandboxPage";
import RtsPage from "../components/lists/RtsPage";
import ShooterPage from "../components/lists/ShooterPage";
import RpgPage from "../components/lists/RpgPage";
import PuzzlePage from "../components/lists/PuzzlePage";
import ActionPage from "../components/lists/ActionPage";
import HorrorPage from "../components/lists/HorrorPage";
import GameDetail from "../components/lists/GameDetail";
import GamesList from "../components/lists/GamesList";
import SubHeader from "../components/layout/SubHeader";

export default function Browse() {
	return (
		<><AuthProvider>
			<Router>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand as={Link} to="/browse"><Image src="../images/logo.png"></Image></Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to="/sandbox">Sandbox</Nav.Link>
								<Nav.Link as={Link} to="/rts">RTS</Nav.Link>
								<Nav.Link as={Link} to="/shooter">Shooter</Nav.Link>
								<Nav.Link as={Link} to="/rpg">RPG</Nav.Link>
								<Nav.Link as={Link} to="/sports">Sports</Nav.Link>
								<Nav.Link as={Link} to="/puzzle">Puzzle</Nav.Link>
								<Nav.Link as={Link} to="/action">Action</Nav.Link>
                                <Nav.Link as={Link} to="/horror">Horror</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>	

                <SubHeader />

                <GamesList />			

				<div className="container">
					<Routes>
						<Route path="/browse" element={<Browse />} />
						<Route path="/sandbox" element={<SandboxPage />} />
						<Route path="/rts" element={<RtsPage />} />
						<Route path="/shooter" element={<ShooterPage />} />
						<Route path="/rpg" element={<RpgPage />} />
						<Route path="/sports" element={<SportsPage />} />
						<Route path="/puzzle" element={<PuzzlePage />} />
						<Route path="/action" element={<ActionPage />} />
						<Route path="/horror" element={<HorrorPage />} />
						<Route path="/game/:id" element={<GameDetail />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</Router>
		</AuthProvider>
		<Footer /></>
	);
}