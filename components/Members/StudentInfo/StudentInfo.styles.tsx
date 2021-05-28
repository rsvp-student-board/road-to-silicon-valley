import { fade, makeStyles } from "@material-ui/core/styles"

const useStudentInfoStyles = makeStyles((theme) => ({
	gradient: {
		height: 200,

		backgroundColor: theme.palette.primary.main,
		background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		backgroundSize: "400% 400%",
		animation: `$gradientShift 45s ${theme.transitions.easing.easeInOut} infinite`,
		// [theme.breakpoints.up("sm")]: {
		// 	height: 195,
		// },
		[theme.breakpoints.up("sm")]: {
			height: 210,
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
		minHeight: "calc(100vh - 82px - 200px)",
		position: "relative",
		"& .content-container": {
			marginTop: "-29%",
			[theme.breakpoints.up("sm")]: {
				marginTop: 0,
			},
		},

		[theme.breakpoints.up("sm")]: {
			minHeight: "calc(100vh - 82px - 210px)",
		},
	},
	imgContainer: {
		width: "40%",
		minWidth: 100,
		maxWidth: 300,
		borderRadius: "50%",
		border: `8px solid ${theme.palette.background.paper}`,
		overflow: "hidden",
		position: "relative",
		zIndex: 11,
		marginLeft: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			marginLeft: 0,
			marginTop: theme.spacing(-20),
			position: "absolute",
			width: 240,
		},
	},
	nameContainer: {
		"&&": {
			[theme.breakpoints.up("sm")]: {
				borderBottom: `1px solid ${theme.palette.grey[400]}`,
				position: "absolute",
				transform: `translateY(${theme.spacing(-5.5)}px)`,
				marginLeft: 240 / 2,
				paddingTop: 0,
				paddingRight: 0,
				paddingBottom: theme.spacing(1.5),
				paddingLeft: 240 / 2 + theme.spacing(2),
				maxWidth: theme.breakpoints.values.md - 240 / 2 - theme.spacing(3.25),
				width: `calc(100% - ${240 / 2}px - ${theme.spacing(2)}px)`,
			},
		},
	},
	nameGrid: {
		paddingBottom: theme.spacing(1.5),
		borderBottom: `1px solid ${theme.palette.grey[400]}`,
		marginTop: theme.spacing(-2),
		[theme.breakpoints.up("sm")]: {
			borderBottom: "none",
			paddingBottom: 0,
			marginTop: theme.spacing(1),
		},
		[theme.breakpoints.up("md")]: {
			marginTop: 0,
		},
	},
	name: {
		fontWeight: 500,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 2),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.pxToRem(theme.typography.fontSize * 2.75),
		},
	},
	position: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
		fontFamily: theme.typography.body1.fontFamily,
		fontWeight: 400,
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.5),
		},
	},
	cohortGrad: {
		marginTop: theme.spacing(0.75),
		fontFamily: theme.typography.body1.fontFamily,
		fontWeight: 300,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1),
		opacity: 0.7,
		textTransform: "uppercase",
		letterSpacing: 1,
		"& span": {
			fontWeight: 500,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.pxToRem(theme.typography.fontSize),
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
		[theme.breakpoints.up("sm")]: {
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
		paddingLeft: theme.spacing(2.5),
		textIndent: theme.spacing(-2.5),
		lineHeight: 1.3,
	},
	description: {
		fontWeight: 300,
	},
}))

export default useStudentInfoStyles
