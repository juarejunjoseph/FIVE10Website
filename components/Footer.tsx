import Link from "next/link";

const ASSET = "https://www.figma.com/api/mcp/asset/28fc86cc-d3af-49ba-a085-8fad769c3ae1";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={`${ASSET}/f880a.png`} alt="FIVE10 Productions" />
      </div>

      <div className="footer-links">
        <h3>Useful Links</h3>
        <Link href="/">Home</Link>
        <Link href="/about">Who We Are</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Feedback</Link>

        <h3 className="footer-social-title">Follow Us on Social Media</h3>
        <div className="social-row">
          <a href="https://www.facebook.com/five10productions" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src={`${ASSET}/62a2e.png`} alt="" />
          </a>
          <a href="https://www.instagram.com/five10productions/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src={`${ASSET}/3538b.png`} alt="" />
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p><strong>MAIN OFFICE</strong><br />2nd Floor, Josefina Bldg., Magallanes St., Roxas City<br />09123456789</p>
        <p><strong>SATELLITE OFFICE</strong><br />4th Floor, Exanne Bldg., One Asia Business Center, Binan, Laguna<br />09123456789</p>
        <p><strong>EMAIL:</strong><br />fiveproductions@five10productionscorp.com</p>
        <p><strong>OFFICE HOURS:</strong><br />7:30 AM - 6:00 PM</p>
      </div>
    </footer>
  );
}
