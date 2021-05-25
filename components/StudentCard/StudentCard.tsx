import Logo from "@/images/logo.svg"
import { Box, IconButton, Typography } from "@material-ui/core"
import { Student } from "content/interfaces"
import Image from "next/image"
import Link from "next/link"
import {
	AiOutlineInfoCircle,
	AiOutlineLinkedin,
	AiOutlineMail,
} from "react-icons/ai"
import useStudentCardStyles from "./StudentCard.styles"

interface StudentCardProps {
	student: Student
	alternateColor?: boolean
}

const StudentCard: React.FC<StudentCardProps> = ({
	student,
	alternateColor,
}) => {
	const classes = useStudentCardStyles({ alternateColor })

	return (
		<>
			<Box
				width="100%"
				paddingTop="150%"
				position="relative"
				className={classes.root}
			>
				<Box
					position="absolute"
					top={0}
					bottom={0}
					left={0}
					right={0}
					zIndex={99}
				>
					<Box
						width="100%"
						height="100%"
						position="relative"
						bgcolor="background.default"
						className={classes.image}
					>
						{student.headshot ? (
							<Image
								src={student.headshot.url}
								alt={student.fullName}
								layout="fill"
								objectFit="cover"
								objectPosition="center center"
								quality={50}
							/>
						) : (
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								height="100%"
								width="100%"
							>
								<Logo />
							</Box>
						)}
					</Box>
				</Box>
				<Box
					position="absolute"
					top={0}
					bottom={0}
					left={0}
					right={0}
					zIndex={100}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					className={classes.linksContainer}
				>
					<Link href={`members/${student.sys.id}`} passHref>
						<IconButton className={classes.link}>
							<AiOutlineInfoCircle />
						</IconButton>
					</Link>
					<IconButton href={`mailto:${student.email}`} className={classes.link}>
						<AiOutlineMail />
					</IconButton>
					{student.linkedIn && (
						<IconButton
							href={student.linkedIn}
							target="_blank"
							rel="noopener"
							className={classes.link}
						>
							<AiOutlineLinkedin />
						</IconButton>
					)}
				</Box>
			</Box>
			<Typography variant="body1" className={classes.name}>
				{student.fullName}
			</Typography>
		</>
	)
}

export default StudentCard
