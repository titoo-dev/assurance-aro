import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { HeroButton } from './hero_button';

const HeroSection = () => {
	return (
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
						<div className="animate-fade-up animation-delay-500 mt-8">
							<HeroButton />
						</div>
					</div>

					<div className="relative flex justify-center items-center">
						{/* Enhanced background pulse effect */}
						<div className="absolute -inset-10 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute -inset-16 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse animation-delay-700"></div>

						{/* Outer ring with pulse animation */}
						<div className="absolute inset-0 rounded-full border-4 border-primary-foreground/20 animate-ping opacity-20"></div>

						{/* Main image container */}
						<div className="relative w-full max-w-2xl aspect-video bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center overflow-hidden animate-float-slow border border-primary-foreground/20 shadow-xl shadow-primary/5">
							{/* Subtle animated glow effect */}
							<div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/30 to-transparent opacity-70 animate-pulse-slow"></div>

							{/* Decorative corner highlights */}
							<div className="absolute top-0 left-0 w-28 h-28 bg-primary-foreground/10 rounded-br-3xl"></div>
							<div className="absolute bottom-0 right-0 w-28 h-28 bg-primary-foreground/10 rounded-tl-3xl"></div>

							{/* Floating elements */}
							{Array.from({ length: 4 }).map((_, i) => (
								<span
									key={i}
									className="absolute w-4 h-4 bg-primary-foreground/80 rounded-sm animate-float blur-sm"
									style={{
										top: `${20 + i * 15}%`,
										left: `${15 + i * 20}%`,
										animationDelay: `${i * 0.8}s`,
										animationDuration: `${4 + i}s`,
										transform: `rotate(${45 * i}deg)`,
									}}
								/>
							))}

							{/* Image container with stylized frame - increased from 92% to 96% */}
							<div className="relative w-[96%] h-[96%] rounded-xl overflow-hidden border border-primary-foreground/20">
								<div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/10 to-transparent rotate-45"></div>
								<Image
									src="/hero_image.jpg"
									alt="ARO Assurances Logo"
									fill
									className="object-cover rounded-xl"
									priority
								/>
								{/* Subtle overlay to enhance image */}
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30"></div>
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
	);
};

export default HeroSection;
