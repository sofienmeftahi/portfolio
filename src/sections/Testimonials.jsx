import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub=" Verified achievements"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {certifications.map((cert, index) => (
            <GlowCard card={cert} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={cert.imgPath} alt={cert.title} />
                </div>
                <div>
                  <p className="font-bold">{cert.title}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
