import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

export const Footer = () => {
	return (
		<footer className="bg-background border-t border-border mt-auto py-8 md:py-12 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[120px] transform translate-x-1/4"></div>
				<div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-[120px] transform -translate-x-1/4"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
					<div className="space-y-4">
						<div className="flex items-center gap-2.5">
							<Logo />
							<h3 className="text-foreground font-semibold">
								Assurances ARO
							</h3>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							La Compagnie de référence à Madagascar depuis plus
							de 50 ans, offrant des solutions d&apos;assurance
							complètes et fiables.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="text-foreground font-medium text-base">
							Services
						</h4>
						<nav className="flex flex-col space-y-2.5">
							{[
								'Particuliers',
								'Professionnels',
								'Entreprises',
								'Assistance',
							].map((item) => (
								<Link
									key={item}
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center"
								>
									{item}
								</Link>
							))}
						</nav>
					</div>

					<div className="space-y-4">
						<h4 className="text-foreground font-medium text-base">
							Entreprise
						</h4>
						<nav className="flex flex-col space-y-2.5">
							{[
								'À propos',
								'Carrières',
								'Actualités',
								'Partenaires',
							].map((item) => (
								<Link
									key={item}
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center"
								>
									{item}
								</Link>
							))}
						</nav>
					</div>

					<div className="space-y-4">
						<h4 className="text-foreground font-medium text-base">
							Contact
						</h4>
						<div className="space-y-3.5 text-sm text-muted-foreground">
							<div className="flex items-center gap-2.5 group">
								<div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20 transition-colors duration-200">
									<Phone className="h-4 w-4 text-primary" />
								</div>
								<span className="group-hover:text-foreground transition-colors duration-200">
									020 22 201 54
								</span>
							</div>
							<div className="flex items-center gap-2.5 group">
								<div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20 transition-colors duration-200">
									<Mail className="h-4 w-4 text-primary" />
								</div>
								<span className="group-hover:text-foreground transition-colors duration-200">
									contact@aro.mg
								</span>
							</div>
							<div className="flex items-start gap-2.5 group">
								<div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20 transition-colors duration-200">
									<MapPin className="h-4 w-4 text-primary" />
								</div>
								<span className="group-hover:text-foreground transition-colors duration-200">
									Antsahavola, Antananarivo 101
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-border/60 text-sm text-muted-foreground">
					<p className="text-center sm:text-left mb-4 sm:mb-0">
						© {new Date().getFullYear()} Assurances ARO. Tous droits
						réservés.
					</p>
					<div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
						{['Confidentialité', 'Conditions', 'Accessibilité'].map(
							(item) => (
								<Link
									key={item}
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors duration-200"
								>
									{item}
								</Link>
							)
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};
