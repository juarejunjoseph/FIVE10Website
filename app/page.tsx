import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import ProjectCarousel from "../components/ProjectCarousel";
import LogoParallax from "../components/LogoParallax";

const A="https://www.figma.com/api/mcp/asset/34c35516-e914-4962-a811-000cd1cbd0b6";

export default function Home(){
  const slides=[
    {image:`${A}/332fa.png`,title:"AirAsia Fiesta: Iloilo Dinagyang 2026",location:"Iloilo City"},
    {image:`${A}/1de4c.png`,title:"Featured Project",location:"FIVE10 Productions"},
    {image:`${A}/b68f9.png`,title:"Featured Experience",location:"FIVE10 Productions"}
  ];
  return <><SiteHeader/><main className="page-shell">
    <section className="hero-claim">
      <div className="hero-claim-inner">
        <h1><span>WE</span> MAKE<br/>THINGS<br/><span>HAPPEN.</span></h1>
        <Link className="hero-button" href="/projects">See All Projects</Link>
      </div>
    </section>
    <section className="media-strip"><img src={`${A}/e951c.png`} alt="FIVE10 production" /><div className="media-overlay"/></section>
    <section className="featured-section">
      <h2 className="section-title">Featured <em>Projects</em></h2>
      <ProjectCarousel slides={slides}/>
    </section>
    <section className="clients-section">
      <h2 className="section-title">Who We Have <em>Worked With</em></h2>
      <LogoParallax image={`${A}/1b863.png`} />
    </section>
    <section className="cta-section">
      <h2>LET’S MAKE THINGS <em>HAPPEN!</em></h2>
      <p>Send us a message and our team will help turn it into an experience people remember.</p>
      <Link className="cta-button" href="/contact">Send message</Link>
    </section>
  </main><Footer/></>;
}
