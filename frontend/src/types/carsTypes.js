// @flow

export type LinkType = {
	href: string
};

export type LinksType = {
	car: LinkType,
	owner: LinkType,
	self: LinkType
};

export type CarType = {
	brand: string,
	color: string,
	model: string,
	price: string,
	registerNumber: string,
	year: number,
	_links: LinksType
};
