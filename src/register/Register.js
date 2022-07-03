import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BgImg from "./components/layout/BgImgContainer";
import EmptyFooter from "./components/layout/EmptyFooter";
import EmptyHeader from "./components/layout/EmptyHeader";

export default function Register() {

    userData;
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);        
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: ''            
        }
    }
    
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }    
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            email: '',
            password: ''            
        })
    }
    
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.email,
                email: this.userData.password                
            })
        } else {
            this.setState({
                email: '',
                password: ''                
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

	return (
		<><AuthProvider>
			<Router>
				<BgImg>

					<EmptyHeader />					
					<Routes>
						<span className="login-form-tabs">
                            <Route exact path="/"><div className="inactive-tab">Login</div></Route>
							<div className="active-tab">Register</div>						
						</span>					
					</Routes>
					<Form onSubmit={this.onSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />            
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Register
						</Button>
					</Form>

					<EmptyFooter />

				</BgImg>

			</Router>

		</AuthProvider>
		</>
	)
}