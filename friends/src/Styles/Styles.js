import { makeStyles } from "@material-ui/core/styles";
import freinds from './freinds.jpg'


export const useStyles = makeStyles(() => ({
	container: {
        opacity: "90%",
        backgroundImage: `url(${freinds})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		width: "25%",
		height: "10%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyItems: "center",
	},
	friendCards: {
        display: "flex",
		marginTop: "-250px",

		width: "100vw",
    },
    info: {
        opacity: ".6",
        margin: "10px",
        width: "25%",
        height: "25%",
    },
}));
