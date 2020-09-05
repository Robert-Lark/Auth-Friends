import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../Styles/Styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function Login(props) {
    const [formValues, setFormValues] = useState()
    const classes = useStyles();
    const submit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    const changeHandler = (e) => {
        setFormValues(e.target.value)
    }
    return (
			<Grid container>
				<Grid item>
					<Paper>
						<form className={classes.root} noValidate autoComplete="off">
							<TextField id="standard-basic" label="Username" />
							<TextField id="standard-basic" label="Password" />
						</form>
					</Paper>
				</Grid>
				<Grid item>
					<Button variant="contained" onClick={submit} value={changeHandler}>Submit</Button>
					<Button variant="contained">Sign-up</Button>
				</Grid>
			</Grid>
		);
}

export default Login;