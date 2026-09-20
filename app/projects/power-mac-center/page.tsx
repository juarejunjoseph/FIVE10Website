import SiteHeader from "../../../components/SiteHeader";
import Footer from "../../../components/Footer";

const A="https://www.figma.com/api/mcp/asset/bfb19f48-1c24-4ffd-bfd3-b971d61df76f";

export default function PowerMacCenter(){
 return <><SiteHeader/><main className="pmc-page">
  <section className="pmc-hero"><img src={`${A}/05f10.png`} alt="Power Mac Center project"/></section>
  <div className="pmc-logo-wrap"><img src={`${A}/a3a11.png`} alt="Power Mac Center"/></div>
  <h1 className="pmc-title">POWER MAC CENTER</h1>
  <p className="pmc-lead">FIVE10 Productions creates branded experiences for Power Mac Center through store openings, booth setups and in-store activations designed around customer engagement and memorable moments.</p>
  <section className="pmc-content-row">
    <div className="pmc-copy"><h2>STORE OPENINGS</h2><p>From branch launches to retail milestones, we manage the production details that turn an opening into a complete brand experience.</p></div>
    <div className="pmc-gallery"><figure><img src={`${A}/05f10.png`} alt="Power Mac Center SM Lanang"/><figcaption><strong>POWER MAC CENTER</strong><br/>SM Lanang — September, 2025</figcaption></figure><figure><img src={`${A}/62831.png`} alt="Power Mac Center Iloilo"/><figcaption><strong>POWER MAC CENTER</strong><br/>SM City Iloilo — December, 2025</figcaption></figure></div>
  </section>
  <section className="pmc-content-row">
    <div className="pmc-gallery"><figure><img src={`${A}/de635.png`} alt="Power Mac Center booth"/></figure><figure><img src={`${A}/bed8a.png`} alt="Power Mac Center booth"/></figure></div>
    <div className="pmc-copy"><h2>BOOTH SETUP</h2><p>We build branded spaces that are practical, visually consistent and ready for live audience interaction.</p></div>
  </section>
  <section className="pmc-content-row">
    <div className="pmc-copy"><h2>STORE ACTIVATIONS</h2><p>Interactive installations and activations help turn ordinary store visits into engaging brand moments.</p></div>
    <div className="pmc-gallery"><figure><img src={`${A}/026e1.png`} alt="Power Mac Center activation"/></figure><figure><img src={`${A}/de635.png`} alt="Power Mac Center activation"/></figure></div>
  </section>
 </main><Footer/></>;
}
