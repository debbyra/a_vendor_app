import Nav from "../components/Nav";
import SecNav from "../components/SecNav";
import Hero from "../components/LandingPageComponents/Hero";
import MainSection from "../components/LandingPageComponents/MainSection";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Nav />
            <SecNav />
            <Hero />
            <MainSection />
        </div>
    )
}

export default LandingPage;