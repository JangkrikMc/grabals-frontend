const ShinyText = ({ 
  text, 
  speed = 5, 
  className = '' 
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background shine */}
      <div
        className="absolute inset-0 animate-shine"
        style={{
          backgroundColor: "",
          backgroundImage:
            '',
          backgroundSize: "",
          animationDuration,
        }}
      />

      {/* Text shine */}
      <span
        className={`relative font-bold bg-clip-text text-transparent animate-shine ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 60%)',
          backgroundSize: "800% 1500%",
          animationDuration,
        }}
      >
        <span className="text-neutral-300">{text}</span>
      </span>
    </div>
  );
};

export default ShinyText;
