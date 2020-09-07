import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../API/axiosAuth";
import { useStyles } from "../Styles/Styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid'
import Friend from "./Friend.css";

function Friends(props) {
    const [friends, setFriends] = useState();
    const [newFriends, setNewFriends] = useState({})
	const classes = useStyles();
	const getData = () => {
		axiosWithAuth()
			.get("/friends")
			.then((res) => setFriends(res.data))
			.catch((err) => console.log(err));
	};
	const addFriend = (e) => {

        axiosWithAuth()
		.post("http://localhost:5000/api/friends", newFriends)
            .then((res) => setFriends(res.data))
        .catch((error) => {
            console.log("oh uh", error);
        });
    };
    const changeHandler = (e) => {
        setNewFriends({
            ...newFriends,
            id: Date.now(),
            [e.target.name]: e.target.value,
        });
    };
	useEffect(() => {
		getData();
	}, []);
	return friends ? (
		<div className={classes.friendCards}>
            <Grid container className={classes.friendContainer}>
			{friends.map((friend) => (
				<Paper className={classes.info}>
					<p>{friend.name}</p>
					<ol>
						AGE: {friend.age}
                        <br>
                        </br>
						EMAIL: {friend.email}
                        <br>
                        </br>
                        ID: {friend.id}
					</ol>
				</Paper>
			))}
            </Grid>
			<form
				method="get"
				action="javascript: void(0);"
				id="login-form"
				class="login-form"
				autocomplete="off"
				role="main"
			>
                <p style={{textAlign: "center", width: "100%"}}>ADD A FRIEND</p>
				<div>
					<label class="label-email">
						<input
                            onChange={changeHandler}
							type="name"
							class="text"
							name="Name"
							placeholder="Name"
							tabindex="1"
							required
						/>
						<span class="required">Name</span>
					</label>
				</div>
                <div>
                    <label class="label-email">
                        <input
                            onChange={changeHandler}
                            type="name"
                            class="text"
                            name="email"
                            placeholder="Email"
                            tabindex="1"
                            required
                        />
                        <span class="required">Email</span>
                    </label>
                </div>
				<div>
					<label class="label-password">
						<input
                        onChange={changeHandler}
							type="text"
							class="text"
							name="age"
							placeholder="Age"
							tabindex="2"
							required
						/>
						<span class="required">Age</span>
					</label>
				</div>
				{/* <input type="submit" value="ADD" onClick={addFriend} /> */}
                <Button onClick={addFriend}>
				<figure aria-hidden="true">
					<div class="person-body"></div>
					<div class="neck skin"></div>
					<div class="head skin">
						<div class="eyes"></div>
						<div class="mouth"></div>
					</div>
					<div class="hair"></div>
					<div class="ears"></div>
					<div class="shirt-1"></div>
					<div class="shirt-2"></div>
				</figure>
                </Button>
			</form>
		</div>
	) : (
		<div>FETCHING OUR FRIENDS</div>
	);
}

export default Friends;
