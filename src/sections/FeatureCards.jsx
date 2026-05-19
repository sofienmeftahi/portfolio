import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg relative z-20">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4 bg-black-100/95 backdrop-blur-sm border-2 border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
        >
          <div className="size-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-base">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;