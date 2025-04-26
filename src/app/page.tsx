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
									<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-right text-primary-foreground">
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
									className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
								>
									Professionnels et Entreprises
								</Button>
							</div>
						</div>

						<div className="relative flex justify-center items-center">
							{/* Enhanced background pulse effect */}
							<div className="absolute -inset-10 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
							<div className="absolute -inset-16 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse animation-delay-700"></div>

							{/* Outer ring with pulse animation */}
							<div className="absolute inset-0 rounded-full border-4 border-primary-foreground/20 animate-ping opacity-20"></div>

							{/* Main image container */}
							<div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 backdrop-blur-sm rounded-full p-6 flex items-center justify-center overflow-hidden animate-float-slow border border-primary-foreground/20 shadow-lg shadow-primary/5">
								{/* Subtle rotating glow effect */}
								<div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/30 to-transparent opacity-70 animate-spin-slow"></div>

								{/* Small orbiting dots */}
								{Array.from({ length: 5 }).map((_, i) => (
									<span
										key={i}
										className="absolute w-2 h-2 bg-primary-foreground/80 rounded-full animate-orbit blur-sm"
										style={{
											animationDelay: `${i * 0.7}s`,
											animationDuration: `${
												6 + i * 0.5
											}s`,
										}}
									/>
								))}

								{/* Image container with reflection */}
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

							{/* Decorative highlight dots */}
							<div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary-foreground/80 rounded-full blur-sm animate-pulse"></div>
							<div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary-foreground/60 rounded-full blur-sm animate-pulse animation-delay-500"></div>
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

			{/* Download app from store section */}
			<section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative">
				{/* Background decoration */}
				<div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
					{/* Abstract path */}
					<svg
						className="absolute top-1/4 right-1/4 text-primary/5 w-72 h-72 opacity-30"
						viewBox="0 0 200 200"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M44.7,-76.4C58.9,-69.8,71.8,-59.2,79.6,-45.2C87.4,-31.2,90,-13.9,88.8,2.8C87.6,19.5,82.7,35.5,73.5,48.4C64.3,61.3,50.8,71,36.3,76.4C21.8,81.8,6.2,82.8,-8.2,79.1C-22.6,75.3,-35.9,66.8,-48.4,56.6C-61,46.4,-72.9,34.5,-78.1,19.9C-83.4,5.3,-82,-12,-76,-26.8C-70,-41.6,-59.3,-53.9,-46.2,-61C-33,-68.2,-17.5,-70.2,-1.1,-68.4C15.4,-66.5,30.5,-62.9,44.7,-76.4Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>

				<div className="container px-4 mx-auto max-w-7xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						{/* Image and mockups */}
						<div className="relative order-2 md:order-1">
							<div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-70"></div>
							<div className="relative flex justify-center">
								{/* Phone mockup with shadow */}
								<div className="relative z-20 transform -rotate-6 translate-x-8">
									<div className="rounded-[2.5rem] overflow-hidden border-8 border-black h-[500px] w-[250px] shadow-2xl relative">
										<Image
											src="/app-screen-1.jpg"
											alt="ARO Assurances mobile app"
											fill
											className="object-cover"
										/>
									</div>
								</div>
								{/* Second phone mockup */}
								<div className="relative z-10 transform rotate-6 -translate-x-8">
									<div className="rounded-[2.5rem] overflow-hidden border-8 border-black h-[500px] w-[250px] shadow-2xl relative">
										<Image
											src="/app-screen-2.jpg"
											alt="ARO Assurances mobile app"
											fill
											className="object-cover"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Content */}
						<div className="space-y-8 order-1 md:order-2">
							<div>
								<h4 className="text-primary font-medium mb-2">
									Téléchargez notre application
								</h4>
								<h2 className="text-3xl font-bold tracking-tight mb-4">
									Gérez vos assurances en mobilité
								</h2>
								<p className="text-muted-foreground text-lg">
									Accédez à vos contrats, déclarez vos
									sinistres et contactez votre conseiller à
									tout moment depuis notre application mobile
									intuitive.
								</p>
							</div>

							<div className="space-y-4">
								{[
									{
										text: 'Déclaration de sinistre simplifiée',
										icon: '📱',
									},
									{
										text: 'Assistance géolocalisée 24/7',
										icon: '🌍',
									},
									{
										text: 'Suivi des remboursements en temps réel',
										icon: '⏱️',
									},
									{
										text: 'Consultation de vos contrats',
										icon: '📄',
									},
								].map((feature, i) => (
									<div
										key={i}
										className="flex items-center gap-4"
									>
										<div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
											<span className="text-lg">
												{feature.icon}
											</span>
										</div>
										<p className="font-medium">
											{feature.text}
										</p>
									</div>
								))}
							</div>

							<div className="flex flex-wrap gap-4 pt-4">
								<Link
									href="#"
									className="transform transition-transform hover:scale-105"
								>
									<Image
										src="/app-store-badge.png"
										alt="Télécharger sur App Store"
										width={170}
										height={56}
										className="h-14 w-auto"
									/>
								</Link>
								<Link
									href="#"
									className="transform transition-transform hover:scale-105"
								>
									<Image
										src="/google-play-badge.png"
										alt="Télécharger sur Google Play"
										width={190}
										height={56}
										className="h-14 w-auto"
									/>
								</Link>
							</div>

							<div className="flex items-center gap-4 pt-2">
								<div className="flex">
									{[1, 2, 3, 4, 5].map((star) => (
										<svg
											key={star}
											className="w-5 h-5 text-yellow-400"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
										</svg>
									))}
								</div>
								<span className="text-sm text-muted-foreground">
									4.8/5 basé sur plus de 500 avis
								</span>
							</div>
						</div>
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
