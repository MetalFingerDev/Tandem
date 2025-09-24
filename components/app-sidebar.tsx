import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarTrigger,
} from "@/components/ui/sidebar";

import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

import { Home, Settings } from "lucide-react";
import Link from "next/link";

const items = [
	{ title: "Home", url: "/", icon: Home },
	{ title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className='flex-row items-center'>
				{/* maybe logo or something */}
				<SidebarTrigger />
				tandem
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className='flex flex-row items-center justify-around'>
				<SignedOut>
					<SignUpButton>
						<Button>Sign Up</Button>
					</SignUpButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<ModeToggle />
			</SidebarFooter>
		</Sidebar>
	);
}
