import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/pic5.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-low"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
