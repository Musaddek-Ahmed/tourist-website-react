import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/pic7.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
    </>
  );
}

export default About;
