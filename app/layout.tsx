import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";

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
	title: "bine",
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
				<head>
					<Script
						defer
						src="https://umami.bine.codes/script.js"
						data-website-id="0b581d53-f6b5-4131-9c8b-cffaafeebe16"
					/>
				</head>
				<body className="antialiased tracking-tight">
					<div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
						<main className="max-w-[60ch] mx-auto w-full space-y-6">
							{children}
						</main>
						<Footer />
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
