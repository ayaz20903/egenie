import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import RealtimeAnswers from "../components/RealtimeAnswers"
import IntegrationsSection from "../components/IntegrationsSection"
import ModelsShowcase from "../components/ModelsShowcase"
import FAQ from "../components/FAQ"
import PricingSection from "../components/PricingSection"
import ContactSection from "../components/ContactSection"
export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <RealtimeAnswers/>
      <Features/>
      {/* <IntegrationsSection/> */}
      <ModelsShowcase/>
      <FAQ/>
      <PricingSection/>
      <ContactSection/>
    </>
  )
}