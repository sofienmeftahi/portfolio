import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Testimonials = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub="Verified Professional Credentials"
        />

        <div className="space-y-6 mt-16">
          {/* Featured Certification - DP-600 */}
          {certifications.filter(c => c.featured).map((cert, index) => (
            <article
              key={`featured-${index}`}
              className="relative overflow-hidden rounded-3xl border-2 border-cyan-500/30 bg-black-100 p-8 md:p-12 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-cyan-500/20 to-transparent w-32 h-32 rounded-bl-full" />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cert.accent}`}
              />

              <div className="relative flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-full bg-cyan-500/20 border border-cyan-400/30 px-6 py-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                      FEATURED CERTIFICATION
                    </span>
                    <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white-50">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold leading-snug text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xl text-white-50 leading-relaxed">{cert.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-lg font-semibold text-cyan-200">
                      {cert.shortTitle}
                    </span>
                    {cert.credentialId ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg text-white-50">
                        Credential ID: {cert.credentialId}
                      </span>
                    ) : null}
                  </div>

                  <div className="pt-6">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500 px-8 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105"
                    >
                      Verify on Microsoft Learn
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Verify ${cert.title}`}
                  className="shrink-0"
                >
                  {cert.imgPath ? (
                    <div className="flex h-32 w-32 md:h-40 md:w-40 items-center justify-center overflow-hidden rounded-3xl border-2 border-cyan-400/30 bg-black-200 p-3 shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(34,211,238,0.3)]">
                      <img
                        src={cert.imgPath}
                        alt={cert.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-white/10 bg-black-200 text-center text-base font-semibold text-white">
                      {cert.issuer}
                    </div>
                  )}
                </a>
              </div>
            </article>
          ))}

          {/* Other Certifications */}
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">
            {certifications.filter(c => !c.featured).map((cert, index) => (
              <article
                key={index}
                className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-black-100 p-8 md:p-10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cert.accent}`}
                />

                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white-50">
                        {cert.issuer}
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold leading-snug text-white">
                          {cert.title}
                        </h3>
                        <p className="text-lg text-white-50">{cert.description}</p>
                      </div>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Verify ${cert.title}`}
                      className="shrink-0"
                    >
                      {cert.imgPath ? (
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black-200 p-3 shadow-[0_0_30px_rgba(255,255,255,0.04)] transition-transform duration-300 hover:scale-[1.05]">
                          <img
                            src={cert.imgPath}
                            alt={cert.title}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-black-200 text-center text-lg font-semibold text-white">
                          {cert.issuer}
                        </div>
                      )}
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-lg text-white-50">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                      {cert.shortTitle}
                    </span>
                    {cert.credentialId ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        ID: {cert.credentialId}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-6 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white/90"
                    >
                      Verify
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
