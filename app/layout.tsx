/* RootLayout */

import "@/styles/globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
	title: "tandem",
	description: "collaborative adi adi ye kya hua aadiii",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body>
					<SidebarProvider className='flex-col'>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange>
							<aside>
								<AppSidebar />
							</aside>
							<header className='flex flex-row gap-2 p-2 items-center'>
								<SidebarTrigger />
								tandem
								{/*THIS SUCKS BT todo: fix sidebar trigger*/}
							</header>
							<main className='flex-1'>{children}</main>
							<footer className='p-8'>
								<p>6 7 .... footer ............................pg no,,,,</p>
							</footer>
						</ThemeProvider>
					</SidebarProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
