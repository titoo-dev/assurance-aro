import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

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
