import {
	Link as MuiLink,
	Theme,
	Typography,
	useMediaQuery,
} from "@material-ui/core"
import clsx from "clsx"
import { NavItem as NavItemType } from "constants/interfaces"
import Link from "next/link"
import { useState } from "react"
import { GoChevronDown } from "react-icons/go"
import useNavItemStyles from "./NavItem.styles"

interface NavItemProps {
	navItem: NavItemType
	activePath: string
	onClick: () => void
}

const NavItem: React.FC<NavItemProps> = ({ navItem, activePath, onClick }) => {
	const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false)
	const isWiderThanSmall = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.up("md")
	)

	const classes = useNavItemStyles({
		isActive:
			navItem.path === activePath ||
			navItem.sublist?.some((item) => item.path === activePath),
		isDropdown: !!navItem.sublist,
		isSubMenuOpen,
	})

	const toggleSubMenuOpen = () => {
		if (!isWiderThanSmall) {
			setIsSubMenuOpen(!isSubMenuOpen)
		}
	}

	return (
		<>
			{navItem.path ? (
				<Link href={navItem.path} passHref>
					<MuiLink onClick={onClick} className={classes.directLink}>
						<div className={classes.container}>
							<Typography className={classes.typography}>
								{navItem.title}
							</Typography>
							<div className={classes.highlight} />
						</div>
					</MuiLink>
				</Link>
			) : (
				navItem.sublist && (
					<div onClick={toggleSubMenuOpen} className={classes.container}>
						<Typography className={classes.typography}>
							{navItem.title} <GoChevronDown className={classes.dropdownIcon} />
						</Typography>
						<div className={classes.highlight} />
						<div className={classes.sublist}>
							{navItem.sublist.map((sublistItem) => (
								<Link
									href={sublistItem.path}
									passHref
									key={`nav-item-sublist-${sublistItem.title}`}
								>
									<MuiLink
										onClick={onClick}
										variant="body1"
										className={clsx(
											classes.sublistLink,
											sublistItem.path === activePath &&
												classes.activeSublistLink
										)}
									>
										{sublistItem.title}
									</MuiLink>
								</Link>
							))}
						</div>
					</div>
				)
			)}
		</>
	)
}

export default NavItem
