import React from "react";
import Login from "./Components/Login";
import About from "./Components/About";
import Friends from "./Components/Friends";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Styles/Styles";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
	const classes = useStyles();
	return (
		<Router>
			<Grid container className={classes.container}>
				<Grid item className={classes.header}>
					<Switch>
						<PrivateRoute exact path="/protected" component={Friends} />
						<Route path="/about" component={About} />
						<Route path="/" component={Login} />
					</Switch>
				</Grid>
			</Grid>
		</Router>
	);
}

export default App;
