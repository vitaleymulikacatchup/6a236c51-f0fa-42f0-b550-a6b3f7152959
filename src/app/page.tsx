"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 1,
      textAnimation: "slide",
    }}>
      <NavbarLayoutFloatingOverlay 
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Footer', id: 'footer' },
        ]}
        logoSrc="/images/logo.svg"
        logoWidth={200}
        logoHeight={50}
        buttonText="Buy Meme Coin"
        onButtonClick={() => alert('Buy now!')}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero title="Welcome to DogMemecoin!" subtitle="Join the fun!" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="About DogMemecoin" descriptions={["DogMemecoin is a meme token that embodies community spirit.", "Join us for fun and earnings!"]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[
          { title: "Step 1", description: "Set up your wallet", image: "/images/placeholder1.avif", position: "left", isCenter: false },
          { title: "Step 2", description: "Choose an exchange", image: "/images/placeholder2.avif", position: "center", isCenter: true },
          { title: "Step 3", description: "Purchase DogMemecoin", image: "/images/placeholder3.avif", position: "right", isCenter: false }
        ]} />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics Overview" description="Understanding the basis of our token distribution." tokenData={[
          { value: "10M", description: "Total Supply" },
          { value: "2M", description: "Circulating Supply" },
        ]} />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ items={[
          { title: "What is DogMemecoin?", content: "A fun meme token for the community." },
          { title: "How do I buy DogMemecoin?", content: "Follow the how-to-buy section for guidance." }
        ]} />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="DogMemecoin Logo" logoText="DogMemecoin" className="footer-logo" />
      </div>
    </SiteThemeProvider>
  );
}