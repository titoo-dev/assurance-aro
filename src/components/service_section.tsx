import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

type Service = {
	title: string;
	description: string;
	icon: React.ReactNode;
};

const services: Service[] = [
	{
		title: 'Assurance Automobile',
		description:
			'Protection complète pour votre véhicule contre les accidents, le vol et autres risques de la route.',
		icon: (
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
				className="text-green-600"
			>
				<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.5-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
				<circle cx="7" cy="17" r="2" />
				<path d="M9 17h6" />
				<circle cx="17" cy="17" r="2" />
			</svg>
		),
	},
	{
		title: 'Assurance Habitation',
		description:
			'Protégez votre logement et vos biens contre les dommages, le vol et la responsabilité civile.',
		icon: (
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
				className="text-green-600"
			>
				<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				<polyline points="9 22 9 12 15 12 15 22" />
			</svg>
		),
	},
	{
		title: 'Assurance Scolaire',
		description:
			"Couvrez les risques scolaires et parascolaires de vos enfants pendant toute l'année scolaire.",
		icon: (
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
				className="text-green-600"
			>
				<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
				<path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
			</svg>
		),
	},
	{
		title: 'Assurance Accident de la vie',
		description:
			"Protection financière en cas d'accident de la vie quotidienne avec indemnisation rapide.",
		icon: (
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
				className="text-green-600"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="m9 12 2 2 4-4" />
			</svg>
		),
	},
	{
		title: 'Assurance Voyage',
		description:
			"Voyagez l'esprit tranquille avec une couverture complète pour vos déplacements nationaux et internationaux.",
		icon: (
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
				className="text-green-600"
			>
				<path d="M20.38 3.46 16 2a4 4 0 0 1 1.46 3.46" />
				<path d="M9.66 16.02a4 4 0 0 1-1.45-3.46" />
				<path d="M3.46 8.62 2 13s1.73 4.5 6 6c0 0 8-1.50 10-6 2-4.50.5-8.5.5-8.5S14 2 8 5c-1.95.97-3.57 2.83-4.54 3.62Z" />
				<path d="m8.5 8.5 3 3" />
				<path d="M14 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
				<path d="m14 10-3.5-3.5" />
			</svg>
		),
	},
	{
		title: 'Assurance Retraite',
		description:
			"Préparez votre avenir financier grâce à notre solution d'épargne et de pension pour votre retraite.",
		icon: (
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
				className="text-green-600"
			>
				<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
				<path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
				<path d="M12 4v9" />
			</svg>
		),
	},
];

const ServiceCard = ({
	service,
	index,
}: {
	service: Service;
	index: number;
}) => {
	const styles = [
		{
			gradient: 'from-blue-50 to-slate-50',
			accent: 'bg-blue-100',
			iconBg: 'bg-primary/10',
			hover: 'group-hover:bg-primary',
		},
		{
			gradient: 'from-indigo-50 to-slate-50',
			accent: 'bg-indigo-100',
			iconBg: 'bg-indigo-500/10',
			hover: 'group-hover:bg-indigo-600',
		},
		{
			gradient: 'from-emerald-50 to-slate-50',
			accent: 'bg-emerald-100',
			iconBg: 'bg-emerald-500/10',
			hover: 'group-hover:bg-emerald-600',
		},
	];

	const style = styles[index % 3];

	return (
		<Card
			className={`group relative overflow-hidden border-none bg-gradient-to-br ${style.gradient} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
		>
			<div
				className={`absolute top-0 right-0 w-32 h-32 ${style.accent} rounded-full -mr-16 -mt-16 opacity-70`}
			></div>
			<CardHeader className="relative z-10">
				<div
					className={`h-14 w-14 rounded-lg ${style.iconBg} flex items-center justify-center mb-4`}
				>
					{service.icon}
				</div>
				<CardTitle className="text-xl">{service.title}</CardTitle>
			</CardHeader>
			<CardContent className="pb-8 relative z-10 flex flex-col flex-grow">
				<p className="text-muted-foreground mb-6">
					{service.description}
				</p>
				<div className="mt-auto">
					<Button
						variant="outline"
						className={`${style.hover} group-hover:text-white transition-colors`}
					>
						Voir plus
						<ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export const ServiceSection = () => {
	return (
		<section
			id="services"
			className="py-24 bg-gradient-to-b from-white to-slate-50"
			aria-labelledby="services-heading"
		>
			<div className="container px-4 mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2
						id="services-heading"
						className="text-3xl font-bold tracking-tight mb-4"
					>
						Nos Services d&apos;Assurance
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Des solutions adaptées à tous vos besoins avec une
						protection complète et personnalisée
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							service={service}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
