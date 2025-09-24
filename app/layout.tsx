/* RootLayout */

import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

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
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Sidebar>{children}</Sidebar>
				</ThemeProvider>
			</body>
		</html>
	);
}
