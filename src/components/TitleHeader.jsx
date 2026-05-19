const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge px-5 py-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-sm">
        <p className="text-sm md:text-base font-semibold">{sub}</p>
      </div>
      <div>
        <h1 className="font-bold md:text-4xl lg:text-5xl text-2xl text-center bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
