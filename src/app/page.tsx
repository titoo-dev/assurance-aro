import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Mail, ChevronRight, MessageSquare } from 'lucide-react';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary/80 text-primary-foreground min-h-[85vh] flex items-center">
				{/* Animated particles */}
				<div className="absolute inset-0 opacity-30">
					{Array.from({ length: 20 }).map((_, i) => (
						<span
							key={i}
							className="absolute rounded-full bg-primary-foreground/30 animate-float"
							style={{
								top: `${Math.random() * 100}%`,
								left: `${Math.random() * 100}%`,
								width: `${Math.random() * 12 + 4}px`,
								height: `${Math.random() * 12 + 4}px`,
								animationDuration: `${Math.random() * 10 + 5}s`,
								animationDelay: `${Math.random() * 5}s`,
							}}
						/>
					))}
				</div>

				{/* Decorative patterns */}
				<div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-2xl"></div>
				<div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary-foreground/5 rounded-full blur-xl"></div>

				{/* Mesh gradient overlay */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>

				<div className="container px-4 py-24 mx-auto max-w-7xl relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="relative">
								<div className="absolute -inset-1 bg-gradient-to-r from-primary-foreground/20 to-primary-foreground/5 rounded-lg blur opacity-30"></div>
								<div className="relative">
									<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-right">
										Assurances ARO
									</h1>
									<p className="text-xl text-primary-foreground/90 animate-fade-right animation-delay-300">
										La Compagnie de référence à Madagascar
									</p>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-500">
								<Button
									size="lg"
									variant="default"
									className="font-medium bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
								>
									Particuliers
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
								>
									Professionnels et Entreprises
								</Button>
							</div>
						</div>

						<div className="relative flex justify-center items-center">
							<div className="absolute -inset-10 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
							<div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 backdrop-blur-sm rounded-full p-6 flex items-center justify-center overflow-hidden animate-float-slow border border-primary-foreground/20 shadow-lg shadow-primary-foreground/5">
								<div className="relative w-full h-full rounded-full overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/10 to-transparent rotate-45"></div>
									<Image
										src="/hero_banner.jpg"
										alt="ARO Assurances Logo"
										fill
										className="object-cover rounded-full"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Wave effect at bottom */}
				<div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 320"
						className="absolute bottom-0 w-full h-auto"
					>
						<path
							fill="oklch(0.98 0.015 97)"
							fillOpacity="1"
							d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
				</div>

				{/* Floating dots grid */}
				<div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-[0.15]">
					{Array.from({ length: 12 * 8 }).map((_, i) => (
						<div
							key={i}
							className="aspect-square rounded-full bg-primary-foreground w-1 h-1"
						></div>
					))}
				</div>
			</section>

			{/* Services Section */}
			<section className="py-24 bg-gradient-to-b from-white to-slate-50">
				<div className="container px-4 mx-auto max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight mb-4">
							Nos Services d&apos;Assurance
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Des solutions adaptées à tous vos besoins avec une
							protection complète et personnalisée
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Card 1 */}
						<Card className="group relative overflow-hidden border-none bg-gradient-to-br from-blue-50 to-slate-50 shadow-md hover:shadow-xl transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-70"></div>
							<CardHeader className="relative z-10">
								<div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
										className="text-primary"
									>
										<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<CardTitle className="text-xl">
									Particuliers
								</CardTitle>
							</CardHeader>
							<CardContent className="pb-8 relative z-10">
								<p className="text-muted-foreground mb-6">
									Solutions d&apos;assurance complètes pour
									vous et votre famille. Protection adaptée à
									vos besoins personnels.
								</p>
								<Button
									variant="outline"
									className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
								>
									Découvrir nos offres
									<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</CardContent>
						</Card>

						{/* Card 2 */}
						<Card className="group relative overflow-hidden border-none bg-gradient-to-br from-indigo-50 to-slate-50 shadow-md hover:shadow-xl transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -mr-16 -mt-16 opacity-70"></div>
							<CardHeader className="relative z-10">
								<div className="h-14 w-14 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
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
										className="text-indigo-600"
									>
										<path d="M18 8h1a4 4 0 1 1 0 8h-1"></path>
										<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
										<line
											x1="6"
											y1="1"
											x2="6"
											y2="4"
										></line>
										<line
											x1="10"
											y1="1"
											x2="10"
											y2="4"
										></line>
										<line
											x1="14"
											y1="1"
											x2="14"
											y2="4"
										></line>
									</svg>
								</div>
								<CardTitle className="text-xl">
									Professionnels
								</CardTitle>
							</CardHeader>
							<CardContent className="pb-8 relative z-10">
								<p className="text-muted-foreground mb-6">
									Protégez votre activité professionnelle avec
									des couvertures adaptées aux risques de
									votre secteur.
								</p>
								<Button
									variant="outline"
									className="group-hover:bg-indigo-600 group-hover:text-white transition-colors"
								>
									Voir nos solutions
									<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</CardContent>
						</Card>

						{/* Card 3 */}
						<Card className="group relative overflow-hidden border-none bg-gradient-to-br from-emerald-50 to-slate-50 shadow-md hover:shadow-xl transition-all duration-300">
							<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 opacity-70"></div>
							<CardHeader className="relative z-10">
								<div className="h-14 w-14 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
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
										className="text-emerald-600"
									>
										<rect
											x="2"
											y="7"
											width="20"
											height="14"
											rx="2"
											ry="2"
										></rect>
										<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
									</svg>
								</div>
								<CardTitle className="text-xl">
									Entreprises
								</CardTitle>
							</CardHeader>
							<CardContent className="pb-8 relative z-10">
								<p className="text-muted-foreground mb-6">
									Solutions sur mesure pour protéger votre
									entreprise, vos employés et garantir la
									continuité de vos activités.
								</p>
								<Button
									variant="outline"
									className="group-hover:bg-emerald-600 group-hover:text-white transition-colors"
								>
									Explorer nos offres
									<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</CardContent>
						</Card>
					</div>

					<div className="mt-16 text-center">
						<Button variant="default" size="lg" className="px-8">
							Tous nos services d&apos;assurance
							<ChevronRight className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
				{/* Background decorative elements */}
				<div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
					<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
					<div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-xl"></div>
				</div>

				<div className="container px-4 mx-auto max-w-7xl relative z-10">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl font-bold tracking-tight mb-4">
							Contactez-nous
						</h2>
						<p className="text-muted-foreground">
							Nous sommes là pour répondre à toutes vos questions
							et vous accompagner dans vos démarches
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
						<div className="col-span-1 lg:col-span-2">
							<Card className="shadow-md h-full overflow-hidden">
								<CardContent className="p-0">
									<div className="aspect-[16/9] w-full bg-muted relative overflow-hidden">
										{/* Replace with actual map or keep as placeholder */}
										<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
											<Image
												src="/map-placeholder.jpg"
												alt="Carte"
												fill
												className="object-cover opacity-90"
											/>
										</div>
									</div>
									<div className="p-6">
										<h3 className="text-lg font-semibold mb-4">
											Notre siège principal
										</h3>
										<div className="space-y-4">
											<div className="flex items-start gap-3">
												<MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
												<p className="text-muted-foreground">
													Rue des 77 parlementaires
													français BP 42 Antsahavola -
													Antananarivo 101
												</p>
											</div>
											<div className="flex items-center gap-3">
												<Phone className="h-5 w-5 text-primary flex-shrink-0" />
												<p className="text-muted-foreground">
													020 22 201 54
												</p>
											</div>
											<div className="flex items-center gap-3">
												<Mail className="h-5 w-5 text-primary flex-shrink-0" />
												<p className="text-muted-foreground">
													contact@aro.mg
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						<div>
							<Card className="shadow-md h-full">
								<CardHeader>
									<CardTitle>
										Envoyez-nous un message
									</CardTitle>
								</CardHeader>
								<CardContent>
									<form className="space-y-4">
										<div className="grid gap-2">
											<label
												htmlFor="name"
												className="text-sm font-medium"
											>
												Nom complet
											</label>
											<input
												id="name"
												className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Votre nom"
											/>
										</div>

										<div className="grid gap-2">
											<label
												htmlFor="email"
												className="text-sm font-medium"
											>
												Email
											</label>
											<input
												id="email"
												type="email"
												className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="votre-email@exemple.com"
											/>
										</div>

										<div className="grid gap-2">
											<label
												htmlFor="message"
												className="text-sm font-medium"
											>
												Message
											</label>
											<textarea
												id="message"
												className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Comment pouvons-nous vous aider?"
											/>
										</div>

										<Button
											type="submit"
											className="w-full"
										>
											Envoyer le message
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								icon: (
									<Phone className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />
								),
								title: 'Service Client',
								description: 'Du lundi au vendredi de 8h à 17h',
								action: '020 22 201 55',
							},
							{
								icon: (
									<Mail className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />
								),
								title: 'Support Technique',
								description:
									'Assistance pour vos démarches en ligne',
								action: 'support@aro.mg',
							},
							{
								icon: (
									<MessageSquare className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-full" />
								),
								title: 'Urgences',
								description:
									'Assistance 24/7 pour les urgences',
								action: '020 22 201 56',
							},
						].map((item, i) => (
							<Card
								key={i}
								className="border-none shadow-sm hover:shadow-md transition-shadow"
							>
								<CardContent className="pt-6">
									<div className="flex flex-col items-center text-center space-y-3">
										{item.icon}
										<h3 className="font-semibold">
											{item.title}
										</h3>
										<p className="text-muted-foreground text-sm">
											{item.description}
										</p>
										<Button
											variant="link"
											className="text-primary font-medium"
										>
											{item.action}
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 text-slate-200 py-16 mt-auto relative overflow-hidden">
				{/* Background decorative elements */}
				<div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
					<div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
					<div className="absolute bottom-0 left-0 w-72 h-72 bg-primary rounded-full blur-[100px]"></div>
				</div>

				<div className="container px-4 mx-auto max-w-7xl relative z-10">
					<div className="flex flex-col md:flex-row justify-between gap-10">
						<div className="space-y-4 md:max-w-xs">
							<div className="flex items-center">
								<Image
									src="/aro-logo-white.svg"
									alt="ARO Assurances"
									width={40}
									height={40}
									className="mr-3"
								/>
								<h3 className="text-white text-xl font-semibold">
									Assurances ARO
								</h3>
							</div>
							<p className="text-slate-400">
								La Compagnie de référence à Madagascar depuis
								plus de 50 ans, offrant des solutions
								d&apos;assurance complètes et fiables.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
							<div className="space-y-3">
								<h4 className="text-white font-medium">
									Services
								</h4>
								<ul className="space-y-2 text-sm">
									{[
										'Particuliers',
										'Professionnels',
										'Entreprises',
										'Assistance',
									].map((item) => (
										<li key={item}>
											<Link
												href="#"
												className="text-slate-400 hover:text-white transition-colors"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-3">
								<h4 className="text-white font-medium">
									Entreprise
								</h4>
								<ul className="space-y-2 text-sm">
									{[
										'À propos',
										'Carrières',
										'Actualités',
										'Partenaires',
									].map((item) => (
										<li key={item}>
											<Link
												href="#"
												className="text-slate-400 hover:text-white transition-colors"
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-4">
								<h4 className="text-white font-medium">
									Contact
								</h4>
								<div className="space-y-3 text-sm text-slate-400">
									<div className="flex items-center gap-2">
										<Phone className="h-4 w-4" />
										<span>020 22 201 54</span>
									</div>
									<div className="flex items-center gap-2">
										<Mail className="h-4 w-4" />
										<span>contact@aro.mg</span>
									</div>
									<div className="flex items-start gap-2">
										<MapPin className="h-4 w-4 mt-0.5" />
										<span>
											Antsahavola, Antananarivo 101
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row justify-between items-center pt-10 mt-10 border-t border-slate-800/80 text-sm text-slate-400">
						<p>
							© {new Date().getFullYear()} Assurances ARO. Tous
							droits réservés.
						</p>
						<div className="flex gap-6 mt-4 md:mt-0">
							<Link
								href="#"
								className="hover:text-white transition-colors"
							>
								Confidentialité
							</Link>
							<Link
								href="#"
								className="hover:text-white transition-colors"
							>
								Conditions
							</Link>
							<Link
								href="#"
								className="hover:text-white transition-colors"
							>
								Accessibilité
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
