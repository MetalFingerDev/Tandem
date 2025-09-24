/* RootLayout */

import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
		<html lang='en' suppressHydrationWarning>
			<body>
				{" "}
				<SidebarProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<AppSidebar />
						<main>
							<SidebarTrigger /> {/*THIS SUCKS BT todo: fix sidebar trigger*/}
							{children}
						</main>
					</ThemeProvider>
				</SidebarProvider>
			</body>
		</html>
	);
}
