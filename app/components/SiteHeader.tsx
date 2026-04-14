import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-logo-wrap animate-fade-up">
        <Image
          src="/MainLogo.PNG"
          alt="Rangoo"
          width={220}
          height={100}
          priority
          className="header-logo"
        />
      </div>

      <nav className="site-nav mb-2" aria-label="Main navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#music">Music</a>
          </li>
          <li className="nav-item">
            <a href="#tour">Tour</a>
          </li>
          <li className="nav-item nav-item--disabled">
            <span aria-disabled="true">Merch</span>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
