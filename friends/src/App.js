import React from "react";
import Login from "./Components/Login";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Styles/Styles";

function App() {
	const classes = useStyles();
	return (
		<Router>
			<Grid container>
				<Button>
					<Link to="/about">About</Link>
				</Button>
				<Button>
					<Link to="/login">Login</Link>
				</Button>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" component={About} />
					<Route path="/login" component={Login} />
					<Route render={() => <h1>Page not found</h1>} />
				</Switch>
				<Login />
			</Grid>
		</Router>
	);
}

export default App;
