/* Sidebar.tsx */

"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import clsx from "clsx";

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	const pathname = usePathname();

	// Public routes
	const routes = useMemo(
		() => [
			{
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				label: "Search",
				active: pathname === "/search",
				href: "/search",
			},
		],
		[pathname]
	);

	return (
		<>
			<nav>
				<ul>
					{routes.map((route) => (
						<li
							key={route.label}
							className={clsx({
								active: route.active,
							})}
							data-href={route.href}>
							{route.label}
						</li>
					))}
				</ul>
			</nav>
			<main>{children}</main>
		</>
	);
};

export default Sidebar;
