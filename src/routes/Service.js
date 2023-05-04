import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/pic2.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-top"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
