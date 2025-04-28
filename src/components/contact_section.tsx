import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GoogleMapsEmbed } from '@next/third-parties/google';

export const ContactSection = () => {
	return (
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
						Nous sommes là pour répondre à toutes vos questions et
						vous accompagner dans vos démarches
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					<div className="col-span-1 lg:col-span-2">
						<Card className="shadow-md h-full overflow-hidden p-0">
							<CardContent className="p-0">
								<div className="aspect-[16/9] w-full bg-muted relative overflow-hidden">
									{/* Replace with actual map or keep as placeholder */}
									<div className="absolute inset-0">
										<GoogleMapsEmbed
											apiKey={
												process.env
													.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ??
												''
											}
											height="460px"
											width="100%"
											mode="place"
											q="Rue Des 77 Parl Fr"
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
								<CardTitle>Envoyez-nous un message</CardTitle>
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

									<Button type="submit" className="w-full">
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
							description: 'Assistance 24/7 pour les urgences',
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
	);
};
