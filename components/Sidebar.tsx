/* Sidebar.tsx */

"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

const Sidebar = () => {
	return (
		<aside>
			<nav>
				<ul>
					<li>Home</li>
				</ul>
			</nav>
			<ModeToggle />
			<Button>sign-in</Button>
		</aside>
	);
};

export default Sidebar;
