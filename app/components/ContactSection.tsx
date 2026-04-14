import PageSection from "./PageSection";

export default function ContactSection() {
  return (
    <PageSection
      id="contact"
      ariaLabel="Contact"
      className="text-center xl:px-80"
    >
      <header className="animate-fade-up">
        <p className="section-label">Get In Touch</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-widest uppercase text-cream mb-8">
          Contact
        </h2>
      </header>

      <div className="animate-fade-up animate-fade-up--delay-1">
        <p className="text-neutral-400 mb-2 uppercase tracking-[0.2em] text-sm font-light">
          Booking
        </p>
        <a
          href="mailto:tissi@eleventhhourbooking.com"
          className="inline-block mt-2 text-xl sm:text-2xl text-orange hover:text-orange-bright transition-colors border-b border-orange/30 hover:border-orange-bright pb-1"
        >
          tissi@eleventhhourbooking.com
        </a>
      </div>
    </PageSection>
  );
}
