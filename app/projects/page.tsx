import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";

const A="https://www.figma.com/api/mcp/asset/bfb19f48-1c24-4ffd-bfd3-b971d61df76f";

const projects=[
 {title:"AirAsia Philippines",tags:"Concert · Festival · Merchandise · Sports Event",image:`${A}/e951c.png`,href:"#"},
 {title:"Power Mac Center",tags:"Store Opening · Booth Setup · Fabrication",image:`${A}/05f10.png`,href:"/projects/power-mac-center"},
];

export default function Projects(){
 return <><SiteHeader/><main className="projects-hero">
   <div className="projects-hero"><img className="hero-image" src={`${A}/bbe7e.png`} alt="FIVE10 project"/></div>
   <section className="projects-body"><h1 className="section-title">Featured <em>Clients</em></h1>
    <div className="project-feature-grid">{projects.map(p=><Link className="feature-card" href={p.href} key={p.title}><img src={p.image} alt={p.title}/><h3>{p.title}</h3><p>{p.tags}</p></Link>)}</div>
   </section>
   <section className="projects-contact-strip"><div className="split-contact"><div><h3>Connect With Us</h3><p>Tell us what you are planning and let’s build something people remember.</p></div><div><h3>Let’s Make Things <em>Happen</em>!</h3><p>Send us a message and our team will help turn it into an experience people remember.</p><Link className="inline-button" href="/contact">Send message</Link></div></div></section>
 </main><Footer/></>;
}
