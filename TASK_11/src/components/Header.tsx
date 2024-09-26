
// import "../Styles/main.css";

import { Link } from "react-router-dom";

function Navbar() {

	return (
		<header>
			<h3>LOGO</h3>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/mywork">MyWork</Link>
				<Link to="/aboutme">AboutMe</Link>
			</nav>
		</header>
	);
}

export default Navbar;