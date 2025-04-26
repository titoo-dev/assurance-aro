import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Assurance Aro',
	description: 'Votre partenaire assurance à Madagascar',
};
function Header() {
	return (
		<header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50 w-full transition-all duration-200">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo and Company Info */}
				<Link href="/" className="flex items-center gap-3 group">
					<div className="flex items-center justify-center bg-primary/10 text-primary rounded-full h-10 w-10 transition-transform group-hover:scale-105">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
							<path d="M2 17l10 5 10-5"></path>
							<path d="M2 12l10 5 10-5"></path>
						</svg>
					</div>
					<div className="flex flex-col">
						<span className="text-lg font-semibold text-foreground tracking-tight">
							<span className="text-primary">Assurances</span> ARO
						</span>
						<p className="text-xs text-muted-foreground hidden sm:block">
							La Compagnie de référence à Madagascar
						</p>
					</div>
				</Link>

				{/* Navigation Links - Desktop */}
				<nav className="hidden md:flex items-center gap-1">
					{[
						{ label: 'Particuliers', href: '/particuliers' },
						{
							label: 'Professionnels et Entreprises',
							href: '/professionnels-entreprises',
						},
						{ label: 'Contact', href: '/contact' },
					].map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="relative px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-muted transition-colors"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
					aria-label="Menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-5 w-5"
					>
						<line x1="4" x2="20" y1="12" y2="12"></line>
						<line x1="4" x2="20" y1="6" y2="6"></line>
						<line x1="4" x2="20" y1="18" y2="18"></line>
					</svg>
				</button>
			</div>
		</header>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}
			>
				<Header />
				<main className="flex-1">{children}</main>

				{/* Footer */}
				<footer className="bg-muted py-6 border-t">
					<div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
						<p>
							© {new Date().getFullYear()} Assurances ARO. Tous
							droits réservés.
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
