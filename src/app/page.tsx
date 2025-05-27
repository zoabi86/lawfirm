import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Navbar />
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.1}>
        <Services />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <About />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.3}>
        <ContactForm />
      </FadeInWhenVisible>
      <Footer />
    </div>
  );
}

