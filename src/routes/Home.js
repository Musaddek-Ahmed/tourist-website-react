import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://c.wallhere.com/photos/12/db/5961x3898_px_beach_couple_landscape_men_nature_Relaxation_relaxing-1011685.jpg!d"
        title="Your Journey Your Story"
        text="Choose your destination with us!"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
