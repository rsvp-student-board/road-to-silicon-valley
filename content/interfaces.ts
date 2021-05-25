export interface Number {
	number: number
	title: string
}

export interface FeaturedBoxContent {
	title: string
	description: string
	link: string
	imageId: string
}
export interface Discipline {
	title: string
	icon: JSX.Element
}

export interface Offer {
	title: string
	items: {
		title: string
		note?: string
	}[]
}

export interface InvolvementCategory {
	title: string
	icon: JSX.Element
	description: string
}

export interface InvolvementOpportunity {
	title: string
	description: string
}

export interface MembershipBenefit {
	title: string
	description: string
	icon: JSX.Element
}

export interface Student {
	sys: {
		id: string
	}
	fullName: string
	cohort?: number
	graduationYear: number
	majors: string[]
	minors?: string[]
	concentrations: string[]
	email: string
	linkedIn?: string
	company?: string
	role?: string
	studentBoardPosition?: string
	committeeMembership?: string
	description?: string
	alumnus?: boolean
	headshot?: {
		url: string
		width: number
		height: number
	}
}
