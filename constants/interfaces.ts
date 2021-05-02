export type NavItem = { title: string } & (
	| { path: string; sublist?: never }
	| { path?: never; sublist: Array<{ title: string; path: string }> }
)

export interface ContactItem {
	title: string
	url: string
	icon: JSX.Element
}
