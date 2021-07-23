import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";


export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {

	children: ReactNode;
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'green' | 'grey' | 'primary';
	href?: string;
}