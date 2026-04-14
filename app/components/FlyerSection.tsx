import FlyerCarousel from "./FlyerCarousel";
import PageSection from "./PageSection";

export default function FlyerSection() {
  return (
    <>
      <div className="section-divider" />

      <PageSection ariaLabel="Flyers" className="xl:px-80">
        <div className="animate-fade-up">
          <FlyerCarousel />
        </div>
      </PageSection>

      <div className="section-divider" />
    </>
  );
}
