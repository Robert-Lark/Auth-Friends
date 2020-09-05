import React, {useState} from "react";
import { axiosWithAuth } from "../API/axiosAuth";

function Friends(props) {
    const [friends, setFriends] = useState()
	const getData = () => {
		axiosWithAuth()
			.get("/friends")
            .then((res) => setFriends(res.data))
            .catch((err) => console.log(err));
            
    };
    console.log(friends)

	return friends ? (
    <div>
        <p>{friends[0].name}</p>
            <p>{friends[1].name}</p>
            <p>{friends[2].name}</p>
            <p>{friends[3].name}</p>
            <p>{friends[4].name}</p>
    </div>
    
    ) : (
            <div>
                friends
                <button onClick={getData}></button>
            </div>
    )
}

export default Friends;
