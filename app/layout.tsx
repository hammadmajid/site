import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";

const IBMPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "400",
	preload: true,
});

export const metadata: Metadata = {
	metadataBase: new URL("https://bine.codes"),
	alternates: {
		canonical: "/",
	},
	title: {
		default: "Hammad Majid",
		template: "%s | Hammad Majid",
	},
	description: "Frontend developer and a student.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en" className={`${IBMPlexMono.className}`}>
				<body className="antialiased tracking-tight">
					<div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
						<main className="max-w-[60ch] mx-auto w-full space-y-6">
							{children}
						</main>
						<Footer />
						<Analytics />
					</div>
				</body>
			</html>
		</ViewTransitions>
	);
}

function Footer() {
	const links = [
		{
			name: "@hammadmajid",
			url: "https://bsky.app/profile/hammadmajid.bsky.social",
		},
		{ name: "mastodon", url: "https://mastodon.social/@hammadmajid" },
		{ name: "linkedin", url: "https://www.linkedin.com/in/hammadmajid" },
		{ name: "github", url: "https://github.com/hammadmajid" },
	];

	return (
		<footer className="mt-12 text-center">
			<div className="flex justify-center space-x-4 tracking-tight">
				{links.map((link) => (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
					>
						{link.name}
					</a>
				))}
			</div>
		</footer>
	);
}
