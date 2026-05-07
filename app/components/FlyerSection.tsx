import fs from "fs";
import path from "path";
import FlyerCarousel from "./FlyerCarousel";
import PageSection from "./PageSection";

export default function FlyerSection() {
  const flyersDir = path.join(process.cwd(), "public", "flyers");
  let flyers: string[] = [];

  try {
    const files = fs.readdirSync(flyersDir);
    flyers = files
      .filter((f) => f.endsWith(".webp"))
      .sort() // Alphabetical sort allows the user to reorder by renaming
      .map((f) => `/flyers/${f}`);
  } catch (error) {
    console.error("Error reading flyers directory:", error);
  }

  if (flyers.length === 0) return null;

  return (
    <>
      <div className="section-divider" />

      <PageSection ariaLabel="Flyers" className="xl:px-80">
        <div className="animate-fade-up">
          <FlyerCarousel flyers={flyers} />
        </div>
      </PageSection>

      <div className="section-divider" />
    </>
  );
}
