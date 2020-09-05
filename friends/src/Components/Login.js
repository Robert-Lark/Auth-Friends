import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../Styles/Styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { axiosWithAuth } from "../API/axiosAuth";

function Login(props) {
	const [formValues, setFormValues] = useState({});
	const classes = useStyles();
	const submit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", formValues)
			.then((res) => {
				localStorage.setItem('token', res.data.payload)
				props.history.push('/protected')
			})
			.catch((err) => console.log("error: ", err));
	};
	const changeHandler = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
		console.log(formValues);
	};
	// const login = () => {
	// 	axios.post('http://localhost:5000/api/login', userCredentials)
	// 		.then(res => {
	// 			localStorage.setItem('token', res.data.token);
	// 			props.history.push('/dashboard');
	// 		})
	// }

	return (
		<Grid container>
			<Grid item>
				<Paper>
					<form className={classes.root} noValidate autoComplete="off">
						<TextField
							id="standard-basic"
							label="Username"
							placeholder="Username"
							//type="text"
							value={formValues.username}
							name="username"
							onChange={changeHandler}
						/>
						<TextField
							id="standard-basic"
							placeholder="Password"
							//type="text"
							label="Password"
							value={formValues.password}
							onChange={changeHandler}
							name="password"
						/>
					</form>
				</Paper>
			</Grid>
			<Grid item>
				<Button variant="contained" onClick={submit}>
					Submit
				</Button>
				<Button variant="contained">Sign-up</Button>
			</Grid>
		</Grid>
	);
}

export default Login;
