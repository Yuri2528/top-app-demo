import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import Logo from '../logo.svg';
import React from 'react';
import { Search } from '../../components/Search/Search';


export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {

	return (
		<div className={cn(className, styles.sidebar)}{...props}>

			<Logo className={styles.logo} />
			<Search />
			<Menu />

		</div>
	);

};