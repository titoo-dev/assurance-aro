import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Mail, ChevronRight, MessageSquare } from 'lucide-react';
import { ServiceSection } from '@/components/service_section';
import HeroSection from '@/components/hero_section';
import { ActualitySection } from '@/components/actuality_section';
import { ContactSection } from '@/components/contact_section';
import { MobileVersionSection } from '@/components/mobile_version_section';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<HeroSection />

			{/* Services Section */}
			<ServiceSection />

			{/* Download app from store section */}
			<MobileVersionSection />

			<ActualitySection />

			{/* Contact Section */}
			<ContactSection />
		</div>
	);
}
