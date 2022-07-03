import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LoggedInNav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useNavigate();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<nav>
			<Link to="/">Home</Link>
			{auth ? (
				<>
					| <Link to="/admin">Admin</Link> | <button onClick={logout}>Log out</button>
				</>
			) : (
				<Link to="/login">Admin Login</Link>
			)}
		</nav>
	);
}

export default LoggedInNav;
