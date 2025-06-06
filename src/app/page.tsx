import { ServiceSection } from '@/components/service_section';
import HeroSection from '@/components/hero_section';
import { ActualitySection } from '@/components/actuality_section';
import { ContactSection } from '@/components/contact_section';
import { MobileVersionSection } from '@/components/mobile_version_section';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<HeroSection />

			<ServiceSection />

			<MobileVersionSection />

			<ActualitySection />

			<ContactSection />
		</div>
	);
}
