import BandsInTownWidget from "./BandsInTownWidget";
import PageSection from "./PageSection";

export default function TourSection() {
  return (
    <>
      <PageSection id="tour" ariaLabel="Tour dates" className="xl:px-80">
        <header className="tour-header animate-fade-up">
          <p className="section-label">Live</p>
          <h2 className="tour-title">Tour Dates</h2>
        </header>

        <div className="animate-fade-up animate-fade-up--delay-1">
          <BandsInTownWidget />
        </div>
      </PageSection>

      <div className="section-divider" />
    </>
  );
}
