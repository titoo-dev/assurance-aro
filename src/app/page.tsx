import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Mail, ChevronRight, MessageSquare } from 'lucide-react';
import { ServiceSection } from '@/components/service_section';
import HeroSection from '@/components/hero_section';
import { ActualitySection } from '@/components/actuality_section';
import { ContactSection } from '@/components/contact_section';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroSection />

			{/* Services Section */}
			<ServiceSection />

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

			<ActualitySection />

			{/* Contact Section */}
			<ContactSection />
		</div>
	);
}
