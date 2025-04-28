import React from 'react';

interface LogoProps {
	size?: number;
	className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, className }) => {
	return (
		<div
			className={`overflow-hidden rounded-full transition-transform group-hover:scale-105 mr-2 ring-1 ring-primary/20 ${className}`}
			style={{ width: size, height: size }}
		>
			<img
				src="/aro_logo.png"
				alt="Assurances ARO Logo"
				className="h-full w-full object-cover"
				width={size}
				height={size}
			/>
		</div>
	);
};
