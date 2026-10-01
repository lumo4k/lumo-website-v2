import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Motion } from "@/components/layout/Motion";
import { Hero } from "@/components/sections/Hero";
import {
  Problem,
  DigitalPresence,
  WebsiteValue,
  ValueComparison,
  ResponsiveDemo,
} from "@/components/sections/Story";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services, GoogleBusiness } from "@/components/sections/Services";
import { About, WhyMe } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Tech } from "@/components/sections/Tech";
import { Pricing } from "@/components/sections/Pricing";
import { CommercialTerms } from "@/components/sections/CommercialTerms";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { siteConfig } from "@/config/site";
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.brand,
        ...(siteConfig.url ? { url: siteConfig.url } : {}),
      },
      {
        "@type": "ProfessionalService",
        name: siteConfig.name || siteConfig.brand,
        description:
          "Design, desenvolvimento web e configuração de presença digital.",
        ...(siteConfig.url ? { url: siteConfig.url } : {}),
      },
    ],
  };
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problem />
        <DigitalPresence />
        <WebsiteValue />
        <Portfolio />
        <ValueComparison />
        <Services />
        <ResponsiveDemo />
        <GoogleBusiness />
        <About />
        <WhyMe />
        <Process />
        <Tech />
        <Pricing />
        <CommercialTerms />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <Motion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
