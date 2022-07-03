import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Redirect, isLog} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BgImg from "./components/layout/BgImgContainer";
import EmptyFooter from "./components/layout/EmptyFooter";
import EmptyHeader from "./components/layout/EmptyHeader";
import Register from "./register/Register";

function App() {	

	return (
		<><AuthProvider>
			<Router>
				<BgImg>

					<EmptyHeader />					
					<Routes>
						<span className="login-form-tabs">
							<div className="active-tab">Login</div>
							<Route path="/register" element={<Register />}><div className="inactive-tab">Register</div></Route>						
						</span>					
					</Routes>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />            
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Routes>
							<Button variant="primary" type="submit">
								<Redirect exact from="/" to={isLog ? "/browse" : "/register"} />Enter
							</Button>
						</Routes>
					</Form>

					<EmptyFooter />

				</BgImg>

			</Router>

		</AuthProvider>
		</>
	);
}

export default App;