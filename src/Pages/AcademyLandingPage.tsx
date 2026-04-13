import BenefitsSection from "../Components/Benefits/BenefitsSection"
import FooterSection from "../Components/Contact/FooterSection"
import FrequentlySection from "../Components/FrequentlyAsked/FrequentlySection"
import Header from "../Components/Header/Header"
import NavBar from "../Components/Header/NavBar"
import HeroSection from "../Components/Hero/HeroSection"
import NavigateSection from "../Components/NavigateOurPage/NavigateSection"
import TestimonialsSection from "../Components/Testimonials/TestimonialsSection"
import styles from "./LandingPage.module.css"
const AcademyLandingPage = () => {
  return (
    <div className={styles.Container}>
        <Header>
            <NavBar/>
        </Header>
        <main>
            <HeroSection/>
            <BenefitsSection/>
            <TestimonialsSection/>
            <FrequentlySection/>
            <NavigateSection/>
        </main>
        <footer>
            <FooterSection/>
        </footer>
    </div>
  )
}

export default AcademyLandingPage