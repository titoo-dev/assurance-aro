'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ label: 'Particuliers', href: '/particuliers' },
		{
			label: 'Professionnels et Entreprises',
			href: '/professionnels-entreprises',
		},
		{ label: 'Contact', href: '/contact' },
	];

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
					{navLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="relative px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-muted transition-colors"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Mobile Menu */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
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
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-[280px] sm:w-[350px]"
					>
						<div className="py-6 px-2">
							<DialogTitle>
								<div className="mb-8 flex items-center">
									<div className="flex items-center justify-center bg-primary/10 text-primary rounded-full h-10 w-10 mr-3">
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
									<span className="text-lg font-semibold">
										<span className="text-primary">
											Assurances
										</span>{' '}
										ARO
									</span>
								</div>
							</DialogTitle>
							<nav className="flex flex-col space-y-1">
								{navLinks.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className="flex items-center py-3 px-4 text-sm font-medium rounded-md hover:bg-muted transition-colors"
									>
										{item.label}
									</Link>
								))}
							</nav>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
