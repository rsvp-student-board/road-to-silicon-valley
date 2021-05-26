import { fade, makeStyles } from "@material-ui/core/styles"

const useStudentInfoStyles = makeStyles((theme) => ({
	gradient: {
		height: 300,
		backgroundColor: theme.palette.primary.main,
		background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		backgroundSize: "400% 400%",
		animation: `$gradientShift 45s ${theme.transitions.easing.easeInOut} infinite`,
		[theme.breakpoints.up("md")]: {
			height: 250,
		},
	},
	"@keyframes gradientShift": {
		"0%": { backgroundPosition: "0% 50%" },
		"50%": { backgroundPosition: "100% 50%" },
		"100%": { backgroundPosition: "0% 50%" },
	},
	gradientOverlay: {
		backgroundColor: fade(theme.palette.common.black, 0.2),
		background: `linear-gradient(0deg, ${fade(
			theme.palette.common.black,
			0.2
		)}, ${fade(theme.palette.common.black, 0)})`,
	},
	root: {
		minHeight: "calc(100vh - 82px - 300px)",
		position: "relative",
		"& .content-container": {
			marginTop: "-46vw",
			[theme.breakpoints.up("sm")]: {
				marginTop: "-25vw",
			},
			[theme.breakpoints.up("sm")]: {
				marginTop: 0,
			},
		},
		[theme.breakpoints.up("md")]: {
			minHeight: "calc(100vh - 82px - 250px)",
		},
	},
	imgContainer: {
		width: "60%",
		minWidth: 100,
		maxWidth: 300,
		borderRadius: "50%",
		border: `8px solid ${theme.palette.background.paper}`,
		overflow: "hidden",
		position: "relative",
		zIndex: 11,
		left: "50%",
		transform: "translateX(-50%)",
		[theme.breakpoints.up("md")]: {
			position: "absolute",
			width: 240,
			marginTop: theme.spacing(-20),
			left: "inherit",
			transform: "none",
		},
	},
	nameContainer: {
		"&&": {
			[theme.breakpoints.up("md")]: {
				borderBottom: `1px solid ${theme.palette.grey[400]}`,
				position: "absolute",
				transform: `translateY(${theme.spacing(-5.5)}px)`,
				marginLeft: 240 / 2,
				paddingTop: 0,
				paddingRight: 0,
				paddingBottom: theme.spacing(1.5),
				paddingLeft: 240 / 2 + theme.spacing(2),
				maxWidth: theme.breakpoints.values.md - 240 / 2 - theme.spacing(3.25),
				width: "100%",
			},
		},
	},
	nameGrid: {
		paddingBottom: theme.spacing(1.5),
		borderBottom: `1px solid ${theme.palette.grey[400]}`,
		textAlign: "center",
		marginTop: theme.spacing(-2),
		[theme.breakpoints.up("md")]: {
			borderBottom: "none",
			paddingBottom: 0,
			textAlign: "left",
		},
	},
	name: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 2.75),
		fontWeight: 500,
	},
	position: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.5),
		fontFamily: theme.typography.body1.fontFamily,
		fontWeight: 400,
	},
	cohortGrad: {
		marginTop: theme.spacing(0.75),
		fontFamily: theme.typography.body1.fontFamily,
		fontWeight: 300,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1),
		opacity: 0.7,
		textTransform: "uppercase",
		letterSpacing: 1,
		"& span": {
			fontWeight: 500,
		},
	},
	link: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(-0.75),
		[theme.breakpoints.up("md")]: {
			marginLeft: theme.spacing(0.5),
		},
	},
	infoContainer: {
		[theme.breakpoints.up("md")]: {
			marginTop: theme.spacing(13),
		},
	},
	infoDescriptor: {
		fontSize: theme.typography.fontSize - 1,
		letterSpacing: 1,
		fontWeight: 500,
		textTransform: "uppercase",
	},
	infoItemText: {
		fontWeight: 300,
		paddingLeft: theme.spacing(4),
		textIndent: theme.spacing(-4),
		lineHeight: 1.3,
	},
}))

export default useStudentInfoStyles
