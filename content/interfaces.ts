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

export interface InvolvementOpportunity {
	title: string
	description: string
}

export interface MembershipBenefit {
	title: string
	description: string
	icon: JSX.Element
}
