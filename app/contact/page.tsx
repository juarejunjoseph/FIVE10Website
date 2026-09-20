import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function Contact(){
 return <><SiteHeader/><main className="contact-page">
  <section className="contact-hero">
    <h1>LET’S MAKE THINGS <em>HAPPEN!</em></h1>
    <ContactForm/>
  </section>
 </main><Footer/></>;
}
