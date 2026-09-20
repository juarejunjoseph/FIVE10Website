import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";

const A="https://www.figma.com/api/mcp/asset/d9c0e694-e84f-4000-8427-9bc6e53fa32d";

export default function About(){
 return <><SiteHeader/><main className="page-shell">
  <section className="peeps-hero">
    <img src={`${A}/e951c.png`} alt="" />
    <div><h1><span>WE</span> MAKE<br/>THINGS<br/><span>HAPPEN.</span></h1></div>
  </section>
  <section className="about-values">
    <h2 className="section-title">WHO WE ARE</h2>
    <p className="copy">FIVE10 Productions is a creative production and marketing partner built to turn ideas into experiences. We bring together event production, brand activation, fabrication, content and execution to help organizations connect with their audiences.</p>
    <h2 className="section-title" style={{marginTop:90}}>CORE VALUES</h2>
    <div className="values-grid">
      <div className="value-card">CREATIVITY</div><div className="value-card">COLLABORATION</div><div className="value-card">EXECUTION</div>
    </div>
    <div className="vm-grid">
      <article className="vm-card"><h3>VISION</h3><p>To create memorable experiences through bold ideas, thoughtful design and reliable execution.</p></article>
      <article className="vm-card"><h3>MISSION</h3><p>To help brands and organizations build meaningful connections through creative events and marketing solutions.</p></article>
    </div>
  </section>
  <section className="offer-section">
    <h2 className="section-title">WHAT WE OFFER</h2>
    <div className="offer-grid">
      <article className="offer-card"><h3>EVENT MANAGEMENT</h3><p>We are a solid team determined to execute projects for you and your business. From event planning to production, we can make it happen.</p></article>
      <article className="offer-card"><h3>MARKETING SOLUTIONS</h3><p>We are passionate about helping you build your brand portfolio and reach your desired clientele.</p></article>
    </div>
  </section>
  <section className="about-video"><img src={`${A}/e951c.png`} alt="FIVE10 production reel"/></section>
 </main><Footer/></>;
}
