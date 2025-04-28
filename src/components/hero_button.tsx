'use client';
import { CircleArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export const HeroButton = () => {
	return (
		<Button
			size="lg"
			className="group relative overflow-hidden bg-primary-foreground/90 text-primary hover:bg-primary-foreground transition-all duration-300 px-8 py-6 rounded-full shadow-lg shadow-primary-foreground/20 hover:cursor-pointer"
			onClick={() => {
				const servicesSection = document.getElementById('services');
				servicesSection?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}}
		>
			<span className="relative z-10 flex items-center gap-2 font-medium text-lg">
				Explorer nos services
				<CircleArrowDown className="ml-1 animate-bounce" size={20} />
			</span>
			<span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-foreground to-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
		</Button>
	);
};
