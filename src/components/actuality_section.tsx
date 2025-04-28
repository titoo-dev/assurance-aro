import { Button } from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Calendar, Award, Handshake, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Data model
interface ActualityItem {
	id: string;
	title: string;
	description: string;
	image: string;
	date: string;
	icon: React.ElementType;
	alt: string;
}

// Data separated from the UI
const actualityItems: ActualityItem[] = [
	{
		id: 'ceo-summit',
		title: 'CEO SUMMIT - Décembre 2024',
		description: 'ASSURANCES ARO - Assureur Officiel',
		image: '/ceo-summit.jpg',
		date: 'Décembre 2024',
		icon: Calendar,
		alt: 'CEO SUMMIT - Décembre 2024',
	},
	{
		id: 'quality-choice',
		title: 'QUALITY CHOICE PRIZE DIAMOND 2024',
		description:
			'Assurances ARO reçoit le Quality Choice Prize Diamond 2024',
		image: '/quality-choice.jpg',
		date: '2024',
		icon: Award,
		alt: 'QUALITY CHOICE PRIZE DIAMOND 2024',
	},
	{
		id: 'partenariat',
		title: "PARTENARIAT avec le Ministère du Tourisme et de l'Artisanat",
		description: 'Signature de la Convention du 18 Décembre 2024',
		image: '/partenariat.jpg',
		date: '18 Décembre 2024',
		icon: Handshake,
		alt: "PARTENARIAT avec le Ministère du Tourisme et de l'Artisanat",
	},
];

// ActualityCard component for each card
const ActualityCard = ({ item }: { item: ActualityItem }) => {
	const { title, description, image, date, icon: Icon, alt } = item;

	return (
		<Card className="group overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full pt-0">
			<div className="relative h-52 w-full overflow-hidden">
				<Image
					src={image}
					alt={alt}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute bottom-0 left-0 bg-primary/90 text-primary-foreground px-3 py-1 flex items-center gap-2 rounded-tr-md">
					<Icon className="h-4 w-4" />
					<span className="text-sm font-medium">{date}</span>
				</div>
			</div>
			<CardHeader className="pb-2 pt-4">
				<CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
			</CardHeader>
			<CardContent className="pb-5">
				<p className="text-muted-foreground line-clamp-3">
					{description}
				</p>
			</CardContent>
			<CardFooter className="pt-0 mt-auto">
				<Button
					variant="outline"
					className="w-full group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center gap-2"
				>
					Voir Plus
					<ChevronRight className="h-4 w-4" />
				</Button>
			</CardFooter>
		</Card>
	);
};

// Main component
export const ActualitySection = () => {
	return (
		<section className="py-24 bg-gradient-to-b from-white to-slate-50">
			<div className="container px-4 mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold tracking-tight mb-4">
						Nos Actualités
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Découvrez les dernières nouvelles et événements
						d&aposAssurances ARO
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{actualityItems.map((item) => (
						<ActualityCard key={item.id} item={item} />
					))}
				</div>

				<div className="mt-16 text-center">
					<Button variant="default" size="lg" className="px-8">
						Toutes nos actualités
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="ml-2 h-5 w-5"
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</Button>
				</div>
			</div>
		</section>
	);
};
